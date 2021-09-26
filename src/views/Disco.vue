<template>
  <v-app>
    <v-container class="d-flex flex-column mt-8" justify="center">
      <!-- DISCO -->
      <v-row justify-lg="center" class="ma-5">
        <v-card
          max-width="100%"
          max-height="200px"
          class="disco-img-box scroll_area"
          v-observe-visibility="visibilityChanged01"
          :class="{ fadeinactive: isVisible01 }"
        >
          <v-img
            src="../../public/images/博聖さまアイコン正面.jpg"
            class="disco-img"
            height="100%"
            width="100%"
          ></v-img>
        </v-card>
      </v-row>

      <div
        class="ma-lg-14 scroll_area"
        v-observe-visibility="visibilityChanged02"
        v-bind:class="{ fadeinactive: isVisible02 }"
      >
        <v-row justify-lg="around">
          <v-text class="section-title-text mb-8">DISCO</v-text>
          <v-col lg="4"> </v-col>
          <v-layout wrap lg="8" justify-space-around>
            <v-flex xs12 sm9 md8 lg5>
              <v-card
                class="d-lg-flex justify-center"
                elevation="2"
                shaped
                tile
                height="100%"
                width="100%"
              >
                <v-col lg="4">
                  <v-img
                    src="../../public/images/single.png"
                    width="100%"
                    height="100%"
                  ></v-img>
                </v-col>
                <v-col lg="8">
                  <v-card-text class="font-weight-light text-h6">
                    1st Single</v-card-text
                  >
                  <v-card-text class="font-weight-regular text-h5"
                    >『瞳の奥に刺さる』</v-card-text
                  >
                  <v-card-text class="font-weight-light text-h6"
                    >2020.12</v-card-text
                  >
                  <br />

                  <v-card-text class="font-weight-regular text-h5"
                    ><a :href="disco1">
                      <v-img
                        width="10px"
                        height="10px"
                        src="../../public/images/macaron.png"
                      ></v-img>
                      https://big-up.style/musics</a
                    ></v-card-text
                  >
                </v-col>
              </v-card>
            </v-flex>
            <v-flex xs12 sm9 md8 lg5>
              <v-card
                lg7
                class="d-lg-flex justify-center"
                elevation="2"
                shaped
                tile
              >
                <v-col lg="5">
                  <v-img
                    src="../../public/images/single2.png"
                    width="100%"
                    height="100%"
                  ></v-img>
                </v-col>
                <v-col lg="7">
                  <v-card-text class="font-weight-light text-h6"
                    >2nd Single</v-card-text
                  >
                  <v-card-text class="font-weight-regular text-h6"
                    >『君と紫煙』</v-card-text
                  >
                  <v-card-text class="font-weight-light text-h6"
                    >2021.9</v-card-text
                  >

                  <br />
                  <v-card-text class="font-weight-regular text-h5"
                    ><a :href="disco2">https://linkco.re/</a></v-card-text
                  >
                </v-col>
              </v-card>
            </v-flex>
          </v-layout>
        </v-row>
      </div>
      <icon-bar></icon-bar>
    </v-container>
  </v-app>
</template>

<script>
import IconBar from "../components/IconBar.vue"
export default {
  components: { IconBar },
  data() {
    return {
      isVisible01: false,
      isVisible02: false,
      disco1: "https://big-up.style/musics/444605",
      disco2: "https://linkco.re/v0QDdD3S?lang=ja",
    }
  },
  methods: {
    visibilityChanged01(isVisible01) {
      this.isVisible01 = isVisible01
    },
    visibilityChanged02(isVisible02) {
      this.isVisible02 = isVisible02
    },
  },
}
</script>

<style lang="scss" scoped>
.news-title {
  font-size: 2.5rem;
}

.hover_true {
  opacity: 0.5;
  cursor: pointer;
}
.not_hover {
  opacity: 1;
}
a {
  color: gray;
  font-size: 0.7rem;
  &:hover {
    opacity: 0.7;
    border-bottom: 1px gray solid;
  }
}
.v-card__text {
  padding: 0.5rem;
}
</style>
