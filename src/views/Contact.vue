<template>
  <v-app>
    <v-container class="d-flex flex-column mt-8" justify="center">
      <v-row justify="around">
        <v-text class="section-title-text">CONTACT</v-text>
      </v-row>
      <div class="form__main-img mt-13">
        <v-text-field
          v-model="subject"
          label="件名"
          class="mx-2"
          rows="1"
          no-resize
          id="subject"
        ></v-text-field>

        <!-- <v-card-title
            class=""
            color="#60CAAD"
            style=" margin-top:10px;font-size: 30px;color:#60CAAD;
    "
            ><span>
              お名前
            </span></v-card-title
          > -->

        <v-text-field
          v-model="name"
          label="お名前"
          class="mx-2"
          rows="1"
          no-resize
          id="name"
        ></v-text-field>

        <!-- <v-card-title
            class=""
            color="#60CAAD"
            style=" margin-top:10px;font-size: 30px;color:#60CAAD;
    "
            ><span>
              メール
            </span></v-card-title
          > -->

        <v-text-field
          v-model="mail"
          label="メールアドレス"
          class="mx-2"
          rows="1"
          no-resize
          id="mail"
        ></v-text-field>

        <!-- <v-card-title
            class=""
            color="#60CAAD"
            style=" margin-top:10px;font-size: 30px;color:#60CAAD;
    "
            ><span>
              内容
            </span></v-card-title
          > -->

        <v-text-field
          v-model="content"
          label="お問い合わせ内容"
          class="mx-2"
          rows="3"
          no-resize
          row-height="30"
          id="content"
        ></v-text-field>

        <v-btn v-on:click="request" class="mt-4 justify-center">送信</v-btn>
        <!-- <Loading v-show="loading"></Loading> -->
      </div>
    </v-container>
    <icon-bar></icon-bar>
  </v-app>
</template>

<script>
import axios from "axios"
import IconBar from "../components/IconBar.vue"
// TODO axios通信できるようにする。
export default {
  components: { IconBar },
  data() {
    return {
      subject: "",
      name: "",
      mail: "",
      content: "",
    }
  },
  methods: {
    request: async function () {
      const Sub = "entry.923129026" + "=" + this.subject
      const Mai = "entry.455343566" + "=" + this.mail
      const Con = "entry.1964459076" + "=" + this.content
      const Nam = "entry.1174891160" + "=" + this.name
      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
      const url =
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd5OSIErmQm_NVUZ5SBI4XmkQPD8dP99Pp3Pdxtw0H2_KaRUw/formResponse?" +
        "&" +
        Nam +
        "&" +
        Con +
        "&" +
        Sub +
        "&" +
        Mai
      axios.get(url)
      console.log(CORS_PROXY + url)

      setTimeout(() => {
        window.location.href = "/thank"
      }, 1000)
    },
  },
}
</script>

<style lang="scss" scaped>
.contact__ {
  &main {
    &-text {
      margin-top: 14rem;
      font-size: 4rem;
      font-family: "Barlow Condensed", sans-serif;
    }
  }
}

.top-title {
  padding-top: 50px;
  font-size: 30px;
  color: #60caad;
  font-weight: bold;
}
</style>
