<template>
  <v-app-bar app>
    <!-- title -->
    <v-toolbar-title @click="$vuetify.goTo('#top')">
      michi-h portfolio
    </v-toolbar-title>

    <!-- space -->
    <v-spacer />

    <!-- links -->
    <v-toolbar-items>
      <v-divider vertical light /><v-divider vertical light />
      <!-- topへ -->
      <v-btn text @click="$vuetify.goTo('#top')">top</v-btn>
      <v-divider vertical light /><v-divider vertical light />
      <!-- aboutへ -->
      <v-btn text @click="$vuetify.goTo('#about')">about</v-btn>
      <v-divider vertical light /><v-divider vertical light />
      <!-- skillへ -->
      <v-btn text @click="$vuetify.goTo('#skill')">skill</v-btn>
      <v-divider vertical light /><v-divider vertical light />
      <!-- portfolioへ -->
      <v-btn text @click="$vuetify.goTo('#portfolio')">portfolio</v-btn>
      <v-divider vertical light /><v-divider vertical light />
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {};
</script>
