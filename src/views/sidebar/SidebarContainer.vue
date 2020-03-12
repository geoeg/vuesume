<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col class="pa-0">
          <v-row justify="center" class="ma-4">
            <avatar></avatar>
          </v-row>
          <v-row justify="center" class="ma-2">
            <h1>
              Georgi
              <span class="indigo--text text--lighten-1">
                Kolev
              </span>
            </h1>
          </v-row>
          <v-row justify="center" class="ma-0 pb-4">
            <span>
              web developer
            </span>
          </v-row>
        </v-col>
      </v-row>

      <sidebar-section :sections="sections.info"></sidebar-section>

      <sidebar-section :sections="sections.socials"></sidebar-section>

      <sidebar-section :sections="sections.hobbies">
        <template #hobbies>
          <v-row class="ml-1 mr-1" justify="center">
            <template v-for="(item, index) in sections.hobbies.items">
              <v-col
                xs="12"
                sm="6"
                md="6"
                lg="4"
                class="pa-1"
                align="center"
                :key="index"
              >
                <v-chip class="pa-4 mt-1 mb-1" outlined color="indigo">
                  <v-avatar left>
                    <v-icon>
                      {{ item.icon }}
                    </v-icon>
                  </v-avatar>
                  {{ item.text }}
                </v-chip>
              </v-col>
            </template>
          </v-row>
        </template>
      </sidebar-section>

      <sidebar-section :sections="sections.languages">
        <template #languages>
          <v-row justify="center">
            <template v-for="(language, index) in sections.languages.items">
              <v-col class="pa-2" align="center" :key="index">
                <v-progress-circular
                  :value="language.value"
                  size="100"
                  width="8"
                  rotate="270"
                  color="#7874f2"
                >
                  {{ language.text }}
                </v-progress-circular>
              </v-col>
            </template>
          </v-row>
        </template>
      </sidebar-section>
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from "./Avatar";
import SidebarSection from "./SidebarSection";
export default {
  // name: "SidebarContainer",
  components: { Avatar, SidebarSection },
  data() {
    return {
      sections: {
        info: {
          title: "Info",
          items: [
            {
              icon: "mdi-email",
              text: "georgi.lyubomirov.kolev@gmail.com"
            },
            {
              icon: "mdi-cake-variant",
              text: "Sept 8, 1992"
            },
            {
              icon: "mdi-map-marker",
              text: "Sofia, Bulgaria"
            }
          ]
        },
        socials: {
          title: "Socials",
          items: [
            {
              icon: "mdi-linkedin",
              text: "linkedin.com/in/georgi-kolev",
              link: "https://www.linkedin.com/in/georgi-kolev-03656619b"
            },
            {
              icon: "mdi-github",
              text: "github.com/geoeg",
              link: "https://github.com/geoeg"
            },
            {
              icon: "mdi-chess-knight",
              text: "lichess.org/geoeg",
              link: "https://lichess.org/@/geoeg"
            }
          ]
        },
        hobbies: {
          title: "Hobbies",
          items: [
            {
              icon: "mdi-chef-hat",
              text: "Cook"
            },
            {
              icon: "mdi-soccer",
              text: "Sport"
            },
            {
              icon: "mdi-code-tags",
              text: "Code"
            },
            {
              icon: "mdi-music-circle",
              text: "Music"
            },
            {
              icon: "mdi-image-filter-hdr",
              text: "Travel"
            },
            {
              icon: "mdi-brush",
              text: "Draw"
            }
          ]
        },
        languages: {
          title: "Languages",
          items: [
            {
              text: "Bulgarian",
              value: 100
            },
            {
              text: "German",
              value: 90
            },
            {
              text: "English",
              value: 80
            }
          ]
        }
      }
    };
  }
};
</script>

<style scoped></style>
