<template>
  <v-card height="100%" class="pa-4">
    <content-section title="About me">
      <v-card hover>
        <v-card-text class="text-justify">
          As a well-organized, responsible and open-minded person, I am eager to
          develop and to learn. In recent years I gained interest in web
          development. Since then, I have learned JavaScript and common
          technologies like Vue.js and Vuetify. At the end of 2019 I submitted
          my thesis with main focus at web component development with ccm.js.
          That gave me the possibility to explore a part of the web development
          world and gain a huge interest in it. After the journey of living and
          studying business informatics abroad, now I'm looking for new
          opportunities in my home country. The enthusiasm and optimism that I’m
          filled with, give me energy to chase my dreams with positivity and
          passion.
        </v-card-text>
      </v-card>
    </content-section>

    <content-section title="Education">
      <v-row v-for="(education, index) in educations" :key="index">
        <v-col class="pt-0">
          <v-card hover>
            <v-row>
              <v-col cols="2" align-self="center" class="pa-0">
                <v-row justify="center">
                  <v-icon large color="indigo">
                    {{ education.icon }}
                  </v-icon>
                </v-row>
              </v-col>
              <v-col cols="10" class="pt-0 pb-0">
                <v-card-title>
                  {{ education.title }}
                </v-card-title>

                <v-card-subtitle class="pb-0">
                  {{ education.description }}
                </v-card-subtitle>
                <v-card-text>
                  <v-icon color="indigo">mdi-map-marker</v-icon>
                  {{ education.location }}
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </content-section>

    <content-section title="Skills">
      <v-row>
        <template v-for="(skill, index) in skills">
          <v-col cols="12" md="6" :key="index" class="pb-0">
            <v-hover>
              <template v-slot="{ hover }">
                    <v-card :elevation="hover ? 6 : 2">
                      <v-icon color="indigo">
                        {{ skill.icon }}
                      </v-icon>
                      {{ skill.title }}
                      <v-progress-linear
                        background-opacity="0.3"
                        height="8"
                        color="#7874f2"
                        buffer-value="100"
                        :value="skill.value"
                      ></v-progress-linear>
                    </v-card>
              </template>
            </v-hover>
            <v-row justify="space-between">
              <v-chip class="ml-2 mr-2" outlined x-small text-color="indigo">
                Jnr
              </v-chip>
              <v-chip class="ml-2 mr-2" outlined x-small text-color="indigo">
                Mid
              </v-chip>
              <v-chip class="ml-2 mr-2" outlined x-small text-color="indigo">
                Snr
              </v-chip>
              <v-chip class="ml-2 mr-2" outlined x-small text-color="indigo">
                Pro
              </v-chip>
            </v-row>
          </v-col>
        </template>
      </v-row>
    </content-section>
  </v-card>
</template>

<script>
import ContentSection from "../content/ContentSection";

export default {
  // name: "ContentSection",
  components: {
    ContentSection
  },

  data: () => ({
    educations: [
      {
        icon: "mdi-school",
        title: "Bachelor's degree, Business Informatics",
        description: "Bonn-Rhein-Sieg University of Applied Sciences",
        location: "St. Augustin, Germany"
      },
      {
        icon: "mdi-school-outline",
        title: "Secondary Education",
        description: "Geo Milev Foreign Language School",
        location: "Dobrich, Bulgaria"
      }
    ],
    skills: [
      {
        title: "JavaScript",
        icon: "mdi-language-javascript",
        value: 45
      },
      {
        title: "HTML",
        icon: "mdi-language-html5",
        value: 50
      },
      {
        title: "VueJS",
        icon: "mdi-vuejs",
        value: 30
      },
      {
        title: "CSS",
        icon: "mdi-language-css3",
        value: 50
      },
      {
        title: "Vuetify",
        icon: "mdi-vuetify",
        value: 45
      },
      {
        title: "Bootstrap",
        icon: "mdi-bootstrap",
        value: 35
      },
      {
        title: "Git",
        icon: "mdi-git",
        value: 35
      },
      {
        title: "jQuery",
        icon: "mdi-jquery",
        value: 35
      },
      {
        title: "Agile Development",
        icon: "mdi-teach",
        value: 35
      },
      {
        title: "JIRA",
        icon: "mdi-jira",
        value: 40
      },
      {
        title: "Balsamiq",
        icon: "mdi-brush",
        value: 50
      },
      {
        title: "Adobe XD",
        icon: "mdi-adobe",
        value: 30
      },
      {
        title: "Selenium",
        icon: "mdi-view-quilt",
        value: 20
      },
      {
        title: "Cucumber",
        icon: "mdi-view-quilt",
        value: 20
      }
    ]
  })
};
</script>

<style scoped></style>
