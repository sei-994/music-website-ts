<template>
  <v-app>
    <v-container class="mt-8" justify="center">
      <!-- NEWS -->
      <v-row justify="center" class="mb-5 d-flex">
        <v-layout wrap justify-space-between flex-column>
          <v-flex>
            <v-card
              v-for="(card, index) in cards"
              :key="index"
              class="mt-8"
              @click="goDetail(card.id)"
              outlined
              tile
            >
              <v-col lg="3">
                <v-card-subtitle class="font-weight-light text-h6">{{
                  card.date
                }}</v-card-subtitle>
              </v-col>
              <v-col lg="9">
                <v-card-text class="font-weight-regular text-h5"
                  >【RELEASE】{{ card.singleTitle }}</v-card-text
                >
                <v-card-text class="font-weight-light">{{
                  card.text
                }}</v-card-text>
              </v-col>
            </v-card>
          </v-flex>
        </v-layout>
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
          singleTitle: "『瞳の奥に刺さる』",
          text: "博聖の1stSingle『瞳の奥に刺さる』が各配信サイトにてリ...",
        },
        {
          id: 2,
          date: "2021.9",
          singleTitle: "『君と紫煙』",
          text: "博聖の2ndSingle『君と紫煙』が各配信サイトにてリ...",
        },
      ],
    }
  },
  methods: {
    goDetail(cardId) {
      this.$router.push({
        name: "newsdetail",
        params: {
          id: cardId - 1,
          singleTitle: this.cards[cardId - 1].singleTitle,
          date: this.cards[cardId - 1].date,
        },
      })
    },
  },
}
</script>
