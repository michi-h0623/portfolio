<template>
  <div>
    <Header />
    <v-content>
      <v-container id="top">
        <v-row>
          <v-col class="top" v-resize="onResize">
            <v-img
              :aspect-ratio="logoRatio"
              :width="logoX"
              position="center"
              :src="logoSrc"
              class="mx-auto"
            ></v-img>
          </v-col>
        </v-row>
        <v-divider />
        <v-row>
          <v-col class="about" id="about">
            <p class="subtitle-1">About</p>
            <About />
          </v-col>
        </v-row>
        <v-divider />
        <v-row>
          <v-col class="skill" id="skill">
            <p class="subtitle-1 mb-0">Skill</p>
            <Skill />
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
                    <p class="mb-0">picsView (現在閲覧不可)</p>
                    <p class="mb-0">Laravel/vue.js/vuex/vue-router/AWS S3</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Skill from "../components/Skill";
import About from "../components/About";

export default {
  components: {
    Header,
    Footer,
    Skill,
    About
  },
  data() {
    return {
      windowSize: {
        x: 0,
        y: 0
      }
    };
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    }
  },
  mounted() {
    this.onResize();
  },
  computed: {
    logoX() {
      if (this.windowSize.x < 600) {
        // return ((this.windowSize.y - 50) / 70) * 39;
        return 390;
      } else {
        return ((this.windowSize.y - 135) / 8) * 11;
      }
    },
    logoY() {
      return this.windowSize.y;
    },
    logoSrc() {
      if (this.windowSize.x < 600) {
        return "/logo_xs.png";
      } else {
        return "/logo.png";
      }
    },
    logoRatio() {
      if (this.windowSize.x < 600) {
        return 39 / 70;
      } else {
        return 11 / 8;
      }
    }
  }
};
</script>
