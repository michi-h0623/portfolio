<template>
  <div>
    <!-- <the-drawer /> -->
    <the-header />

    <v-content>
      <v-container id="top">
        <v-row>
          <v-col class="top mb-4">
            <v-img
              src="/portfolio_top.png"
              width="1100"
              height="800"
              position="center"
              class="mx-auto"
            ></v-img>
          </v-col>
        </v-row>
        <v-divider />
        <v-row>
          <v-col class="about" id="about">
            <p class="subtitle-1">About</p>
            <the-about />
          </v-col>
        </v-row>
        <v-divider />
        <v-row>
          <v-col class="skill" id="skill">
            <p class="subtitle-1 mb-0">Skill</p>
            <the-skill />
          </v-col>
        </v-row>
        <v-divider />
        <v-row>
          <v-col class="portfolio" id="portfolio">
            <p class="subtitle-1">Portfolio</p>
            <v-row>
              <v-col cols="6">
                <v-card
                  max-width="600"
                  max-height="600"
                  class=""
                  color="gray lighten-4"
                >
                  <v-img src="/portfolio.png"> </v-img>
                  <v-card-text>
                    <p class="mb-0">michi-h portfolio</p>
                    <p class="mb-0">nuxt.js/vuetify.js</p>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card
                  max-width="600"
                  max-height="600"
                  class=""
                  color="gray lighten-4"
                  href="https://picsview.michi-h.site/"
                >
                  <v-img src="/picsview.png" height="295.233"> </v-img>
                  <v-card-text>
                    <p class="mb-0">picsView</p>
                    <p class="mb-0">Laravel/vue.js/vuex/vue-router/AWS S3</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <the-footer />
  </div>
</template>

<script>
// import TheDrawer from "../components/TheDrawer";
import TheHeader from "../components/TheHeader";
import TheFooter from "../components/TheFooter";
import TheSkill from "../components/TheSkill";
import TheAbout from "../components/theAbout";

export default {
  components: {
    // TheDrawer,
    TheHeader,
    TheFooter,
    TheSkill,
    TheAbout
  },
  data() {
    return {};
  }
};
</script>
