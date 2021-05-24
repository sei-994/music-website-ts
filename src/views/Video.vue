<template>
  <v-app>
    <v-container class="ma-14" fluid>
      <div class="ma-14">
        <v-row>
          <v-text class="section-title-text">VIDEO</v-text>
        </v-row>
        <v-row justify="center">
          <v-col cols="8">
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
          </v-col>
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
  </v-app>
</template>

<script>
export default {}
</script>

<style></style>
