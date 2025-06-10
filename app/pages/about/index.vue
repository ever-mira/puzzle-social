<template>
    <Page>
        <h1 class="text-3xl">{{ t('mainTitle') }}</h1>
        <br>

        <h2 class="text-xl">{{ t('networkByUsers') }}</h2>
        <br><br>
        <h2 class="text-xl">{{ t('whatFeatures') }}</h2>

        <br><br>
        <h2 class="text-xl">{{ t('possibleTaskAreasTitle') }}</h2><br>
        <ul class="list-disc list-inside">
            <li>{{ t('taskFeatures') }}</li>
            <li>{{ t('taskDevelopment') }}</li>
            <li>{{ t('taskDesign') }}</li>
            <li>{{ t('taskTest') }}</li>
            <li>{{ t('taskDeployment') }}</li>
            <li>{{ t('taskPR') }}</li>
            <li>{{ t('taskSupport') }}</li>
            <li>{{ t('taskModeration') }}</li>
        </ul>

        <br>
        <h2 class="text-xl">{{ t('supportJoinGroup') }}</h2>
        <a href="https://t.me/puzzle_social_team" target="_blank"
            class="text-blue-600">https://t.me/puzzle_social_team</a><br>
        {{ t('supportJoinGroupExample') }}<br>
        <br>


        <br>
        <h2 class="text-xl">{{ t('contributionGuideTitle') }}</h2>{{ t('contributionGuideAudience') }}<br>
        <a href="https://puzzle.codes" target="_blank" class="text-blue-600">https://puzzle.codes</a>
        <br><br>
        {{ t('openSourceDescription') }}<br><br>

        <br><br>
        <h2 class="text-xl">{{ t('supportTitle') }}</h2>
        {{ t('supportTypes') }}<br><br>


        <h2 class="text-xl">{{ t('successTitle') }}</h2>
        {{ t('successCriteria') }}<br><br>

        <h2 class="text-xl">{{ t('possibilitiesTitle') }}</h2>
        {{ t('possibilitiesQuestion') }} <br><br>

        <h2 class="text-xl">{{ t('energyTitle') }}</h2>
        {{ t('energySource') }}<br><br>

        <br><br><br>

        {{ t('techDetailsTitle') }}
        <h2 class="text-xl">{{ t('builtWithNuxtTitle') }}</h2>
        {{ t('nuxtDescription') }}
        <h2 class="text-xl">{{ t('builtWithSupabaseTitle') }}</h2>
        <a href="https://supabase.io" target="_blank" class="text-blue-600">Supabase</a>
        <div class="mb-39">
            <img src="assets/supabase.png" class="mx-auto">
            <img src="assets/supabase.jpg" class="mx-auto">
        </div>
    </Page>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({
    title: t('pageTitle'),
})
</script>

<i18n lang="json">{
  "de": {
    "pageTitle": "Über Puzzle",
    "mainTitle": "Über das Projekt",
    "networkByUsers": "Das Netzwerk soll gebaut werden von den Menschen, die es nutzen wollen.",
    "whatFeatures": "Welche Features wollen wir? Wenn alles möglich wäre?",
    "possibleTaskAreasTitle": "Folgende Aufgabenbereiche könnte es geben:",
    "taskFeatures": "Ausdenken der Features - Community Interaktion",
    "taskDevelopment": "Entwicklung",
    "taskDesign": "Design",
    "taskTest": "Test",
    "taskDeployment": "Deployment - Infrastruktur",
    "taskPR": "Öffentlichkeitsarbeit - Networking",
    "taskSupport": "Support / Help",
    "taskModeration": "Moderation",
    "supportJoinGroup": "Jeder der das Projekt unterstützen will, kann einfach der Gruppe beitreten:",
    "supportJoinGroupExample": "(Und einfach etwas in die Gruppe schreiben, wie z.B: \"ich finde die Idee gut\")",
    "contributionGuideTitle": "Hier gibt es den Contribution Guide:",
    "contributionGuideAudience": "(eher technisch und für Programmierer)",
    "openSourceDescription": "Das Projekt ist Open Source, d.h. jeder kann sich den Code anschauen (siehe Contribution Guide) und selbst zum Code beitragen (Features implementieren). Gesucht werden Visionäre, die programmieren können, und Träumer, die sich die Funktionen ausdenken.",
    "supportTitle": "Unterstützung",
    "supportTypes": "Jede Art von Weitersagen / Networking, oder einfach nur gute Ideen, und Vorschläge.",
    "successTitle": "Erfolg",
    "successCriteria": "Das Projekt ist erfolgreich, wenn wir Lust bekommen, selbst auf der Plattform zu stöbern / zu interagieren. Wenn nicht, wollen wir uns überlegen, was noch fehlt, damit sich das ändert.",
    "possibilitiesTitle": "Möglichkeiten",
    "possibilitiesQuestion": "Aus allen unendlichen Möglichkeiten, welche denkbaren Funktionalitäten, die wir in zukünftigen Realitäten entwickelt haben, haben das Leben auf der Erde deutlich verbessert?",
    "energyTitle": "Energie für das Projekt",
    "energySource": "Lebendigkeit auf der Plattform",
    "techDetailsTitle": "Technische Details in Kürze:",
    "builtWithNuxtTitle": "Erstellt mit Nuxt",
    "nuxtDescription": "Ein Meta-Framework basierend auf Vue.js",
    "builtWithSupabaseTitle": "Erstellt mit Supabase"
  },
  "en": {
    "pageTitle": "Puzzle About",
    "mainTitle": "About the Project",
    "networkByUsers": "The network should be built by the people who want to use it.",
    "whatFeatures": "What features do we want? If anything were possible?",
    "possibleTaskAreasTitle": "The following task areas could exist:",
    "taskFeatures": "Coming up with features - Community interaction",
    "taskDevelopment": "Development",
    "taskDesign": "Design",
    "taskTest": "Test",
    "taskDeployment": "Deployment - Infrastructure",
    "taskPR": "Public relations - Networking",
    "taskSupport": "Support / Help",
    "taskModeration": "Moderation",
    "supportJoinGroup": "Anyone who wants to support the project can simply join the group:",
    "supportJoinGroupExample": "(And just write something in the group, e.g: \"I think the idea is good\")",
    "contributionGuideTitle": "Here is the Contribution Guide:",
    "contributionGuideAudience": "(rather technical and for programmers)",
    "openSourceDescription": "The project is open source, i.e. everyone can look at the code (see Contribution Guide) and contribute to the code themselves (implement features). We are looking for visionaries who can program, and dreamers who come up with the functions.",
    "supportTitle": "Support",
    "supportTypes": "Any kind of word-of-mouth / networking, or just good ideas, and suggestions.",
    "successTitle": "Success",
    "successCriteria": "The project is successful if we feel like browsing / interacting on the platform ourselves. If not, we want to think about what is still missing to change that.",
    "possibilitiesTitle": "Possibilities",
    "possibilitiesQuestion": "Out of all infinite possibilities, which conceivable functionalities that we have developed in future realities have significantly improved life on Earth?",
    "energyTitle": "Energy for the project",
    "energySource": "Liveliness on the platform",
    "techDetailsTitle": "Technical details in short:",
    "builtWithNuxtTitle": "built with Nuxt",
    "nuxtDescription": "A meta-framework based on Vue.js",
    "builtWithSupabaseTitle": "built with Supabase"
  }
}</i18n>