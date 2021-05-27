<template>
  <v-app>
    <v-dialog v-model="dialog" fullscreen class="d-flex justify-center">
      <v-list nav dense @click="dialog = false">
        <v-list-item-group class="d-flex flex-column">
          <v-list-item>
            <v-list-item-title @click="goHome">HOME </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="goNews">NEWS</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="goDisco">DISCO</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="goVideo">VIDEO</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="goContact">CONTACT</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-dialog>
    <v-main>
      <v-app-bar app light class="app-bar">
        <v-toolbar-title></v-toolbar-title>
        <v-app-bar-nav-icon @click="dialog = true"
          ><v-icon>mdi-snowflake-melt</v-icon></v-app-bar-nav-icon
        >
      </v-app-bar>
      <router-view />
    </v-main>
    <v-footer padless class="white">
      <v-row justify="center">
        <v-text class="my-5">© 2021 sei-994 All right reserved. </v-text>
      </v-row>
    </v-footer>
  </v-app>
</template>
<script>
import constants from "./common/constants"

export default {
  name: "app",
  data() {
    return {
      dialog: false,
      menuItems: constants.menuItems,
      mainImage: "../public/images/home-main.jpg",
    }
  },
  methods: {
    // TODO：外部サイト遷移→aタグでくくるorwindow.location.hrefで遷移
    // goTwitter() {
    //   const url = "https://twitter.com/hiromasa_eve"
    //   console.log(this)
    //   window.location = url
    // },
    goHome() {
      this.dialog = false
      this.$router.push({
        path: "/",
        name: "Home",
      })
    },
    goNews() {
      this.dialog = false

      this.$router.push({
        path: "/news",
        name: "news",
      })
    },
    goDisco() {
      this.dialog = false

      this.$router.push({
        path: "/disco",
        name: "disco",
      })
    },
    goVideo() {
      this.dialog = false

      this.$router.push({
        path: "/video",
        name: "video",
      })
    },
    goContact() {
      this.dialog = false

      this.$router.push({
        path: "/contact",
        name: "contact",
      })
    },
  },
}
</script>
<style lang="scss">
* {
  font-family: "Noto Serif JP", serif;
  font-weight: light;
  
}

.icon--box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.app-bar {
  opacity: 0.75;
  z-index: 10;
 
}
</style>
