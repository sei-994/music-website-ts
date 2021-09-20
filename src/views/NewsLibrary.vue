<template>
  <v-app>
    <v-container class="d-flex flex-column mt-8" justify="center">
      <!-- NEWS -->
      <v-row justify="center" class="mb-5 d-flex">
        <v-card
          v-for="(card, index) in cards"
          :key="index"
          @click="goDetail(card.id)"
          class="d-lg-flex"
          elevation="2"
          shaped
          tile
        >
          <v-col lg="3">
            <v-card-subtitle class="font-weight-light text-h6">{{
              card.date
            }}</v-card-subtitle>
          </v-col>
          <v-col lg="9">
            <v-card-text class="font-weight-regular text-h5"
              >【RELEASE】{{ card.title }}</v-card-text
            >
            <v-card-text class="font-weight-light">{{ card.text }}</v-card-text>
          </v-col>
        </v-card>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          date: "2020.12",
          title: "『瞳の奥に刺さる』",
          text: "博聖の1stSingle『瞳の奥に刺さる』が各配信サイトにてリ...",
        },
        {
          id: 2,
          date: "2021.9",
          title: "『君と紫煙』",
          text: "博聖の2ndSingle『君と紫煙』が各配信サイトにてリ...",
        },
      ],
    }
  },
  methods: {
    goDetail(cardId) {
      this.$router.push({
        name: "newsdetail",
        params: { id: cardId },
      })
    },
  },
}
</script>
