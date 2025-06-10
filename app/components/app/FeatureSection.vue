<template>

  <div class="grid grid-cols-1 lg:grid-cols-2 mt-25 gap-4 w-full xl:w-90% 2xl:w-80% 3xl:w-75%">
    <FeatureBox>
      {{ t('conceptsTitle') }}
      <template v-slot:content>
        {{ t('conceptsDescription') }}
      </template>
    </FeatureBox>

    <FeatureBox>
      {{ t('visionsTitle') }}
      <template v-slot:content>
        {{ t('visionsDescription') }}
      </template>
    </FeatureBox>
  </div>

  <div class="mt-22 ml-3 lg:ml-7">
    <span class="text-3xl">{{ t('conceptsTitle') }}</span><br>
  </div>

  <div class="mt-10 lg:mt-13 ml-3 lg:ml-7">
    <span class="text-lg lg:text-xl whitespace-pre-line"> {{ t('platformDescription') }}
    </span><br>
  </div>

  <div class="mt-22 ml-3 lg:ml-7">
    <span class="text-3xl">{{ t('visionsTitle') }}</span><br>
  </div>

  <div class="mt-10 lg:mt-13 ml-3 lg:ml-7">
    <span class="text-lg lg:text-xl">{{ t('visionsKeyPrinciple') }}
    </span><br>
  </div>


  <img src="assets/begriffe.png" class="mx-auto lg:ml-10% md:w-65% lg:w-60% 2xl:w-45% 3xl:w-40% mt-15">

  <div class="mt-19 mb-14">
    <h2 class="text-2xl">{{ t('potentialTitle') }}</h2>
    <span class="text-lg text-gray-700 dark:text-gray-400">{{ t('potentialDescription') }}</span>
  </div>

  <Button color="indigo" to="/places">
    {{ t('exploreProjects') }}
  </Button>

</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="json">{
  "de": {
    "conceptsTitle": "Konzepte & Strukturen",
    "conceptsDescription": "Wissen und Erkenntnisse teilen",
    "visionsTitle": "Visionen & Träume",
    "visionsDescription": "Realitäten wahr werden lassen",
    "platformDescription": "Eine Plattform, um Wissen und Erkenntnisse zu teilen, neue Menschen zu treffen, Projekte kennenzulernen, und Veranstaltungen zu organisieren.\n\nDie direkte Interaktion der Menschen untereinander, als auch mit den Projekten, ermöglicht eine enge Verbindung, und erschafft neue Möglichkeiten. Feedback, Abstimmungen, News, und die Auflistung der angebotenen Produkte, stellen weitere Möglichkeiten dar.",
    "visionsKeyPrinciple": "Visionen einer besseren Welt zu erschaffen, und immer wieder in das Bewusstsein der Menschen zu holen, ist das Schlüssel-Prinzip, durch das neue Realitäten entstehen.",
    "potentialTitle": "Es gibt viel Potenzial, das noch nicht sichtbar genug ist.",
    "potentialDescription": "Erschaffe dir ein Bild davon, was bereits jetzt alles wunderbares passiert.",
    "exploreProjects": "Projekte erkunden"
  },
  "en": {
    "conceptsTitle": "Concepts & Structures",
    "conceptsDescription": "Share knowledge and insights",
    "visionsTitle": "Visions & Dreams",
    "visionsDescription": "Making realities come true",
    "platformDescription": "A platform to share knowledge and insights, meet new people, get to know projects, and organize events.\n\nThe direct interaction between people, as well as with projects, enables a close connection and creates new opportunities. Feedback, voting, news, and the listing of offered products represent further possibilities.",
    "visionsKeyPrinciple": "Creating visions of a better world and bringing them back into people's consciousness again and again is the key principle through which new realities emerge.",
    "potentialTitle": "There is a lot of potential that is not yet visible enough.",
    "potentialDescription": "Get an idea of all the wonderful things that are already happening.",
    "exploreProjects": "Explore Projects"
  }
}</i18n>