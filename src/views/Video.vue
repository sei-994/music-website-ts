<template>
  <v-app>
    <v-container class="ma-lg-14" fluid>
         <div class="news--box ma-14">
        <v-row justify-lg="left">
          <v-col lg="4">
            <v-text class="section-title-text">VIDEO</v-text>
          </v-col>
          <v-container class="iframeWrapper">
          <iframe
            class="mt-8"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_Y6EGkUOR00"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          </v-container>
        </v-row>
        <!-- <v-row justify="center" class="mt-6 mb-15">
          <v-col cols="1">
            <v-btn raised small text x-small class="">
              <v-icon>mdi-arrow-right-circle-outline</v-icon> more</v-btn
            >
          </v-col>
        </v-row> -->
      </div>
    </v-container>
    <icon-bar></icon-bar>
  </v-app>
</template>

<script>
import IconBar from "../components/IconBar.vue"
export default {
  components: { IconBar },
}
</script>

<style>
.iframeWrapper{
    position: relative;
     width:100%;
    height:0;
    padding-top:60%;
}

.iframeWrapper iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
}</style>
