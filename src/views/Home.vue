<template>
  <main>
    <div class="banner">
      <div class="decoration_dot">
        <img src="@/assets/img/circles.svg" alt="" />
      </div>
      <div class="banner_figure">
        <img src="@/assets/img/dog4.jpg" alt="cute dog" />
      </div>
      <div class="banner_content_area">
        <div class="decoration_house">
          <img src="@/assets/img/bigArrow.svg" alt="cute dog" />
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
    </div>

    <div class="gallery"></div>

    <div class="volunteer_ad">
      <h2>志工招募</h2>
      <p>我們需要你，成為我們最強的後盾</p>
      <div class="volunteer_entry">
        <div class="volunteer_image">
          <img src="@/assets/img/volunteer4.jpg" alt="" />
        </div>
        <button>我有興趣</button>
      </div>
    </div>

    <div class="topic"></div>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding-top: 60px; //扣除navbar高度

  @include breakpoint.tablet {
    padding-top: 103px;
  }
}

.banner {
  position: relative;
  z-index: -2;
  height: calc(100vh - 60px);
  overflow: hidden;
  background: color.$brown_100;

  @include breakpoint.tablet {
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
      width: 50%;
    }

    @include breakpoint.desktop {
      padding: 30px 100px;
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
      top: 30%;
      bottom: auto;
      width: fit-content;
      background: none;
    }
  }

  &_caption h1 {
    color: color.$gray_700;
    font-size: 40px;
    font-weight: 500;

    @include breakpoint.tablet {
      font-size: 54px;
    }

    @include breakpoint.desktop {
      font-size: 70px;
    }
  }

  &_caption h2 {
    margin-top: 10px;

    color: color.$brown_500;
    font-size: 20px;
    font-weight: 500;

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
    // relative to content_area
    position: absolute;
    right: 0;
    bottom: 15%;

    padding: 20px;
    background: color.$brown_300;

    transform: scale(0.8);

    @include breakpoint.tablet {
      right: unset;
      bottom: 0;
      padding: 30px 55px;
    }
  }
}

.gallery {
  height: 100vh;
  background: white;
}

.volunteer_ad {
  padding: 20px 0;
  background: color.$brown_100;

  @include breakpoint.tablet {
    padding: 20px 0;
  }

  h2 {
    font-size: 24px;
    color: color.$brown_500;
    @include breakpoint.tablet {
      font-size: 30px;
    }
    @include breakpoint.desktop {
      font-size: 50px;
    }
  }

  p {
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
    position: static;
    padding: 10px 20px;
    border-radius: 10px;
    color: white;
    background: color.$brown_300;
    font-size: 18px;
    font-weight: 600;

    @include breakpoint.tablet {
      padding: 15px 25px;
      font-size: 20px;
    }

    @include breakpoint.desktop {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 25px 65px;
      font-size: 24px;
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
</style>
