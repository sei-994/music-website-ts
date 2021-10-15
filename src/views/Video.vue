<template>
  <v-app>
    <v-container class="mt-14 video">
      <v-text class="section-title-text">VIDEO</v-text>
      <v-row justify="center" class="carousel-box">
        <v-carousel class="carousel" hide-delimiters>
          <v-carousel-item
            class="carousel-item mt-8"
            v-for="(item, i) in items"
            :key="i"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <iframe
              width="560"
              height="315"
              :src="item.src"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-carousel-item>
        </v-carousel>
      </v-row>
    </v-container>
    <icon-bar></icon-bar>
  </v-app>
</template>

<script>
import IconBar from "../components/IconBar.vue"
export default {
  components: { IconBar },
  data() {
    return {
      items: [
        {
          src: "https://www.youtube.com/embed/_Y6EGkUOR00",
        },
        {
          src: "https://www.youtube.com/embed/gqYbBzhi2vs",
        },
        {
          src: "https://www.youtube.com/embed/BBpBQhx4GMs",
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
$pc: 1024px; // PC
$tab: 680px; // タブレット
$sp: 480px; // スマホ

@mixin pc {
  @media (max-width: ($pc)) {
    @content;
  }
}
@mixin tab {
  @media (max-width: ($tab)) {
    @content;
  }
}
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}
.video {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;

  .carousel-box {
    width: 85%;
    min-height: 100%;
    margin: 0 auto;
    @include sp {
      width: 100%;
      min-height: 90%;
    }
    .carousel {
      max-width: 70%; //横幅調節
      min-height: 95%; //高さ調節 box , carouselにもつけないと効かない
      .v-window__prev {
        margin-right: 5rem;
      }
      @include sp {
        min-height: 80%;
        max-width: 85%; //横幅調節
      }
      &-item {
        @include sp {
          min-height: 50%;
        }
        iframe {
          min-width: 100%;
          min-height: 90%;
          @include sp {
            min-height: 50%;
          }
        }
      }
    }
  }
}
v-carousel-item {
  height: 0;
}
</style>
