<template>
  <v-app>
    <v-container class="d-flex flex-column mt-8" justify="center">
      <!-- NEWS -->
      <v-row justify="center" class="mb-5">
        <v-card max-width="700" max-height="700">
          <v-img src="../..//public/images/single(2).jpg"></v-img>
        </v-card>
      </v-row>

      <div class="news--box mx-14">
        <v-row>
          <v-col cols="3">
            <v-card-subtitle class="font-weight-light text-h6"
              >2021.9</v-card-subtitle
            >
          </v-col>
        </v-row>
        <v-row class="mb-8">
          <v-text class="font-weight-regular news-title"
            >【NEWS】2ndSingle <br />
            『君と紫煙』 2021年9月に解禁！</v-text
          >
        </v-row>
        <v-spacer></v-spacer>
        <v-row>
          <v-text class="font-weight-light">
            自身初のパッケージ作品である2ndSingle『君と紫煙』リリース日の
            <v-spacer></v-spacer>
            2021年9月12日に解禁されました！
            <br /><br />
            <br /><br />
            今回の作品は斬新なピアノとギターが暴力的な旋律を奏る、前作とは異なるROCKな楽曲になっています。
            <br />
            <br />
            博聖 <br />
            『この楽曲は、私が自身をひどく惨めな存在だと自覚し、一夜だけ喫煙をした時にできました。<br />
            ひょっとしたらタバコに手を出す人は、誰よりも自分の惨めさを知っていて、
            そんなやるせなさから自分を傷つけるために喫煙をしているのではないかと思うようになりました。』
            <br /><br />
            <br /><br />
            特徴的な歌詞の世界観を楽しめる曲になっていますのでぜひチェックしてください！
            <br /><br /><br />
            <br /><br /><br />
            <!-- ■■博聖 『瞳の奥に刺さる』 ミュージックビデオ -->
            <br /><br />

            <!-- https://youtu.be/KH5rwXm8E64 -->
            <br /><br />

            ■■博聖ファーストSingle『瞳の奥に刺さる』販売サイト一覧
            <br /><br />
            <a
              class="link"
              href="https://mora.jp/package/43000074/TCJPR0000827318/?fmid=newRelease_all_0001"
              >https://mora.jp/package</a
            >
            <br /><br />

            ■■博聖各サイトリンクまとめ
            <br /><br />
            <a class="link" href="https://big-up.style/artists/165775"
              >https://big-up.style/artists/</a
            >
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
  },
  data() {
    return {
      details: [
        {
          id: 1,
          imgPath: "",
          title: "",
        },
      ],
    }
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
