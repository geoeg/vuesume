<template>
  <v-card>
    <v-card-text>
      <div>
        <avatar></avatar>
        <h1>Georgi <span class="indigo--text text--lighten-1">Kolev</span></h1>
        <span>
          web developer
        </span>
      </div>

      <sidebar-container :options="sections.info">
        <p>sections.info</p>
      </sidebar-container>

      <sidebar-container :options="sections.socials">
        <p>sections.socials</p>
      </sidebar-container>

      <sidebar-container :options="sections.hobbies">
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
      </sidebar-container>

      <sidebar-container :options="sections.languages">
        <p>sections.languages</p>
      </sidebar-container>
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from "./Avatar";
import SidebarContainer from "./SidebarSection";
export default {
  components: { Avatar, SidebarContainer },
  data() {
    return {
      sections: {
        info: {
          title: "Info",
          items: [
            {
              name: "Email",
              icon: "mdi-email",
              text: "georgi.lyubomirov.kolev@gmail.com"
            },
            {
              name: "Birth Date",
              icon: "mdi-cake-variant",
              text: "Sept 8, 1992"
            },
            {
              name: "Habitation",
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
