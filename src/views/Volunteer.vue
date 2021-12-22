<template>
  <main>
    <div class="flex_2">
      <div class="img_box">
        <img src="@/assets/img/volunteer3.svg" alt="" />
      </div>
      <div class="img_box">
        <img src="@/assets/img/volunteer2.svg" alt="" />
      </div>
    </div>
    <div class="flex_1">
      <div class="img_box">
        <img src="@/assets/img/volunteer1.svg" alt="" />
      </div>
      <div class="info">
        <div class="info_content">
          <div class="item">
            <p class="item_title">招募單位：</p>
            <p class="item_text">好想浪你回家基金會</p>
          </div>
          <div class="item">
            <p class="item_title">服務地點：</p>
            <p class="item_text">701台南市東區北門路二段16號 L2A</p>
          </div>
          <div class="item">
            <p class="item_title">服務內容簡介：</p>
            <p class="item_text">1. 協助浪浪社會化訓練</p>
            <p class="item_text">2. 引導領養者認識浪浪</p>
            <p class="item_text">3. 協助假日領養活動</p>
          </div>
          <div class="item">
            <p class="item_title">聯絡人及聯絡方式：</p>
            <p class="item_text">Chris 0966666666</p>
          </div>
          <div class="item">
            <p class="item_title">招募對象：</p>
            <p class="item_text">18 歲以上一般民眾</p>
          </div>
        </div>
        <button class="apply" @click="volunteerApply = true">報名加入</button>
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
* {
  outline: solid 1px red;
}
.flex_1 {
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.img_box {
  overflow: hidden;
  max-width: 80vh;
  & img {
    width: 100%;
  }
}
.info {
  text-align: start;
  &_content {
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
    font-weight: 700;
    color: color.$gray_700;
  }
  &_text {
    font-size: 14px;
    font-weight: 500;
    color: color.$gray_500;
  }
}
.item {
  @include breakpoint.mobile {
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
.apply {
  margin-top: 36px;
  background: color.$brown_300;
  color: white;
  font-size: 25px;
  font-weight: 900;
  border-radius: 10px;
  padding: 20px 50px;
  cursor: pointer;
}
</style>
