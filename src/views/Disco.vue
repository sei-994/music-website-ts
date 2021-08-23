<template>
  <v-app>
    <v-container class="d-flex flex-column mt-8" justify="center">
      <!-- DISCO -->
      <v-row justify-lg="center" class="ma-5">
        <v-card max-width="700" max-height="700" class="disco-img-box">
          <v-img
            src="../../public/images/博聖さまアイコン正面.jpg"
            class="disco-img"
          ></v-img>
        </v-card>
      </v-row>

      <div class="ma-lg-14">
        <v-row justify-lg="around">
          <v-col lg="4">
            <v-text class="section-title-text">DISCO</v-text>
          </v-col>
          <v-col lg="8">
            <v-card
              @click="goDisco"
              class="d-lg-flex justify-center"
              elevation="2"
              shaped
              tile
            >
              <v-col lg="3">
                <v-img
                  src="../../public/images/博聖様アイコン横顔.jpg"
                  width="100%"
                  height="100%"
                ></v-img>
              </v-col>
              <v-col lg="9">
                <v-card-subtitle class="font-weight-light text-h6"
                  >1st Single</v-card-subtitle
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
      </div>
      <icon-bar></icon-bar>
    </v-container>
  </v-app>
</template>

<script>
import IconBar from "../components/IconBar.vue"
export default {
  components: { IconBar },
}
</script>

<style lang="scss">
.news-title {
  font-size: 2.5rem;
}
.disco-img-box {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 50%;
}
.disco-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
