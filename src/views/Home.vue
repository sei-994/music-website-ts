<template>
  <v-app>
    <v-img>
      <div class="content__container-img">
        <div class="content__container-text">
          <h2 class="pa-8">Aenean commodo</h2>
          <h1>Lorem ipsum dolor sit</h1>
        </div>
      </div>
    </v-img>

    <!-- <v-img src="../../public/images/home-main.jpg"></v-img> -->
    <v-container class="fill-height" fluid>
      <v-row class="d-flex ma-15" justify="center">
        <!-- <v-col cols="6">
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
        </v-col> -->
        <v-col cols="5">
          <div class="mx-14">
            <a href="https://big-up.style/musics/444605">
              <v-card max-width="400" class="mb-4">
                <v-img
                  src="../../public/images/博聖さまアイコン正面.jpg"
                  contain
                  class="grey darken-4"
                ></v-img>
                <v-card-text class="font-weight-regular text-h5"
                  >【RELEASE】<br />『瞳の奥に刺さる』</v-card-text
                >
                <v-card-text class="font-weight-light"
                  >博聖の1st Album『瞳の奥に刺さる』<br />が各配信サイトにてリリース！</v-card-text
                >
              </v-card>
            </a>
          </div>
          <!-- <v-text
              class="text-h5 font-weight-regular red--text text--lighten-3"
              >Cum sociis natoque penatibus et magnis dis parturient montes
              2021.06.15 Digital Release
            </v-text> -->
          <!-- <div class="album-text-box"> -->
          <!-- </div> -->
        </v-col>
      </v-row>

      <v-row class="ma-16" align-content="center">
        <v-col class="d-flex justify-center mb-15">
          <a href="https://www.instagram.com/hiromasa_music_official/?hl=ja">
            <v-icon size="32" class="ma-3">mdi-instagram</v-icon>
          </a>
          <a
            href="https://twitter.com/hiromasa_eve
"
          >
            <v-icon size="32" class="ma-3">mdi-twitter</v-icon>
          </a>
          <a href="https://music.youtube.com/channel/UCGgxTOrmCgddheY_5Z73baA">
            <v-icon size="32" class="ma-3">mdi-youtube</v-icon>
          </a>
          <a href="https://open.spotify.com/artist/3CKlU5H0NuhxBQoHMvxllJ">
            <v-icon size="32" class="ma-3">mdi-spotify</v-icon>
          </a>
          <a
            href="https://music.apple.com/jp/album/%E7%9E%B3%E3%81%AE%E5%A5%A5%E3%81%AB%E5%88%BA%E3%81%95%E3%82%8B-single/1544894649"
          >
            <v-icon size="32" class="ma-3">mdi-apple</v-icon>
          </a>
        </v-col>
      </v-row>
    </v-container>

    <!--  -->
    <v-container class="d-flex flex-column" fill-w justify="center">
      <!-- NEWS -->
      <div class="news--box ma-14">
        <v-row justify="around">
          <v-col cols="4">
            <v-text class="section-title-text">NEWS</v-text>
          </v-col>
          <v-col cols="8">
            <v-card
              @click="goNews"
              class="d-flex justify-center"
              elevation="2"
              shaped
              tile
            >
              <v-col cols="3">
                <v-card-subtitle class="font-weight-light text-h6"
                  >2020.12</v-card-subtitle
                >
              </v-col>
              <v-col cols="9">
                <v-card-text class="font-weight-regular text-h5"
                  >【RELEASE】『瞳の奥に刺さる』</v-card-text
                >
                <v-card-text class="font-weight-light"
                  >博聖の1st
                  Album『瞳の奥に刺さる』が各配信サイトにてリ...</v-card-text
                >
              </v-col>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-6 mb-15">
          <v-col cols="1">
            <v-btn raised small text x-small @click="goNews">
              <v-icon>mdi-arrow-right-circle-outline</v-icon> more</v-btn
            >
          </v-col>
        </v-row>
      </div>
      <!-- DISCO -->
      <div class="news--box ma-14">
        <v-row justify="around">
          <v-col cols="4">
            <v-text class="section-title-text">DISCO</v-text>
          </v-col>
          <v-col cols="8">
            <v-card
              @click="goDisco"
              class="d-flex justify-center"
              elevation="2"
              shaped
              tile
            >
              <v-col cols="3">
                <v-img
                  src="../../public/images/博聖様アイコン横顔.jpg"
                  width="100%"
                  height="100%"
                ></v-img>
              </v-col>
              <v-col cols="9">
                <v-card-subtitle class="font-weight-light text-h6"
                  >2020.12</v-card-subtitle
                >
                <v-card-text class="font-weight-regular text-h5"
                  >【RELEASE】『瞳の奥に刺さる』</v-card-text
                >
                <v-card-text class="font-weight-light"
                  >博聖の1st
                  Album『瞳の奥に刺さる』が各配信サイトにてリ...</v-card-text
                >
              </v-col>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-6 mb-15">
          <v-col cols="1">
            <v-btn raised small text x-small @click="goDisco">
              <v-icon>mdi-arrow-right-circle-outline</v-icon> more</v-btn
            >
          </v-col>
        </v-row>
      </div>

      <!-- VIDEO -->
      <div class="news--box ma-14">
        <v-row justify="left">
          <v-col cols="4">
            <v-text class="section-title-text">VIDEO</v-text>
          </v-col>
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
        </v-row>
        <!-- <v-row justify="center" class="mt-6 mb-15">
          <v-col cols="1">
            <v-btn raised small text x-small class="">
              <v-icon>mdi-arrow-right-circle-outline</v-icon> more</v-btn
            >
          </v-col>
        </v-row> -->
      </div>

      <!-- CONTACT -->
      <div class="news--box ma-14">
        <v-row justify="around">
          <v-col cols="4">
            <v-text class="section-title-text">CONTACT</v-text>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-6 mb-15">
          <v-card>
            <v-img
              src="../../public//images/hiromasa.jpg"
              class="contact-img"
            ></v-img>
          </v-card>
        </v-row>
        <v-row justify="center" class="mt-6 mb-15">
          <v-col cols="1">
            <v-btn raised small text x-small @click="goContact">
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
    goNews() {
      this.$router.push({
        path: "/news",
        name: "news",
      })
    },
    goDisco() {
      this.$router.push({
        path: "/disco",
        name: "disco",
      })
    },
    goContact() {
      this.$router.push({
        path: "/contact",
        name: "contact",
      })
    },
  },
}
</script>
<style lang="scss">
.content__ {
  &container- {
    &text {
      color: white;
      padding-left: 4rem;
    }
    &img {
      background-image: url(../../public/images/home-main.jpg);
      background-size: cover;
      background-position: center center;
      width: 100%;
      height: 100vh;
      padding: 0;
    }
  }
}
h1 {
  // font-family: "Noto Serif JP", serif;
  font-family: "Zapfino", sans-serif;
  font-size: 4.8rem;
}
h2 {
  font-family: "Zapfino", sans-serif;
}
a {
  text-decoration: none;
}
.album-text-box {
  margin: auto 0;
}
.section-title-text {
  font-family: "Noto Serif JP", serif;
  font-size: 2.5rem;
}
.contact-img {
  // border-radius: 50%;
  max-width: 10.5rem;
  max-height: 10.5rem;
}
</style>
