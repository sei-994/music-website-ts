<template>
  <v-app>
    <v-img
      v-cloak
      v-observe-visibility="visibilityChanged01"
      v-bind:class="{ fadeinactive: isVisible01 }"
      class="scroll_area"
    >
      <v-container class="fill-height content__container-img" fluid>
        <v-row class="content__container-text"> </v-row>
      </v-container>
    </v-img>

    <v-container class="d-flex flex-column">
      <div class="mx-lg-14 mx-xs-1">
        <v-row class="d-flex ma-15" justify-lg="center">
          <!-- <a href="https://big-up.style/musics/444605"> -->
          <v-col lg="5" class="main-card-box">
            <v-hover v-slot="{ hover }">
              <v-card
                @click="goNewsDetail"
                class="mb-4 d-flex flex-column main-card-contents"
                :class="`${hover ? 'hover_true' : 'not_hover'}`"
              >
                <v-img
                  src="../../public/images/single2.png"
                  contain
                  v-observe-visibility="visibilityChanged02"
                  v-bind:class="{ fadeinactive: isVisible02 }"
                  class="scroll_area grey darken-4"
                ></v-img>

                <v-card-text class="font-weight-regular text-h5"
                  >【RELEASE】<br />『君と紫煙』</v-card-text
                >
                <v-card-text class="font-weight-light"
                  >博聖の2nd Single<br />が各配信サイトにてリリース！</v-card-text
                >
              </v-card>
            </v-hover>
          </v-col>

          <!-- </a> -->
        </v-row>
      </div>

      <icon-bar
        v-observe-visibility="visibilityChanged03"
        v-bind:class="{ fadeinactive: isVisible03 }"
        class="scroll_area"
      ></icon-bar>

      <!-- NEWS -->
      <div
        v-observe-visibility="visibilityChanged04"
        v-bind:class="{ fadeinactive: isVisible04 }"
        class="scroll_area"
      >
        <div class="ma-lg-14">
          <v-row>
            <v-col lg="4">
              <v-text class="section-title-text">NEWS</v-text>
            </v-col>
            <v-col lg="8">
              <v-hover v-slot="{ hover }">
                <v-card
                  @click="goNewsDetail"
                  class="d-lg-flex justify-center"
                  elevation="2"
                  outlined
                  tile
                  width="100%"
                  height="100%"
                  :class="`${hover ? 'hover_true' : 'not_hover'}`"
                >
                  <v-col lg="3">
                    <v-card-subtitle class="font-weight-light text-h6"
                      >2021.9</v-card-subtitle
                    >
                  </v-col>
                  <v-col lg="9">
                    <v-card-text class="font-weight-regular text-h5"
                      >【RELEASE】『君と紫煙』</v-card-text
                    >
                    <v-card-text class="font-weight-light"
                      >博聖の2nd
                      Single『君と紫煙』が各配信サイトにてリ...</v-card-text
                    >
                  </v-col>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
          <v-row justify="center" class="mt-6 mb-15">
            <v-col cols="3">
              <v-btn raised small text x-small @click="goNewsLibrary">
                <v-icon>mdi-arrow-right-circle-outline</v-icon> more</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </div>
      <!-- DISCO -->
      <div
        v-observe-visibility="visibilityChanged05"
        v-bind:class="{ fadeinactive: isVisible05 }"
        class="scroll_area"
      >
        <div class="ma-lg-14">
          <v-row>
            <v-col lg="4">
              <v-text class="section-title-text">DISCO</v-text>
            </v-col>
            <v-col lg="8">
              <v-hover v-slot="{ hover }">
                <v-card
                  @click="goDisco"
                  class="d-lg-flex justify-center"
                  elevation="2"
                  shaped
                  tile
                  :class="`${hover ? 'hover_true' : 'not_hover'}`"
                >
                  <v-col lg="3">
                    <v-img
                      src="../../public/images/single2.png"
                      width="100%"
                      height="100%"
                    ></v-img>
                  </v-col>
                  <v-col lg="9">
                    <v-card-subtitle class="font-weight-light text-h6"
                      >2nd Single</v-card-subtitle
                    >
                    <v-card-text class="font-weight-regular text-h5"
                      >『君と紫煙』</v-card-text
                    >
                    <br /><br />
                    <v-card-subtitle class="font-weight-light text-h6"
                      >2021.9</v-card-subtitle
                    >
                  </v-col>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
          <v-row justify="center" class="mt-6 mb-15">
            <v-col cols="3">
              <v-btn raised small text x-small @click="goDisco">
                <v-icon>mdi-arrow-right-circle-outline</v-icon> more</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </div>

      <!-- VIDEO -->
      <div>
        <div class="my-14 ml-lg-14">
          <v-row>
            <v-col
              cols="4"
              v-observe-visibility="visibilityChanged06"
              v-bind:class="{ fadeinactive: isVisible06 }"
              class="scroll_area"
            >
              <v-text class="section-title-text">VIDEO</v-text>
            </v-col>
            <v-row justify="center" class="iframeWrapper">
              <iframe
                class="mt-8"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/gqYbBzhi2vs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-row>
          </v-row>
        </div>
      </div>
      <!-- STORE -->
      <div
        v-observe-visibility="visibilityChanged05"
        v-bind:class="{ fadeinactive: isVisible05 }"
        class="scroll_area"
      >
        <div class="ma-lg-14">
          <v-row>
            <v-col lg="4">
              <v-text class="section-title-text">STORE</v-text>
            </v-col>
            <v-col lg="8">
              <v-hover v-slot="{ hover }">
                <a :href="storeUrl">
                  <v-img
                    max-width="400"
                    max-height="400"
                    src="../../public/images/store_logo.svg"
                    :class="`${hover ? 'hover_true' : 'not_hover'}`"
                  ></v-img>
                </a>
              </v-hover>
            </v-col>
          </v-row>
          <v-row justify="center" class="mt-6 mb-15">
            <v-col cols="3">
              <a :href="storeUrl">
                <v-btn raised small text x-small>
                  <v-icon>mdi-arrow-right-circle-outline</v-icon> more</v-btn
                >
              </a>
            </v-col>
          </v-row>
        </div>
      </div>
      <!-- CONTACT -->
      <div
        v-observe-visibility="visibilityChanged07"
        :class="{ fadeinactive: isVisible07 }"
        class="scroll_area"
      >
        <div class="my-14 ml-lg-14">
          <v-row justify="around">
            <v-col cols="4">
              <v-text class="section-title-text">CONTACT</v-text>
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

          <v-row justify="center" class="mt-3 mb-15 mr-9">
            <v-col cols="3" lg="1" sm="2">
              <v-btn raised small text x-small @click="goContact">
                <v-icon>mdi-arrow-right-circle-outline</v-icon>contact</v-btn
              >
            </v-col>
          </v-row>
        </div>
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
    return {
      isVisible01: false,
      isVisible02: false,
      isVisible03: false,
      isVisible04: false,
      isVisible05: false,
      isVisible06: false,
      isVisible07: false,
      storeUrl: "https://hiromasa-eve.booth.pm/",
    }
  },
  methods: {
    visibilityChanged01(isVisible01) {
      this.isVisible01 = isVisible01
    },
    visibilityChanged02(isVisible02) {
      this.isVisible02 = isVisible02
    },
    visibilityChanged03(isVisible03) {
      this.isVisible03 = isVisible03
    },
    visibilityChanged04(isVisible04) {
      this.isVisible04 = isVisible04
    },
    visibilityChanged05(isVisible05) {
      this.isVisible05 = isVisible05
    },
    visibilityChanged06(isVisible06) {
      this.isVisible06 = isVisible06
    },
    visibilityChanged07(isVisible07) {
      this.isVisible07 = isVisible07
    },
    goNewsDetail() {
      this.$router.push({
        path: "/newsdetail",
        name: "newsdetail",
        params: {
          id: 1,
        },
      })
    },
    goNewsLibrary() {
      this.$router.push({
        path: "/newslibrary",
        name: "newslibrary",
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
$pc: 1024px; // PC
$tab: 680px; // タブレット
$sp: 480px; // スマホ

@mixin pc {
  @media (max-width: ($pc)) {
    @content;
  }
}
@mixin tab {
  @media (max-width: ($tab)) {
    @content;
  }
}
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}
.content__ {
  &container- {
    &text {
      color: white;
      padding-left: 4rem;
    }
    &img {
      background-image: url(../../public/images/博聖様アイコン横顔.jpg);
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

.iframeWrapper {
  width: 100%;

  margin: 0 auto;
}

.iframeWrapper iframe {
  min-width: 50rem;
  max-width: 100%;
  min-height: 31rem;
  @include tab {
    max-width: 90%;

    min-height: 25rem;
    min-width: 34rem;
  }
  @include sp {
    max-width: 90%;

    min-height: 10rem;
    min-width: 15rem;
  }
}

/*下からフェードイン*/
.fadeinactive {
  opacity: 0;
  animation-name: fadein-bottom;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}
@keyframes fadein-bottom {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
