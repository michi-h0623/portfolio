<template>
  <v-col cols="12" sm="12" md="12" lg="6" xl="6" :class="containerSpacing">
    <v-sheet
      :elevation="sheetElevation"
      :color="sheetColor"
      :class="sheetSpacing"
    >
      <v-expansion-panels v-model="panel">
        <v-expansion-panel class="transparent" :class="panelSpacing">
          <!-- header -->
          <v-expansion-panel-header :class="panelHeaderSpacing">
            <p class="subtitle-2" :class="skillGenreSpacing">
              {{ skillGenre }}
            </p>
          </v-expansion-panel-header>
          <!-- content -->
          <v-expansion-panel-content :class="panelContentSpacing">
            <div
              :class="skillSpacing"
              v-for="skill in skills"
              :key="skill.name"
            >
              <!-- img or icon, skillName -->
              <v-row class="subtitle-1" :class="skillRowSpacing">
                <!-- first col -->
                <v-col
                  cols="2"
                  sm="1"
                  md="1"
                  lg="1"
                  xl="1"
                  :class="skillFirstColSpacing"
                >
                  <!-- img -->
                  <v-img
                    v-if="skill.img"
                    :src="skill.img"
                    max-height="24"
                    max-width="24"
                    aspect-ratio="1"
                  >
                  </v-img>
                  <!-- icon -->
                  <v-icon v-if="skill.icon" :color="skill.color" size="24">
                    {{ skill.icon }}
                  </v-icon>
                </v-col>
                <!-- second col -->
                <v-col :class="skillSecondColSpacing">
                  <!-- skill name -->
                  {{ skill.name }}
                </v-col>
              </v-row>
              <!-- progressBar -->
              <v-progress-linear
                height="15"
                :value="skill.exp"
                :color="skill.color"
                stream
                rounded
                striped
                :buffer-value="skill.exp"
                :class="progressBarSpacing"
              >
                <span class="font-weight-bold"> {{ skill.exp }}% </span>
              </v-progress-linear>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-sheet>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      containerSpacing: "px-4",
      skillGenreSpacing: "mb-0",
      skillSpacing: "pb-2",
      skillRowSpacing: "pb-1 mb-n3",
      skillFirstColSpacing: "pr-0",
      skillSecondColSpacing: "pl-0",
      progressBarSpacing: "mt-1",
      sheetColor: "grey darken-4",
      sheetElevation: "17",
      sheetSpacing: "",
      panel: 0,
      panelSpacing: "",
      panelHeaderSpacing: "",
      panelContentSpacing: ""
    };
  },
  props: {
    skills: {
      type: Object,
      default: null
    },
    skillGenre: {
      type: String,
      default: null
    }
  }
};
</script>
