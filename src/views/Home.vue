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
          <svg width="577" height="292" viewBox="0 0 577 292" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="path" d="M136 233V162.5H1.5L204 1L576 291" stroke="#DEC39E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
        <button>
          <img src="@/assets/img/buttonArrow.svg" alt="" />
        </button>
      </div>
    </section>

    <section class="gallery">
      <div class="parallax_group">
        <div class="parallax_layer scroll_three">
          <img src="@/assets/img/dog1.jpg">
        </div>
        <div class="parallax_layer scroll_lowest">
          <p>希望能夠有一個家， <br/>
            一個會好好愛我的主人</p>
          <img src="@/assets/img/cat1.jpg">
        </div>
        <div class="parallax_layer scroll_four">
          <img src="@/assets/img/cat2.jpg">
        </div>
        <div class="parallax_layer scroll_one">
          <p>你能夠帶我回家嗎？</p>
          <img src="@/assets/img/dog2.jpg">
        </div>
        <div class="parallax_layer scroll_two">
          <img src="@/assets/img/dog3.jpg">
        </div>
      </div>
    </section>

    <section class="volunteer_ad">
      <h2>志工招募</h2>
      <p>我們需要你，成為我們最強的後盾</p>
      <div class="volunteer_entry">
        <div class="volunteer_image">
          <img src="@/assets/img/volunteer4.jpg">
        </div>
        <button>我有興趣</button>
      </div>
    </section>

    <section class="topic">
      <div class="topic_img">
        <img src="@/assets/img/cat3.jpg" alt="lovely cat" />
      </div>
      <div class="topic_content_area">
        <h2>領養前的那些事</h2>
        <p>多的是，你不知道的事。</p>
        <button>我想知道</button>
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

<style lang="scss" scoped>

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
  margin-top: 60px; //扣除navbar高度

  @include breakpoint.tablet {
    margin-top: 103px; //扣除navbar高度
  }
}

.banner {
  height: calc(100vh - 60px);
  position: relative;
  z-index: -2;
  overflow: hidden;
  background: color.$brown_100;

  @include breakpoint.tablet{
    height: calc(100vh - 103px);
  }

  .decoration_dot {
    display: none;

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
    z-index: -1;
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

    .decoration_house{
      @include breakpoint.desktop{
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

    @include breakpoint.desktop{
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

  50%{
    transform: translateY(10px);
  }

  100%{
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

.decoration_house{
  .path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: DrawHouse 2s linear alternate forwards;
    }
  }

@keyframes FadeIn{
  from { opacity: 0}
  to { opacity: 1}
}

.banner_caption h1{
  opacity: 0;
  animation: FadeIn 2s linear forwards;}

.banner_caption h2{
  opacity: 0;
  animation: FadeIn 1s linear forwards;
  animation-delay: 1.5s;
}

.banner_caption p{
  opacity: 0;
  animation: FadeIn 1s linear forwards;
  animation-delay: 2s;
}

.gallery {
  height: 100vh;
  background: white;
}

.volunteer_ad {
  background: color.$brown_100;
  padding: 10px ;

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

  @include breakpoint.tablet{
    background: color.$brown_100;
  }

  &_img {
    width: 40%;
    height: 100%;

    @include breakpoint.tablet{
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
  }

  .solid_circle {
    display: none;
  }

  @include breakpoint.tablet {
    .hollow_circle{
      display: block;
      position: absolute;
      top: 10%;
      right: 3%;
      width: 90px;
    }

    .solid_circle{
      display: block;
      position: absolute;
      top: 20%;
      right: 13%;
      width: 30px;
      height: 30px;
    }
  }

  @include breakpoint.desktop {
    .hollow_circle{
      width: 120px;
    }

    .solid_circle{
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
  }
}

// 桌機板使用滾動視差
@include breakpoint.desktop{
.gallery{
  perspective: 10px;
  // height: 100vh;
  height: 1200px;  
  overflow-x: hidden;
  overflow-y: auto;

  .parallax_group{
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
    padding: 30px 30px;
    background: transparent;
  }
  .scroll_one {
    transform: translateZ(5px) scale(0.5);
    p{
      position: absolute;
      color: color.$gray_500;
    }
    img {
      width: 500px;
      position: absolute;
      bottom: 0;
      // bottom: 5%;
      // left: 100px;
    }
  }
  .scroll_two {
    transform: translateZ(0) scale(1);
    img {
      width: 480px;
      position: absolute;
      bottom: 0;
      // bottom: 8%;
      // right: 70px;
    }
  }
  .scroll_three {
    transform: translateZ(-5px) scale(1.5);
    img {
      width: 370px;
      position: absolute;
      bottom: 0;
      left: 20%;
      // top: 100%;
      // left: 520px;
    }
  }
  .scroll_four {
    transform: translateZ(-20px) scale(3);
    img {
      width: 400px;
      position: absolute;
      bottom: 0;
      // top: 15%;
      // right: 100px;
    }
  }
  .scroll_lowest {
    transform: translateZ(-30px) scale(4);
    p{
      position: absolute;
      
      // bottom: 200px;
      // left: 45%;
      // top: 40%;
      font-size: 5px;
      color: color.$gray_500;
    }
    img {
      width: 460px;
      position: absolute;
      top: 15%;
      // left: 32%;
      transform: translateY(-50%);
    }
  }
  }
}
</style>
