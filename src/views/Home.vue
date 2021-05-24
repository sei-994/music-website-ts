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

      <icon-bar></icon-bar>
    </v-container>

    <v-container class="d-flex flex-column" justify="center">
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
                  >1st CD</v-card-subtitle
                >
                <v-card-text class="font-weight-regular text-h5"
                  >『瞳の奥に刺さる』</v-card-text
                >
                <br /><br />
                <v-card-subtitle class="font-weight-light text-h6"
                  >2020.12</v-card-subtitle
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

      <!-- ABOUT -->
      <div class="news--box ma-14">
        <v-row justify="around">
          <v-col cols="4">
            <v-text class="section-title-text">ABOUT</v-text>
          </v-col>
        </v-row>
        <v-row justify="center" class="mt-6 mb-15">
          <v-card class="rounded-circle">
            <v-img
              src="../../public//images/hiromasa.jpg"
              class="contact-img"
            ></v-img>
          </v-card>
        </v-row>
        <v-row justify="center">
          <v-card-text class="font-weight-light contact-text">
            世紀末生まれのアーティスト。<br />
            海外で東京藝術大学卒業のピアニストに師事をし、帰国後小学6年生からピアノで作曲を始める。<br />
            クラシックやジャズ、ロック、ボーカロイドなど様々なジャンルの音楽の影響を受けており、<br />
            繊細で時に暴力的なピアノと爽快なギターを軸に、エモーショナルなサウンドを内包した芸術性の高い音楽を作曲する。</v-card-text
          >
        </v-row>
        <v-row justify="center" class="mt-6 mb-15">
          <v-col cols="1">
            <v-btn raised small text x-small @click="goContact">
              <v-icon>mdi-arrow-right-circle-outline</v-icon>contact</v-btn
            >
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import IconBar from "../components/IconBar.vue"
export default {
  name: "home",

  components: { IconBar },

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
.contact {
  &-img {
    max-width: 10.5rem;
    max-height: 10.5rem;
  }
  &-text {
    text-align: center;
  }
}
</style>
