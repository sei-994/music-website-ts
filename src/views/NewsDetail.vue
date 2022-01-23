<template>
  <v-app>
    <v-container class="d-flex flex-column mt-8" justify="center">
      <!-- NEWS -->
      <v-row justify="center" class="mb-5">
        <v-card max-width="700" max-height="700">
          <v-img
            v-observe-visibility="visibilityChanged01"
            v-bind:class="{ fadeinactive: isVisible01 }"
            class="scroll_area"
            :src="require(`../..//public/images/${details[id].imgPath}`)"
          ></v-img>
        </v-card>
      </v-row>
      <div
        class="news--box mx-14 scroll_area"
        v-observe-visibility="visibilityChanged02"
        v-bind:class="{ fadeinactive: isVisible02 }"
      >
        <v-row>
          <v-col cols="3">
            <v-card-subtitle class="font-weight-light text-h6">{{
              date
            }}</v-card-subtitle>
          </v-col>
        </v-row>
        <v-row class="mb-8">
          <v-text class="font-weight-regular news-title">
            {{ details[id].title }}</v-text
          >
        </v-row>
        <v-spacer></v-spacer>
        <v-row>
          <v-text class="font-weight-light">
            <v-text v-html="details[id].description"></v-text>
            <v-text v-if="details[id].mvLink !== ''">
              ■■{{ singleTitle }}Youtubeリンク
            </v-text>
            <br />
            {{ details[id].mvLink }}
            <br /><br />
            <v-text v-if="details[id].salesSite !== ''">
              ■■{{ singleTitle }}販売サイト一覧 </v-text
            ><br /><br />
            <a :href="details[id].salesSite">{{ details[id].salesSite }}</a>
            <br /><br />

            <!-- ■■博聖各サイトリンクまとめ
            <br /><br />
            <a class="link" href="https://big-up.style/artists/165775"
              >https://big-up.style/artists/</a
            > -->
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
  props: {
    id: Number,
    singleTitle: String,
    date: String,
  },
  data() {
    return {
      details: [
        {
          id: 1,
          imgPath: "single.png",
          title:
            "【NEWS】1stCD『瞳の奥に刺さる』2020年12月にミュージックビデオを公開！",
          description:
            " <br />自身初のパッケージ作品である1stCD『瞳の奥に刺さる』リリース日の2020年12月に、 <br />本曲のミュージックビデオが博聖公式Youtubeにて公開されました！ <br /><br /><br />今回が自身初のミュージックビデオとなっていますが、<br />博聖の楽曲の特徴である韻を意識した歌詞の言葉遊びなどがより一層際立つ作品となっております。 <br /><br />特徴的な歌詞の世界観を楽しめるリリックビデオになっていますのでぜひチェックしてください！ <br /><br /><br />   ■■博聖 『瞳の奥に刺さる』 ミュージックビデオ<br /><br />",

          mvLink: "https://youtu.be/KH5rwXm8E64",
          salesSite: "https://mora.jp/package/43000002/bigup13150791/",
        },
        {
          id: 2,
          imgPath: "single2.png",
          title: "【NEWS】2ndSingle 『君と紫煙』 2021年9月に解禁！",
          description:
            "<br />自身初のパッケージ作品である2ndSingle『君と紫煙』リリース日の2021年9月12日に解禁されました！<br /><br /><br />今回の作品は斬新なピアノとギターが暴力的な旋律を奏る、前作とは異なるROCKな楽曲になっています。<br /><br />博聖『この楽曲は、私が自身をひどく惨めな存在だと自覚し、一夜だけ喫煙をした時にできました。<br />ひょっとしたらタバコに手を出す人は、誰よりも自分の惨めさを知っていて、そんなやるせなさから自分を傷つけるために喫煙をしているのではないかと思うようになりました。』<br /><br /><br />特徴的な歌詞の世界観を楽しめるリリックビデオになっていますのでぜひチェックしてください！<br /><br /><br />",
          mvLink: "",
          salesSite: "",
        },
        {
          id: 3,
          imgPath: "single3.jpg",
          title: "【NEWS】3rdSingle 『君を穿つ』 2022年1月に解禁！",
          description:
            "<br />自身初のパッケージ作品である3rdSingle『君を穿つ』リリース日の2022年1月15日に解禁されました！<br /><br /><br />今回の作品は斬新なピアノとギターが暴力的な旋律を奏る、前作とは異なるROCKな楽曲になっています。<br /><br />博聖『この楽曲は、私が自身をひどく惨めな存在だと自覚し、一夜だけ喫煙をした時にできました。<br />ひょっとしたらタバコに手を出す人は、誰よりも自分の惨めさを知っていて、そんなやるせなさから自分を傷つけるために喫煙をしているのではないかと思うようになりました。』<br /><br /><br />特徴的な歌詞の世界観を楽しめるリリックビデオになっていますのでぜひチェックしてください！<br /><br /><br />",
          mvLink: "https://www.youtube.com/watch?v=GK0ajL3ietY",
          salesSite: "",
        },
      ],
      isVisible01: false,
      isVisible02: false,
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

<style lang="scss">
.news-title {
  font-size: 2.5rem;
}
.v-application a {
  color: black;
  &:hover {
    opacity: 0.7;
  }
}
</style>
