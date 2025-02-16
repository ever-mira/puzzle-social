<template>

  <div class="grid grid-cols-1 lg:grid-cols-2 mt-19 gap-4 w-full xl:w-90% 2xl:w-80% 3xl:w-75%">
    <FeatureBox>
      Konzepte & Strukturen
      <template v-slot:content>
        Wissen und Erkenntnisse teilen.
      </template>
    </FeatureBox>

    <FeatureBox>
      Visionen & Träume
      <template v-slot:content>
        Realitäten wahr werden lassen.
      </template>
    </FeatureBox>
  </div>

  <div class="mt-22 ml-3 lg:ml-7">
    <span class="text-3xl">Konzepte & Strukturen.</span><br>
  </div>

  <div class="mt-10 lg:mt-13 ml-3 lg:ml-7">
    <span class="text-lg lg:text-xl"> Eine Plattform, um Wissen und Erkenntnisse zu teilen, neue Menschen zu treffen,
      Projekte
      kennenzulernen, und
      Veranstaltungen zu organisieren.<br><br>

      Die direkte Interaktion der Menschen untereinander, als auch mit den Projekten,
      ermöglicht eine enge Verbindung, und erschafft neue Möglichkeiten. Feedback, Abstimmungen, News, und die
      Auflistung der angebotenen Produkte, stellen weitere Möglichkeiten dar.
    </span><br>
  </div>

  <div class="mt-22 ml-3 lg:ml-7">
    <span class="text-3xl">Visionen & Träume.</span><br>
  </div>

  <div class="mt-10 lg:mt-13 ml-3 lg:ml-7">
    <span class="text-lg lg:text-xl">Visionen einer besseren Welt zu erschaffen, und immer wieder in das Bewusstsein der
      Menschen
      zu
      holen, ist das Schlüssel-Prinzip, durch das neue Realitäten entstehen.
    </span><br>
  </div>


  <img src="assets/begriffe.png" class="mx-auto lg:ml-10% md:w-70% lg:w-60% 2xl:w-60% 3xl:w-50% mt-15">

  <div class="mt-19 mb-11">
    <h2 class="text-2xl">Es gibt so viel Potenzial, das nur noch nicht sichtbar genug ist.</h2>
    <span class="text-lg text-gray-700 dark:text-gray-400">Erschaffe dir ein Bild
      davon,
      was bereits jetzt alles wunderbares passiert.</span>
  </div>

  <Button color="indigo" to="/places" class="!px-8">
    Projekte erkunden
  </Button>

</template>