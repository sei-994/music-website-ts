<template>
  <v-app>
    <transition name="menu">
      <v-list
        class="menu"
        dark
        nav
        dense
        v-show="ActiveBtn"
        style="position: fixed"
      >
        <v-list-item-group class="d-flex flex-column">
          <v-list-item @click="goHome">
            <v-list-item-title class="v-list-title">HOME </v-list-item-title>
          </v-list-item>
          <v-list-item @click="goNews">
            <v-list-item-title class="v-list-title">NEWS</v-list-item-title>
          </v-list-item>
          <v-list-item @click="goDisco">
            <v-list-item-title class="v-list-title">DISCO</v-list-item-title>
          </v-list-item>
          <v-list-item @click="goVideo">
            <v-list-item-title class="v-list-title">VIDEO</v-list-item-title>
          </v-list-item>

          <v-list-item @click="goContact">
            <v-list-item-title class="v-list-title">CONTACT</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <!-- </v-dialog> -->
    </transition>
    <v-main>
      <v-app-bar app light class="app-bar">
        <v-toolbar-title></v-toolbar-title>
        <v-app-bar-nav-icon @click="goHome"
          ><img src="../public/images/macaron.png" alt="" width="40"
        /></v-app-bar-nav-icon>
        <v-spacer></v-spacer>

        <!--ハンバーガーメニューのボタン-->
        <div class="hamburger_btn" @click="ActiveBtn = !ActiveBtn">
          <span class="line line_01" :class="{ btn_line01: ActiveBtn }"></span>
          <span class="line line_02" :class="{ btn_line02: ActiveBtn }"></span>
          <span class="line line_03" :class="{ btn_line03: ActiveBtn }"></span>
        </div>
        <!-- <v-app-bar-nav-icon @click="dialog = true"></v-app-bar-nav-icon> -->
      </v-app-bar>

      <router-view />
    </v-main>

    <v-footer padless class="white">
      <v-row justify="center">
        <v-text class="my-5">© 2021 hiromasa_eve All right reserved. </v-text>
      </v-row>
    </v-footer>
  </v-app>
</template>
<script>
// import constants from "./common/constants"

export default {
  name: "app",
  data() {
    return {
      ActiveBtn: false,
      // dialog: false,
      // menuItems: constants.menuItems,
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
      this.ActiveBtn = false
      this.$router.push({
        path: "/",
        name: "Home",
      })
    },
    goNews() {
      this.ActiveBtn = false
      this.$router.push({
        path: "/newslibrary",
        name: "newslibrary",
      })
    },
    goDisco() {
      this.ActiveBtn = false

      this.$router.push({
        path: "/disco",
        name: "disco",
      })
    },
    goVideo() {
      this.ActiveBtn = false

      this.$router.push({
        path: "/video",
        name: "video",
      })
    },
    goContact() {
      this.ActiveBtn = false

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
.container {
  padding: 0;
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
.v-list-title {
  text-align: center;
}
/*ボタン*/
.hamburger_btn {
  position: fixed; /*常に最上部に表示したいので固定*/
  top: 0;
  right: 0;
  width: 70px;
  height: 72px;
  cursor: pointer;
  z-index: 50;
}

.hamburger_btn .line {
  position: absolute;
  top: 0;
  left: 20px;
  width: 32px;
  height: 2px;
  background: #000000;
  text-align: center;
}

.hamburger_btn .line_01 {
  top: 16px;
  transition: 0.4s ease;
}
.hamburger_btn .line_02 {
  top: 26px;
  transition: 0.4s ease;
}
.hamburger_btn .line_03 {
  top: 36px;
  transition: 0.4s ease;
}

.btn_line01 {
  transform: translateY(10px) rotate(-45deg);
  transition: 0.4s ease;
}
.btn_line02 {
  transition: 0.4s ease;
  opacity: 0;
}
.btn_line03 {
  transform: translateY(-10px) rotate(45deg);
  transition: 0.4s ease;
}

/*サイドバー*/
.menu-enter-active,
.menu-leave-active {
  transition: 0.8s;
}
.menu-enter,
.menu-leave-to {
  opacity: 0;
}
.menu-leave,
.menu-enter-to {
  opacity: 1;
}

.menu li {
  list-style: none;
  line-height: 1;
  padding: 1rem;
}

.menu {
  background-color: rgba(0, 0, 0, 0.123);
  z-index: 30;
  padding: 2rem 1rem;

  width: 100%;
  height: 100%;
  opacity: 0.8;
}
.menu a {
  color: rgb(66, 66, 66);
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0 2rem;
}
.menu ul {
  margin: 1rem;
  padding: 0;
}
</style>
