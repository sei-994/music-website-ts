<template>
  <v-app>
    <v-container class="d-flex flex-column mt-8" justify="center">
      <!-- NEWS -->
      <v-row justify="center" class="mb-5">
        <v-card max-width="700" max-height="700">
          <v-img src="../../public/images/博聖さまアイコン正面.jpg"></v-img>
        </v-card>
      </v-row>

      <div class="news--box mx-14">
        <v-row>
          <v-col cols="3">
            <v-card-subtitle class="font-weight-light text-h6"
              >2020.12</v-card-subtitle
            >
          </v-col>
        </v-row>
        <v-row class="mb-8">
          <v-text class="font-weight-regular news-title"
            >【NEWS】1stSingle『瞳の奥に刺さる』2020年12月にミュージックビデオを公開！</v-text
          >
        </v-row>
        <v-spacer></v-spacer>
        <v-row>
          <v-text class="font-weight-light">
            自身初のパッケージ作品である1stSingle『瞳の奥に刺さる』リリース日の
            <v-spacer></v-spacer>
            2020年12月に、本曲のミュージックビデオが博聖公式Youtubeにて公開されました！
            <br /><br />
            <br /><br />
            今回が自身初のミュージックビデオとなっていますが、
            <br />
            <br />
            博聖の楽曲の特徴である韻を意識した歌詞の言葉遊びなどがより一層際立つ作品となっております。
            <br /><br />
            <br /><br />
            特徴的な歌詞の世界観を楽しめるリリックビデオになっていますのでぜひチェックしてください！
            <br /><br /><br />
            <br /><br /><br />
            ■■博聖 『瞳の奥に刺さる』 ミュージックビデオ
            <br /><br />

            https://youtu.be/KH5rwXm8E64
            <br /><br />

            ■■博聖ファーストSingle『瞳の奥に刺さる』販売サイト一覧
            <br /><br />

            https://lnk.to/nakimushi_CD/
            <br /><br />

            ■■博聖各サイトリンクまとめ
            <br /><br />

            https://lit.link/nakimushi
          </v-text>
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
</style>
