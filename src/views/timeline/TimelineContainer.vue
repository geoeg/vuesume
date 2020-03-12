<template>
  <v-card>
    <v-card-text class="text-justify">
      <content-section
        id="timeline"
        :title="detailed ? 'My Journey' : 'My Experience'"
      >
        <div>
          <v-switch
            v-model="detailed"
            color="indigo"
            :label="detailed ? 'Detailed' : 'Summary'"
          ></v-switch>
        </div>

        <v-timeline dense class="pa-0">
          <v-timeline-item
            v-for="(item, i) in orderedItems"
            :key="i"
            :icon="item.icon || ''"
            color="indigo"
            :class="{ transparent: item.transparent }"
            large
          >
            <template v-if="item.iconImage" v-slot:icon>
              <v-avatar>
                <img :src="publicPath(item.iconImage)" />
              </v-avatar>
            </template>

            <template v-slot:opposite></template>

            <v-row>
              <v-col
                v-if="$vuetify.breakpoint.smAndUp"
                md="1"
                sm="2"
                align-self="center"
              >
                <span>{{ item.year }}</span>
              </v-col>

              <v-col md="11" sm="10" xs="12" class="pa-0">
                <v-card class="elevation-2">
                  <v-card-title class="pb-0">
                    <div>
                      <p v-if="$vuetify.breakpoint.xsOnly">
                        {{ item.year }}
                      </p>
                      <h3>{{ item.title }}</h3>
                    </div>
                  </v-card-title>

                  <v-card-text class="pa-4">
                    <v-row>
                      <v-col
                        :md7="!!item.image"
                        :md12="!item.image"
                        xs="12"
                        class="pa-4 ma-0"
                      >
                        <div class="mr-0">
                          <span v-if="item.text" class="pre">
                            {{ item.text }}
                          </span>
                          <div v-else-if="item.html" v-html="item.html"></div>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from "../content/ContentSection";
export default {
  // name      : 'TimelineContainer',
  components: { ContentSection },
  data: () => ({
    detailed: true,
    items: [
      {
        detailed: true,
        transparent: true,
        year: "1992",
        title: "Born on Sept 8, 1992",
        html:
          "With a chance of %0.00000000000512.<br>I'm completely aware of value of the life!",
        icon: "mdi-cake-variant"
      },
      {
        detailed: false,
        transparent: false,
        year: "2011",
        title: "Graduated from Geo Milev Foreign Language School",
        html: `
          <p>
            For me learning foreign languages was something really interesting I decided to join the <a target="_blank" href="https://eg-dobrich.com/">Foreign Language School Geo Milev</a>
            where I studied german as main and english as second foreign language. The last year of high school I passed DaF (Deutsch als Fremdsprache) exam that gave me the C1 german certificate.
            The excelent degree and the DaF certificate where a clear sign for me that I want to explore some german speaking counrty.
          </p>
        `,
        icon: "mdi-school"
      },
      {
        detailed: true,
        transparent: true,
        year: "2011",
        title: "BonnJour!",
        html: `
          <p>
            So after graduated from high school I decided to study in Bonn, Germany. My choice was Bonn-Rhein-Sieg University.
          </p>          
          `,
        icon: "mdi-map-marker"
      },
      {
        detailed: false,
        transparent: false,
        year: "2013",
        title: "Worked Web Content Assistant",
        html: `
          <p>
            I spent a year working at <a target="_blank" href="https://www.snoopmedia.com/">Snoopmedia</a>. There I supported the experienced colleagues in small tasks like updating the content of the web pages of
            the German Academic Exchange Service (Deutscher Akademischer Austauschdienst - <a target="_blank" href="https://www.daad.de/de/">DAAD</a>) and <a target="_blank" href="https://www.das-ist-drin.de/">das-ist-drin</a>.
            In the time there I boosted my time management skills and learned some basic web technologies like HTML, CSS and JS.
          </p>
        `,
        icon: "mdi-laptop"
      },
      {
        detailed: false,
        transparent: false,
        year: "2017",
        title: "Volunteered at DOAG (German Oracle User Group) Conference",
        html: `
          <p>
          My university supported yearly the IT conference organized by <a target="_blank" href="https://www.doag.org/en/home/">DOAG e.V.</a>.
          There the students used to assist the technical preparation of scenes and support the normal workflow of the conference.
          The visit of DOAG showed me some interesting keynotes, presentations and workshops that opened my eyes for some new IT technologies. 
          </p>
        `,
        icon: "mdi-cards-heart"
      },
      {
        detailed: true,
        transparent: true,
        year: "2018",
        title: "Volunteered at JavaLand Conference",
        html: `
          <p>
          Similar to the DOAG conference, my university supported also the <a target="_blank" href="https://www.javaland.eu/de/home/">JavaLand</a> conference.
          </p>
        `,
        icon: "mdi-cards-heart"
      },
      {
        detailed: true,
        transparent: true,
        year: "2018",
        title: "Volunteered at DOAG (German Oracle User Group) Conference",
        html: `
          <p>
          As in 2017, I joined the DOAG conference the next year.  
          </p>
        `,
        icon: "mdi-cards-heart"
      },
      {
        detailed: false,
        transparent: false,
        year: "2019",
        title: "Worked as QA Student Intern",
        html: `
          <p>
              As a part of my study I had to find an internship with an IT core. So I got lucky and explored for 4 months the QA world supporting the university intern project ProSyWis. 
              In the time spent there I developed a test guide targeting new developers that want to join the team:
          </p>
              <ul>
                <li>Practical one: Using Selenium and Cucumber I built a template for UI testing.</li>
                <li>Theoretical one: A guide of 20 pages summarizing main conventions for writing tests for the project.</li>
            </ul>
        `,
        icon: "mdi-laptop"
      },
      {
        detailed: false,
        transparent: false,
        year: "2019",
        title: "Worked as Shift Supervisor",
        html: `
          <p>
          In my student years I spent quite some time working, so I could fincance my life in Germany. At <a target="_blank" href="https://anno-tubac.de/">Anno Tubac</a> I explored the restaurant world,
          working as shift supervisor. I gained a lot of experience during the time there, working at every possible position so I could know about every details in every process happening there.
          The time spend there some of my main tasks were:
          </p>
            <ul>
                <li>Manage and organize the workflow</li>
                <li>Ensure that the daily goals are met</li>
                <li>Train and integrate new employees</li>
                <li>Active guest contact</li>
            </ul>
        `,
        icon: "mdi-silverware-fork-knife"
      },
      {
        detailed: false,
        transparent: false,
        year: "2020",
        title: "Graduated from the Bonn-Rhein-Sieg University",
        html: `
          <p>
              In January 2020 I finished my Bachelor study in Business Informatics at <a target="_blank" href="https://www.h-brs.de/en">H-BRS</a>. The thesis I wrote in german had the topic: 'Development of an exam builder using ccmJS-Framework and -Apps'.
              The source code from it is available <a target="_blank" href="https://github.com/geoeg/">here</a>.
              This topic gave me the opportunity to explore the huge world of modern web technologies like web components. Now I'm eager to develop and jump in the depth of the IT world.
            Some of the main topics in my study were:
          </p>
            <ul>
                <li>Algorithms and Data structures</li>
                <li>Software Engineering</li>
                <li>Database Systems</li>
                <li>IT-Management</li>
                <li>E-Business</li>
                <li>Business English</li>
                <li>Economy basics</li>
                <li>IT-Law basics</li>
            </ul>
        `,
        icon: "mdi-school"
      },
      {
        detailed: true,
        transparent: true,
        year: "2020",
        title: "Moved forward to Sofia & back to Bulgaria",
        html: `
          <p>
              After the journey living for 8.5 years abroad, I was looking for some new opportunities. 
              For me it was clear that I want to move to other city/country, so the move to Sofia was something I already decided an year ago. 
              Now I'm looking for a developer job to apply the knowledge I gained in my study and collect some new experience in modern web technologies.
              To meet new people, to spend more time with family and childhood friends and to explore the bulgarian culture in depth are just some of the additional positives I gained with that move.
          </p>          
          `,
        icon: "mdi-map-marker"
      }
    ]
  }),
  computed: {
    orderedItems() {
      const items = [...this.items].reverse();
      if (this.detailed) return items;
      return items.filter(item => {
        return !item.detailed;
      });
    }
  }
};
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.pre {
  white-space: pre;
}
.transparent {
  opacity: 0.6;
}
</style>
