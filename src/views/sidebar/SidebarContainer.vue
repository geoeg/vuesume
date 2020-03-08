<template>
  <v-card>
    <v-card-text>

      <v-row>
        <v-col class="pa-0">
          <v-row justify="center" class="ma-4">
            <avatar></avatar>
          </v-row>
          <v-row justify="center" class="ma-2">
            <h1>Georgi 
              <span class="indigo--text text--lighten-1">
                Kolev
              </span>
            </h1>
          </v-row>
          <v-row justify="center" class="ma-0">
            <span>
              web developer
            </span>
          </v-row>
        </v-col>
      </v-row>

      <sidebar-section 
        :sections="sections.info"
      >
      </sidebar-section>

      <sidebar-section :sections="sections.socials">
        <p>sections.socials</p>
      </sidebar-section>

      <!-- 
      <sidebar-section :options="sections.hobbies">
        <p>sections.hobbies</p>
        <template v-slot:item="{ item }">
          <v-chip>
            <v-avatar>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-avatar>
            {{ item.text }}
          </v-chip>
        </template>
      </sidebar-section>

      <sidebar-section :options="sections.languages">
        <p>sections.languages</p>
      </sidebar-section> -->

    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from "./Avatar";
import SidebarSection from "./SidebarSection";
export default {
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
              icon: "mdi-linkedin-box",
              text: "linkedin.com/in/georgi-kolev",
              link: "https://www.linkedin.com/in/georgi-kolev-03656619b"
            },
            {
              icon: "mdi-github-circle",
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
              text: "Cooking"
            },
            {
              icon: "mdi-soccer",
              text: "Sports"
            },
            {
              icon: "mdi-code-tags",
              text: "Code"
            },
            {
              icon: "mdi-book-open-page-variant",
              text: "Reading"
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
