<template>
  <v-app>
    <v-img src="../public/images/home-main.jpg"></v-img>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld"

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data() {
    return {
      mainImage: "../public/images/home-main.jpg",
    }
  },
}
</script>
