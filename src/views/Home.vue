<template>
  <main>
    <section class="banner">
      <div class="decoration_dot">
        <img src="@/assets/img/circles.svg" alt="" />
      </div>
      <div class="banner_figure">
        <img src="@/assets/img/dog4.jpg" alt="cute dog" />
      </div>
      <div class="banner_content_area">
        <div class="decoration_house">
          <svg
            width="577"
            height="292"
            viewBox="0 0 577 292"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="path"
              d="M136 233V162.5H1.5L204 1L576 291"
              stroke="#DEC39E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <!-- <img src="@/assets/img/bigArrow.svg" alt="cute dog" /> -->
        </div>
        <div class="banner_caption">
          <h1>浪我陪你等家</h1>
          <h2>領養代替購買</h2>
          <p>
            零撲殺後<br />
            長住收容所的浪浪們<br />
            你願意給他們一個家嗎<br />
          </p>
        </div>
        <button @click="dropDown">
          <img src="@/assets/img/buttonArrow.svg" />
        </button>
      </div>
    </section>

    <section class="gallery_mobile">
      <div class="gallery_wrap">
        <div class="mb_first">
          <img src="@/assets/img/dog6.jpg" />
          <p class="text_1">
            希望能夠有一個家， <br />
            一個會好好愛我的主人
          </p>
        </div>

        <div class="mb_mid">
          <img src="@/assets/img/cat7.jpg" />
          <p class="text_2">你能夠 帶我回家嗎？</p>
        </div>

        <div class="mb_last">
          <img src="@/assets/img/dog9.jpg" />
          <img class="print1" src="@/assets/img/logo.svg" />
          <img class="print2" src="@/assets/img/logo.svg" />
        </div>
        <div class="slogan">
          <p>為牠駐足，尋找你們之間的命中註定</p>
          <img src="@/assets/img/arrow.svg" />
        </div>
      </div>
    </section>

    <section class="gallery_desktop">
      <div class="parallax_group handheld_base">
        <div class="parallax_layer scroll_first">
          <img src="@/assets/img/dog6.jpg" />
        </div>
        <div class="parallax_layer scroll_mid">
          <p>
            希望能夠有一個家， <br />
            一個會好好愛我的主人
          </p>
          <img src="@/assets/img/cat7.jpg" />
        </div>
        <div class="parallax_layer scroll_second">
          <img src="@/assets/img/cat2.jpg" />
        </div>
        <div class="parallax_layer scroll_last">
          <img src="@/assets/img/dog5.jpg" />
        </div>
        <div class="parallax_layer scroll_slow">
          <p>你能夠帶我回家嗎？</p>
          <img src="@/assets/img/dog9.jpg" />
        </div>
        <div class="parallax_layer scroll_slogan">
          <div class="slogan">
            <router-link :to="{ name: 'Search' }">
              <p>為牠駐足，尋找你們之間的命中註定</p>
              <img src="@/assets/img/arrow.svg" />
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="volunteer_ad">
      <h2>志工招募</h2>
      <p>我們需要你，成為我們最強的後盾</p>
      <div class="volunteer_entry">
        <div class="volunteer_image">
          <img src="@/assets/img/volunteer4.jpg" />
        </div>
        <router-link :to="{ name: 'Volunteer' }">
          <button>我有興趣</button>
        </router-link>
      </div>
    </section>

    <section class="topic">
      <div class="topic_img">
        <img
          class="init_place"
          :class="{ correct_place: isShowImage }"
          src="@/assets/img/cat3.jpg"
          alt="lovely cat"
        />
      </div>
      <div class="topic_content_area">
        <h2>領養前的那些事</h2>
        <p>多的是，你不知道的事。</p>
        <router-link :to="{ name: 'Custom' }">
          <button>我想知道</button>
        </router-link>
      </div>
      <div class="solid_circle">
        <img src="@/assets/img/solidCircle.svg" />
      </div>
      <div class="hollow_circle">
        <img src="@/assets/img/hollowCircle.svg" />
      </div>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      isShowImage: false,
    };
  },
  methods: {
    scrollEvent() {
      let slideInAt = window.scrollY + window.innerHeight;

      //展開圖片的條件
      let showImage = slideInAt > 3300;
      if (showImage) {
        this.isShowImage = true;
      }
    },
    dropDown() {
      window.scroll({
        top: innerHeight,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollEvent);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.scrollEvent);
  },
};
</script>

<style lang="scss" scoped>
a {
  display: block;
  width: fit-content;
  margin: 0 auto;
}
// section共用h2樣式
%title_h2 {
  font-size: 24px;
  font-weight: 500;
  color: color.$gray_700;
  @include breakpoint.tablet {
    font-size: 36px;
  }
  @include breakpoint.desktop {
    font-size: 50px;
  }
}

// section共用副標p樣式
%content_p {
  margin-top: 5px;
  font-size: 16px;
  font-weight: 600;
  @include breakpoint.tablet {
    font-size: 20px;
  }

  @include breakpoint.desktop {
    font-size: 30px;
  }
}

// 通用button樣式，除了banner的滑動按鈕，其他都用此樣式
%button {
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  background: color.$brown_300;
  font-size: 18px;
  font-weight: 500;

  @include breakpoint.desktop {
    padding: 15px 30px;
    font-size: 22px;
  }
}

main {
  // margin-top: 60px; //扣除navbar高度
  @include breakpoint.tablet {
    // margin-top: 103px; //扣除navbar高度
  }
}

.banner {
  height: calc(100vh - 60px);
  position: relative;
  z-index: 0;
  overflow: hidden;
  background: color.$brown_100;

  @include breakpoint.tablet {
    height: calc(100vh - 103px);
  }

  .decoration_dot {
    display: none;
    z-index: 1;
    @include breakpoint.desktop {
      display: block;
      // relative to banner
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }

  &_figure {
    // relative to banner
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    // 讓banner的圖片在小尺寸可以疊在內容後面

    height: 100%;
    width: 100%;

    @include breakpoint.tablet {
      left: unset;
      right: 0;
      width: 50%;
    }
  }

  &_figure img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &_content_area {
    position: relative;
    padding: 30px 30px;
    width: 100%;
    height: 100%;
    text-align: left;

    @include breakpoint.tablet {
      padding: 20px 30px;
      width: 50%;
    }

    @include breakpoint.desktop {
      padding: 0 100px;
    }

    .decoration_house {
      @include breakpoint.desktop {
        transform: scaleY(0.8);
      }
    }
  }

  &_caption {
    // relative to content_area
    position: absolute;
    bottom: 20%;

    padding: 10px;
    width: 100%;
    background: rgba(255, 255, 255, 0.7);
    text-align: left;

    @include breakpoint.tablet {
      top: 35%;
      bottom: auto;
      width: fit-content;
      background: none;
    }

    @include breakpoint.desktop {
      top: 30%;
    }
  }

  &_caption h1 {
    color: color.$gray_700;
    font-size: 40px;
    font-weight: 600;

    @include breakpoint.tablet {
      font-size: 54px;
    }

    @include breakpoint.desktop {
      font-size: 70px;
    }
  }

  &_caption h2 {
    margin-top: 5px;

    color: color.$brown_500;
    font-size: 24px;
    font-weight: 600;

    @include breakpoint.tablet {
      font-size: 30px;
    }
  }

  &_caption p {
    margin-top: 50px;
    color: color.$gray_500;
    font-size: 16px;

    @include breakpoint.tablet {
      font-size: 20px;
    }
  }
  button {
    background: color.$brown_300;
    position: absolute;
    padding: 10px 20px;
    right: 0;
    bottom: 15%;
    transform: scale(0.8);
    cursor: pointer;

    @include breakpoint.tablet {
      right: unset;
      bottom: -2%;
      padding: 30px 55px;
    }

    img {
      animation-name: MoveUpDown;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
  }
}
@keyframes MoveUpDown {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0);
  }
}
// 畫房子的動畫
@keyframes DrawHouse {
  from {
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dashoffset: 0;
  }
}

.decoration_house {
  .path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: DrawHouse 2s linear alternate forwards;
  }
}

@keyframes FadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.banner_caption h1 {
  opacity: 0;
  animation: FadeIn 2s linear forwards;
}

.banner_caption h2 {
  opacity: 0;
  animation: FadeIn 1s linear forwards;
  animation-delay: 1.5s;
}

.banner_caption p {
  opacity: 0;
  animation: FadeIn 1s linear forwards;
  animation-delay: 2s;
}

.volunteer_ad {
  background: color.$brown_100;
  padding: 10px;
  // height: 100vh;
  @include breakpoint.tablet {
    padding: 20px 0;
  }

  h2 {
    @extend %title_h2;
  }

  p {
    @extend %content_p;
    margin-top: 5px;
  }
}

.volunteer_entry {
  margin: 0 auto;
  width: fit-content;

  @include breakpoint.desktop {
    position: relative;

    // 在桌機尺寸下，button是在hover圖片時才會出現
    &:hover button {
      opacity: 1;
      transition: opacity 0.6s ease-in-out;
    }
    &:not(:hover) button {
      opacity: 0;
    }

    &:hover .volunteer_image {
      opacity: 0.7;
      transition: opacity 0.6s ease-in-out;
    }
  }

  // button的樣式與位置
  button {
    @extend %button;
    position: static;
    cursor: pointer;

    @include breakpoint.desktop {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

.volunteer_image {
  margin: 10px auto;
  max-width: 1000px;

  @include breakpoint.desktop {
    margin: 20px auto;
    width: 1024px;
  }

  img {
    width: 100%;
    height: 100%;
    object-position: center;
  }
}

.topic {
  display: flex;
  align-items: center;
  padding: 20px 0;
  position: relative;
  background: color.$brown_100;

  @include breakpoint.tablet {
    background: color.$brown_100;
  }

  &_img {
    width: 40%;
    height: 100%;

    .init_place {
      @include breakpoint.desktop {
        opacity: 0;
        transform: translateX(-30px);
      }
    }
    .correct_place {
      @include breakpoint.desktop {
        opacity: 1;
        animation-name: slide-in;
        animation-duration: 0.5s;
        transform: translateX(0px);
      }
      @keyframes slide-in {
        0% {
          transform: translateX(-30px);
        }
        100% {
          transform: translateX(0px);
        }
      }
    }

    @include breakpoint.tablet {
      width: 50%;
      height: calc(100vh - 103px);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hollow_circle {
    display: none;
    animation: living 3s infinite ease-out;
  }

  .solid_circle {
    display: none;
    animation: living 4s 1.2s infinite ease-out;
  }

  @include breakpoint.tablet {
    .hollow_circle {
      display: block;
      position: absolute;
      top: 10%;
      right: 3%;
      width: 90px;
    }

    .solid_circle {
      display: block;
      position: absolute;
      top: 20%;
      right: 13%;
      width: 30px;
      height: 30px;
    }
  }

  @include breakpoint.desktop {
    .hollow_circle {
      width: 120px;
    }

    .solid_circle {
      top: 22%;
      right: 10%;
      width: 40px;
      height: 40px;
    }
  }

  @include breakpoint.bgScreen {
  }
}

.topic_content_area {
  flex-grow: 1;

  h2 {
    @extend %title_h2;
  }

  p {
    @extend %content_p;
  }

  button {
    @extend %button;
    margin-top: 30px;
    z-index: 3;
    cursor: pointer;
  }
}
// gallery區塊
// 手機版
.gallery_mobile {
  position: relative;
  overflow: hidden;
  padding: 20px 20px;

  .gallery_wrap {
    display: flex;
    flex-wrap: wrap;
  }

  div + div {
    margin-top: 5px;
  }

  .mb_first {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: fit-content;

    img {
      width: 200px;
    }

    p {
      padding: 10px;
      font-size: 16px;
      font-weight: 500;
    }
  }

  .mb_mid {
    display: flex;
    flex-direction: row-reverse;
    flex-basis: 100%;
    justify-content: space-around;
    align-items: center;

    img {
      width: 250px;
    }

    p {
      padding: 10px;
      font-size: 16px;
      font-weight: 500;
    }
  }

  .mb_last {
    position: relative;
    width: fit-content;
    height: fit-content;
    flex-basis: 100%;
    text-align: left;

    img {
      width: 280px;
    }

    .print1,
    .print2 {
      width: 30px;
      height: 30px;
    }
  }

  .print1 {
    position: absolute;
    right: 0;
    bottom: 5%;
    transform: rotate(45deg);
  }

  .print2 {
    position: absolute;
    right: 10%;
    bottom: 20%;
    transform: rotate(-30deg);
  }

  .slogan {
    flex-basis: 100%;
    margin-top: 16px;

    p {
      font-size: 18px;
      color: color.$brown_500;
      font-weight: 600;
    }

    img {
      margin-top: 10px;
      width: 80px;
      animation: MoveLR 2s ease-in-out alternate infinite;
      pointer-events: none;
    }
  }
}

.gallery_desktop {
  display: none;
}
// 桌機板使用滾動視差
@include breakpoint.tablet {
  .gallery_mobile {
    display: none;
  }

  .volunteer_ad {
    position: relative;
    z-index: 99;
  }

  .gallery_desktop {
    display: block;
    height: 100vh;
    z-index: 1;
    // margin-bottom: -250px;

    background-image: url(../assets/img/wishahome375.svg);
    background-repeat: no-repeat;
    background-position-y: 50px;
    position: relative;
    @include breakpoint.tablet {
      background-image: url(../assets/img/wishahome768.svg);
    }
    @include breakpoint.desktop {
      background-image: url(../assets/img/wishahome1440.svg);
    }

    perspective: 10px;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;

    @include breakpoint.bgScreen {
      // margin-bottom: -300px;
    }
    .parallax_group {
      transform-style: preserve-3d;
      position: relative;
      height: 100%;
    }
    .parallax_layer {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100vw;
      height: 100%;
      background: transparent;
    }
    .scroll_first {
      transform: translateZ(2px) scale(0.8);
      img {
        position: absolute;
        bottom: 20%;
        left: 30px;
        width: 250px;

        @include breakpoint.desktop {
          position: absolute;
          bottom: 5%;
          left: 100px;
          width: 300px;
        }

        @include breakpoint.bgScreen {
          position: absolute;
          bottom: 5%;
          left: 100px;
          width: 370px;
        }
      }
    }

    .scroll_mid {
      transform: translateZ(-5px) scale(1.5);
      p {
        display: none;
        // position: absolute;
        // top: 35%;
        // left: 40%;
        // font-size: 20px;
        // font-weight: 600;
        // color: color.$gray_500;

        @include breakpoint.bgScreen {
          // font-size: 24px;
        }
      }

      img {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translateX(-50%);
        width: 350px;

        @include breakpoint.bgScreen {
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translateX(-50%);
          width: 460px;
        }
      }
    }

    .scroll_second {
      transform: translateZ(0) scale(1);

      img {
        position: absolute;
        bottom: 15%;
        right: 30px;
        width: 250px;

        @include breakpoint.desktop {
          width: 300px;
          position: absolute;
          bottom: 5%;
          right: 5%;
        }

        @include breakpoint.bgScreen {
          width: 360px;
          position: absolute;
          bottom: 5%;
          right: 5%;
        }
      }
    }

    .scroll_slow {
      transform: translateZ(-15px) scale(2.5);
      p {
        position: absolute;
        left: 80px;
        bottom: 300px;
        font-weight: 600;
        font-size: 20px;
        color: color.$gray_500;
        background: rgba($color: #fff, $alpha: 0.8);

        @include breakpoint.bgScreen {
          font-size: 24px;
        }
      }
      img {
        position: absolute;
        bottom: 5%;
        left: 80px;
        width: 300px;

        @include breakpoint.desktop {
          position: absolute;
          bottom: 0;
          left: 100px;
          width: 400px;
        }

        @include breakpoint.bgScreen {
          position: absolute;
          bottom: 0;
          left: 100px;
          width: 500px;
        }
      }
    }
    .scroll_last {
      transform: translateZ(-10px) scale(2);
      display: block; //因為在手機上不顯示
      img {
        position: absolute;
        bottom: 5%;
        right: 100px;
        width: 320px;

        @include breakpoint.desktop {
          position: absolute;
          bottom: 0;
          right: 100px;
          width: 380px;
        }

        @include breakpoint.bgScreen {
          position: absolute;
          bottom: 0;
          right: 100px;
          width: 480px;
        }
      }
    }

    .scroll_slogan {
      transform: translateZ(-30px) scale(4);
      .slogan {
        position: absolute;
        // height: 70px;
        bottom: 0;
        width: 100%;
      }
      p {
        display: inline-block;
        margin-right: 20px;
        color: color.$brown_500;
        font-size: 32px;
        font-weight: 600;

        @include breakpoint.bgScreen {
          font-size: 40px;
        }
      }
      img {
        display: inline-block;
        animation: MoveLR 2s ease-in-out alternate infinite;
        width: 100px;

        @include breakpoint.bgScreen {
          width: 200px;
        }
      }
    }
  }
}

@keyframes MoveLR {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(20px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes living {
  from {
    opacity: 1;
    transform: scale(0.5);
  }
  to {
    opacity: 0;
    transform: scale(1.2);
  }
}
</style>
