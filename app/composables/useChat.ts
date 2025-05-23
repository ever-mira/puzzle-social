import ReconnectingWebSocket from "reconnecting-websocket"

type ChatMessage = {
  type: string
  user: ChatUser
  content: string
}

interface ChatUser {
  id: string
  username: string
}

export function useChat() {
  const state = reactive({
    messages: ref<ChatMessage[]>([]),
    error: false,
    connected: false,
  })

  const supabase = useSupabaseClient()
  let socket: ReconnectingWebSocket

  const env: number = 1
  let socketUrl = `ws://127.0.0.1:8787/`
  if (env === 1) {
    socketUrl = `wss://puzzle-chat.to-ee5.workers.dev/`
  }

  onUnmounted(() => {
    if (socket) {
      socket.close()
    }
  })

  const connectSocket = async (slug: string) => {
    const session = await supabase.auth.getSession()

    if (session && session.data.session) {
      const accessToken = session.data.session?.access_token
      const encodedAccessToken = btoa(accessToken || "").replace(/=+$/, "")
      socket = new ReconnectingWebSocket(`${socketUrl}${slug}`, encodedAccessToken)
    } else {
      socket = new ReconnectingWebSocket(`${socketUrl}${slug}`) // anonymous connection
    }
    addSocketEvents()
  }

  const addSocketEvents = () => {
    socket.onopen = () => {
      state.connected = true
    }

    socket.onmessage = (event) => {
      let incoming = JSON.parse(event.data)

      if (Array.isArray(incoming)) {
        incoming.forEach((message: ChatMessage) => {
          state.messages.push(message)
        })
      } else {
        state.messages.push(incoming)
      }
    }
  }

  const send = (text: string) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      let message = {
        type: "message",
        content: text,
      }
      socket.send(JSON.stringify(message))
    } else {
      console.error("WebSocket is not open")
    }
  }

  return {
    ...toRefs(state),
    connectSocket,
    send,
  }
}
