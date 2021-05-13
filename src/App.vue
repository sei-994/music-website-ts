<template>
  <v-app>
    <v-img src="../public/images/home-main.jpg"></v-img>
    <v-container class="fill-height" fluid style="min-height: 434px">
      <v-row class="d-flex ma-6" justify="center">
        <v-col cols="5">
          <v-card>
            <v-img
              src="../public/images/card.jpg"
              height="500"
              width="500"
              class="grey darken-4"
              contain
            ></v-img>
          </v-card>
        </v-col>
        <v-col max-width="500" cols="5">
          <v-card>
            <v-img
              src="../public/images/cards.jpg"
              height="125"
              contain
              class="grey darken-4"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-main> </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      mainImage: "../public/images/home-main.jpg",
    }
  },
}
</script>
