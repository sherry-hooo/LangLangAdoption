<template>
  <main>
    <div class="container">
      <p class="page_title">志工招募</p>
      <div class="flex_1">
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
          <button class="apply" @click="volunteerApply = true">報名加入</button>
        </div>
      </div>
      <div class="layout_line">
        <div class="solid_circle"></div>
        <div class="frame_circle"></div>
        <div class="frame_line"></div>
      </div>
      <div class="flex_2">
        <div class="img_box">
          <img src="@/assets/img/volunteer3.jpg" alt="" />
        </div>
        <div class="img_box">
          <img src="@/assets/img/volunteer2.jpg" alt="" />
        </div>
      </div>
    </div>
  </main>
  <VolunteerApply v-if="volunteerApply"></VolunteerApply>
</template>

<script>
import VolunteerApply from "@/components/VolunteerApply.vue";
export default {
  components: { VolunteerApply },
  data() {
    return {
      volunteerApply: false,
    };
  },
};
</script>
<style lang="scss" scoped>
// * {
//   outline: solid 1px red;
// }
main {
  position: relative;
  padding-top: 60px;
  background-color: color.$brown_100;
  @include breakpoint.tablet {
    padding-top: 103px;
  }
}
.container {
  @include breakpoint.tablet {
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 1440px;
    margin: 0 auto;
  }
}
.page_title {
  padding: 0px 10px;
  font-size: 20px;
  font-weight: 900;
  text-align: start;
  @include breakpoint.mobile {
    font-size: 50px;
  }
  @include breakpoint.tablet {
    padding: 0 50px;
  }
  @include breakpoint.desktop {
    padding: 0 100px;
  }
}
.flex_1 {
  display: flex;
  gap: 10px;
  padding: 0px 10px;
  @include breakpoint.tablet {
    flex-direction: column;
    padding: 0 50px;
    gap: 70px;
    & .img_box {
      max-width: 55%;
      height: 35%;
      & img {
        // width: 100%;
        object-position: 0 -60px;
      }
    }
  }
  @include breakpoint.desktop {
    padding: 0 100px;
  }
}
.img_box {
  overflow: hidden;
  flex: 1;
  & img {
    width: 100%;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: flex-end;
    max-width: 55%;
  }
}
.item {
  margin-top: 12px;
  text-align: start;
  &:first-child {
    margin-top: 0;
  }
  &_title {
    font-size: 16px;
    font-weight: 700;
    color: color.$gray_700;
  }
  &_text {
    font-size: 12px;
    font-weight: 500;
    color: color.$gray_500;
  }
}
.item {
  @include breakpoint.bgScreen {
    margin-top: 16px;
    &_title {
      font-size: 24px;
      font-weight: 900;
    }
    &_text {
      font-size: 20px;
      font-weight: 700;
    }
  }
}
.flex_2 {
  margin-top: 20px;
  padding: 0 10px;
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
    padding: 0;
    position: absolute;
    right: 50px;
    bottom: 120px;
    max-width: 50%;
    gap: 60px;
  }
  @include breakpoint.desktop {
    right: 100px;
  }
}
.layout_line {
  position: absolute;
  left: 15%;
  top: 35%;
  @include breakpoint.mobile {
    // left: 15%;
    top: 47%;
  }
  @include breakpoint.desktop {
    top: 50%;
  }
}
.solid_circle {
  border-radius: 999em;
  background-color: #af9380;
  width: 25px;
  height: 25px;
  transform: translate(60px, 90px);
}
.frame_circle {
  border: solid 2px;
  border-radius: 999em;
  border-color: #dec39e;
  width: 70px;
  height: 70px;
}
.frame_line {
  @include breakpoint.tablet {
    border: solid 1px;
    border-color: #dec39e;
    width: 223px;
    transform: translate(370px, -356px);
  }
  @include breakpoint.desktop {
    transform: translate(580px, -580px);
  }
}
.apply {
  margin-top: 12px;
  background: color.$brown_300;
  color: white;
  font-size: 18px;
  font-weight: 700;
  border-radius: 5px;
  padding: 10px 25px;
  cursor: pointer;
  @include breakpoint.mobile {
    margin-top: 36px;
    background: color.$brown_300;
    color: white;
    font-size: 25px;
    font-weight: 900;
    border-radius: 10px;
    padding: 20px 50px;
    cursor: pointer;
  }
}
</style>
