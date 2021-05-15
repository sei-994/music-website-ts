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
          <v-text class="subtitle-1 font-weight-medium"
            >Cum sociis natoque penatibus et magnis dis parturient montes
            2021.06.15 Digital Release
          </v-text>
        </v-col>
        <v-col max-width="500" cols="5">
          <v-card>
            <v-img
              src="../public/images/cards.jpg"
              height="500"
              contain
              class="grey darken-4"
            ></v-img>
          </v-card>
          <v-text class="subtitle-1 font-weight-medium"
            >Cum sociis natoque penatibus et magnis dis parturient montes
            2021.06.15 Digital Release
          </v-text>
        </v-col>
      </v-row>

      <v-row class="mx-15" align-content="center">
        <v-col class="d-flex justify-center">
          <v-icon size="32" class="ma-3">mdi-instagram</v-icon>

          <v-icon size="32" class="ma-3">mdi-facebook</v-icon>

          <v-icon size="32" class="ma-3">mdi-twitter</v-icon>

          <v-icon size="32" class="ma-3">mdi-youtube</v-icon>

          <v-icon size="32" class="ma-3">mdi-spotify</v-icon>

          <v-icon size="32" class="ma-3">mdi-apple</v-icon>
        </v-col>
      </v-row>
    </v-container>
    <v-content>
      <!--  -->
      <v-container class="d-flex flex-column" justify="center">
        <!-- NEWS -->
        <v-text class="text-h3">NEWS</v-text>
        <!-- DISCO -->
        <v-text class="text-h3">DISCO</v-text>
        <!-- LIVE -->
        <v-text class="text-h3">LIVE</v-text>
        <!-- VIDEO -->
        <v-text class="text-h3">VIDEO</v-text>
        <!-- STORE -->
        <v-text class="text-h3">STORE</v-text>
      </v-container>
    </v-content>
    <v-container> </v-container>
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
<style lang="scss">
.icon--box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
