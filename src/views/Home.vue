<template>
  <v-app>
    <v-img src="../../public/images/home-main.jpg"></v-img>
    <v-container class="fill-height" fluid>
      <v-row class="d-flex ma-6">
        <v-col cols="6">
          <div class="mx-14">
            <v-img
              src="../../public/images/card.jpg"
              height="330"
              width="300"
              class="grey darken-4"
              contain
            ></v-img>

            <v-text
              class="text-h5 teal--text text--accent-4 font-weight-regular"
              >Cum sociis natoque penatibus et magnis dis <br />
              parturient montes 2021.06.15 Digital Release
            </v-text>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="mx-14">
            <v-img
              src="../../public/images/cards.jpg"
              height="330"
              width="300"
              contain
              class="grey darken-4"
            ></v-img>

            <v-text
              class="text-h5 font-weight-regular red--text text--lighten-3"
              >Cum sociis natoque penatibus et magnis dis parturient montes
              2021.06.15 Digital Release
            </v-text>
          </div>
        </v-col>
      </v-row>

      <v-row class="ma-15" align-content="center">
        <v-col class="d-flex justify-center">
          <v-icon size="32" class="ma-3">mdi-instagram</v-icon>

          <v-icon size="32" class="ma-3">mdi-facebook</v-icon>

          <a
            href="https://twitter.com/hiromasa_eve

"
          >
            <v-icon size="32" class="ma-3">mdi-twitter</v-icon>
          </a>
          <v-icon size="32" class="ma-3">mdi-youtube</v-icon>

          <v-icon size="32" class="ma-3">mdi-spotify</v-icon>

          <v-icon size="32" class="ma-3">mdi-apple</v-icon>
        </v-col>
      </v-row>
    </v-container>

    <!--  -->
    <v-container class="d-flex flex-column" fill-w justify="center">
      <!-- NEWS -->
      <div class="news--box mx-14">
        <v-row justify="around">
          <v-col cols="4">
            <v-text class="text-h3">NEWS</v-text>
          </v-col>
          <v-col cols="8">
            <v-card class="d-flex justify-center" elevation="2" shaped tile>
              <v-col cols="3">
                <v-card-subtitle class="font-weight-light text-h6"
                  >2021.03.10</v-card-subtitle
                >
              </v-col>
              <v-col cols="9">
                <v-card-text class="font-weight-regular text-h5"
                  >【RELEASE】『rendez-vous(Instrumental)』RELEASE！</v-card-text
                >
                <v-card-text class="font-weight-light"
                  >泣き虫☔︎の1st
                  Album『rendez-vous』のインスト音源『rendez-vous(Instrumental)』が各配信サイトにてリ...</v-card-text
                >
              </v-col>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-6 mb-15">
          <v-col cols="1">
            <v-btn raised small text x-small class="">
              <v-icon>mdi-arrow-right-circle-outline</v-icon> more</v-btn
            >
          </v-col>
        </v-row>
      </div>
      <!-- DISCO -->
      <div class="news--box mx-14">
        <v-row justify="around">
          <v-col cols="4">
            <v-text class="text-h3">DISCO</v-text>
          </v-col>
          <v-col cols="8">
            <v-card class="d-flex justify-center" elevation="2" shaped tile>
              <v-col cols="3">
                <v-card-subtitle class="font-weight-light text-h6"
                  >2021.03.10</v-card-subtitle
                >
              </v-col>
              <v-col cols="9">
                <v-card-text class="font-weight-regular text-h5"
                  >【RELEASE】『rendez-vous(Instrumental)』RELEASE！</v-card-text
                >
                <v-card-text class="font-weight-light"
                  >泣き虫☔︎の1st
                  Album『rendez-vous』のインスト音源『rendez-vous(Instrumental)』が各配信サイトにてリ...</v-card-text
                >
              </v-col>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-6 mb-15">
          <v-col cols="1">
            <v-btn raised small text x-small class="">
              <v-icon>mdi-arrow-right-circle-outline</v-icon> more</v-btn
            >
          </v-col>
        </v-row>
      </div>
      <!-- LIVE -->
      <div class="news--box mx-14">
        <v-row justify="around">
          <v-col cols="4">
            <v-text class="text-h3">LIVE</v-text>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-6 mb-15">
          <v-col cols="1">
            <v-btn raised small text x-small class="">
              <v-icon>mdi-arrow-right-circle-outline</v-icon> more</v-btn
            >
          </v-col>
        </v-row>
      </div>
      <!-- VIDEO -->
      <div class="news--box mx-14">
        <v-row justify="around">
          <v-col cols="4">
            <v-text class="text-h3">VIDEO</v-text>
          </v-col>
        </v-row>
        <iframe
          class="mt-8"
          width="100%"
          height="600"
          src="https://www.youtube.com/embed/_Y6EGkUOR00"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <v-row justify="center" class="mt-6 mb-15">
          <v-col cols="1">
            <v-btn raised small text x-small class="">
              <v-icon>mdi-arrow-right-circle-outline</v-icon> more</v-btn
            >
          </v-col>
        </v-row>
      </div>

      <!-- STORE -->
      <div class="news--box mx-14">
        <v-row justify="around">
          <v-col cols="4">
            <v-text class="text-h3">STORE</v-text>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-6 mb-15">
          <v-col cols="1">
            <v-btn raised small text x-small class="">
              <v-icon>mdi-arrow-right-circle-outline</v-icon> more</v-btn
            >
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "home",

  components: {},

  data() {
    return {}
  },
  methods: {
    // TODO：外部サイト遷移→aタグでくくるorwindow.location.hrefで遷移
    // goTwitter() {
    //   const url = "https://twitter.com/hiromasa_eve"
    //   console.log(this)
    //   window.location = url
    // },
    goNews() {
      this.$router.push({
        path: "/news",
        name: "news",
      })
    },
  },
}
</script>
<style lang="scss">
.icon--box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.app-bar {
  opacity: 0.2;
}
</style>
