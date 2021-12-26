<template>
  <main>
    <div class="container">
      <h2>志工招募</h2>
      <div class="flex_1">
        <div class="layout_line_1">
          <div class="wave_box">
            <div class="wave">
              <div class="circle"></div>
              <div class="solid_circle"></div>
            </div>
          </div>
          <div class="frame_circle"></div>
        </div>
        <div class="img_box">
          <img src="@/assets/img/volunteer1.jpg" alt="" />
        </div>
        <div class="info">
          <div class="info_content">
            <div class="item">
              <p class="item_title">招募單位&colon;</p>
              <p class="item_text">好想浪你回家基金會</p>
            </div>
            <div class="item">
              <p class="item_title">服務地點&colon;</p>
              <p class="item_text">701台南市東區北門路二段16號 L2A</p>
            </div>
            <div class="item">
              <p class="item_title">服務內容簡介&colon;</p>
              <p class="item_text">1. 協助浪浪社會化訓練</p>
              <p class="item_text">2. 引導領養者認識浪浪</p>
              <p class="item_text">3. 協助假日領養活動</p>
            </div>
            <div class="item">
              <p class="item_title">聯絡人及聯絡方式&colon;</p>
              <p class="item_text">Chris 0966666666</p>
            </div>
            <div class="item">
              <p class="item_title">招募對象&colon;</p>
              <p class="item_text">18 歲以上一般民眾</p>
            </div>
          </div>
          <button class="apply" @click="applyVolunteer">報名加入</button>
        </div>
      </div>
      <div class="flex_2">
        <div class="layout_line_2">
          <div class="frame_line"></div>
        </div>
        <div class="img_box">
          <img src="@/assets/img/volunteer3.jpg" alt="" />
        </div>
        <div class="img_box">
          <img src="@/assets/img/volunteer2.jpg" alt="" />
        </div>
      </div>
    </div>
    <VolunteerApply
      v-if="volunteerApply"
      @closeFormSignal="volunteerApply = false"
    ></VolunteerApply>
  </main>
</template>

<script>
import VolunteerApply from "@/components/VolunteerApply.vue";
export default {
  name: "Volunteer",
  components: { VolunteerApply },
  data() {
    return {
      volunteerApply: false,
    };
  },
  methods: {
    applyVolunteer() {
      this.volunteerApply = true;
      this.scrollToTop();
    },
    scrollToTop() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
main {
  position: relative;
  padding-top: 10px;
  background-color: color.$brown_100;
}
.container {
  padding: 10px 30px 30px 30px;
  @include breakpoint.tablet {
    padding: 10px 50px 80px 50px;
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 1440px;
    margin: 0 auto;
  }
  @include breakpoint.bgScreen {
    padding: 10px 100px 80px 100px;
  }
}
h2 {
  font-size: 24px;
  font-weight: 500;
  color: color.$gray_700;
  text-align: start;
  @include breakpoint.mobile {
  }
  @include breakpoint.tablet {
    font-size: 36px;
  }
  @include breakpoint.desktop {
  }
  @include breakpoint.bgScreen {
    font-size: 50px;
  }
}
.flex_1 {
  display: flex;
  padding-top: 10px;
  gap: 10px;
  & .img_box {
    height: 50%;
    font-size: 0;
  }
  @include breakpoint.tablet {
    flex-direction: column;
    gap: 70px;
    & .img_box {
      max-width: 50%;
      // height: 35%;
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0 -60px;
      }
    }
  }
  @include breakpoint.desktop {
  }
}
.img_box {
  overflow: hidden;
  flex: 1;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @include breakpoint.tablet {
    flex: unset;
    // margin-top: 60px;
  }
}
.info {
  text-align: start;
  flex: 1;
  // &_content {
  // }
  @include breakpoint.tablet {
    width: fit-content;
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 55%;
  }
  @include breakpoint.desktop {
    margin-left: 50px;
  }
  @include breakpoint.bgScreen {
    margin-left: 80px;
  }
}
.item {
  margin-top: 12px;
  text-align: start;
  &:first-child {
    margin-top: 0;
  }
  &_title {
    font-size: 18px;
    font-weight: 500;
    color: color.$gray_700;
  }
  &_text {
    font-size: 14px;
    font-weight: 400;
    color: color.$gray_500;
  }

  .item {
    @include breakpoint.mobile {
      margin-top: 16px;
      &_title {
        font-size: 18px;
      }
      &_text {
        font-size: 14px;
      }
    }
  }
  .item {
    @include breakpoint.tablet {
      margin-top: 16px;
      &_title {
        font-size: 21px;
      }
      &_text {
        font-size: 17px;
      }
    }
  }
  .item {
    @include breakpoint.bgScreen {
      margin-top: 16px;
      &_title {
        font-size: 25px;
      }
      &_text {
        font-size: 21px;
      }
    }
  }
}
.flex_2 {
  margin-top: 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  line-height: 0;
  gap: 10px;
  @include breakpoint.mobile {
    flex-direction: unset;
  }
  @include breakpoint.tablet {
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 0;
    position: absolute;
    right: 50px;
    bottom: 60px;
    max-width: 50%;
    gap: 60px;
  }
  @include breakpoint.desktop {
    gap: 40px;
  }
  @include breakpoint.bgScreen {
    gap: 60px;
    right: 100px;
    top: 210px;
  }
  & .img_box {
    width: 100%;
    @include breakpoint.tablet {
      width: 360px;
      height: 360px;
    }
    @include breakpoint.desktop {
      width: 500px;
      height: 400px;
    }
    @include breakpoint.bgScreen {
      width: 700px;
      height: 550px;
    }
  }
}
.layout_line_2 {
  display: none;
  position: absolute;
  right: 0;

  @include breakpoint.mobile {
  }
  @include breakpoint.tablet {
    display: block;
    top: -90px;
  }
  @include breakpoint.desktop {
    top: -140px;
  }
  @include breakpoint.bgScreen {
    top: -20px;
  }
}
.frame_line {
  @include breakpoint.tablet {
    border: solid 1px;
    border-color: #dec39e;
    width: 170px;
    animation: 2s slidein 2s infinite alternate;
  }
  @include breakpoint.desktop {
    width: 223px;
  }
}
.apply {
  margin-top: 12px;
  background: color.$brown_300;
  color: white;
  font-size: 18px;
  font-weight: 500;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  @include breakpoint.tablet {
    margin-top: 36px;
    background: color.$brown_300;
    color: white;
    font-size: 22px;
    font-weight: 500;
    border-radius: 10px;
    padding: 15px 30px;
    cursor: pointer;
  }
}
.layout_line_1 {
  position: absolute;
  top: 32%;
  left: 20%;
  @include breakpoint.mobile {
    top: 59%;
  }
  @include breakpoint.tablet {
    top: 40%;
  }
  @include breakpoint.desktop {
    top: 47%;
  }
  @include breakpoint.bgScreen {
    top: 52%;
  }
}
.wave_box {
  position: absolute;
  top: 60px;
  left: 70px;
  width: 40%;
  height: 40%;
}
.solid_circle {
  position: absolute;
  z-index: 999;
  border-radius: 999em;
  background-color: #af9380;
  width: 25px;
  height: 25px;
  animation: living 3s infinite ease-out;
  border-radius: 50%;
  padding: 0;
}
.frame_circle {
  border: solid 2px;
  border-radius: 999em;
  border-color: #dec39e;
  width: 70px;
  height: 70px;
  animation: living 3s infinite ease-out;
}

// 波動效果
.wave {
  position: relative;
  width: 25px;
  height: 25px;
  text-align: center;
}
@keyframes living {
  from {
    opacity: 1;
    transform: scale(0.5);
  }
  to {
    opacity: 0;
    transform: scale(1.7);
  }
}
@keyframes slidein {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-20%);
  }
}
</style>
