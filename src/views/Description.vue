<template>
  <main>
    <div class="description">
      <div class="des_container">
        <h2>浪浪資料</h2>
        <div class="case">
          <div class="case_img_box">
            <div class="img_box">
              <img src="@/assets/img/cat2.svg" alt="" />
            </div>
            <div class="follow_box">
              <div class="follow">
                <i class="fas fa-heart"></i>
                <span> 取消追蹤</span>
              </div>
              <button class="button_adopt" @click="showAdoptionNotice = true">
                我有意願認養
              </button>
            </div>
          </div>
          <div class="case_des_box">
            <div class="case_wrapper">
              <p class="case_title">狀態：</p>
              <p class="case_content">待領養</p>
            </div>
            <div class="case_wrapper">
              <p class="case_title">類型：</p>
              <p class="case_content">貓</p>
            </div>
            <div class="case_wrapper">
              <p class="case_title">顏色：</p>
              <p class="case_content">灰白色</p>
            </div>
            <div class="case_wrapper">
              <p class="case_title">性別：</p>
              <p class="case_content">女孩</p>
            </div>
            <div class="case_wrapper">
              <p class="case_title">體型：</p>
              <p class="case_content">小</p>
            </div>
            <div class="case_wrapper">
              <p class="case_title">收容地點：</p>
              <p class="case_content">澎湖縣流浪動物收容中心</p>
            </div>
            <div class="case_wrapper">
              <p class="case_title">收容地址：</p>
              <p class="case_content">澎湖縣流浪動物收容中心</p>
            </div>
            <div class="case_wrapper">
              <p class="case_title">聯絡電話：</p>
              <p class="case_content">06-9213559</p>
            </div>
            <div class="case_wrapper">
              <p class="case_title">入所日期：</p>
              <p class="case_content">2021/09/23</p>
            </div>
            <div class="case_wrapper">
              <p class="case_title">備註：</p>
              <p class="case_content">
                本站動物皆採現場互動面談後評估能否認養，不接受系統上的預約
              </p>
            </div>
          </div>
        </div>
        <div class="look_more">
          <span> 尋找其它浪浪 </span>
          <div class="arrow_box">
            <img src="@/assets/img/arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <AdoptionNotice
      v-if="showAdoptionNotice"
      @goNextPage="goNextPage"
    ></AdoptionNotice>
    <AdoptionApply v-if="AdoptionApply"></AdoptionApply>
  </main>
</template>

<script>
import AdoptionApply from "@/components/AdoptionApply.vue";
import AdoptionNotice from "@/components/AdoptionNotice.vue";
export default {
  components: { AdoptionApply, AdoptionNotice },
  data() {
    return {
      showAdoptionNotice: false,
      AdoptionApply: false,
    };
  },
  methods: {
    goNextPage(data) {
      this.showAdoptionNotice = false;
      this.AdoptionApply = data;
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  outline: solid 1px red;
}
.sample {
  padding: 10px;
  cursor: pointer;
}
main {
  padding: 60px 0px 0px 0px;
  background-color: color.$brown-100;
  // @include breakpoint.tablet {
  //   margin-top: 103px;
  // }
}
.description {
  padding: 0px 30px 30px 30px;
  // display: flex;
  @include breakpoint.tablet {
    // flex-wrap: wrap;
    padding: 0px 50px 50px 50px;
  }
  @include breakpoint.desktop {
    padding: 0px 100px 100px 100px;
  }
}
.des_container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  & h2 {
    width: fit-content;
  }
}
.case {
  margin-top: 30px;
  @include breakpoint.desktop {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }

  &_img_box {
    display: flex;
    flex-direction: column;
    @include breakpoint.mobile {
      flex-direction: unset;
      justify-content: space-between;
      gap: 50px;
    }
    @include breakpoint.tablet {
      // display: flex;
      // justify-content: space-between;
      // padding: 0 50px;
      // width: 768px;
    }
    @include breakpoint.desktop {
      flex-direction: column;
      flex: 50%;
    }
  }
  &_wrapper {
    margin-top: 24px;
    @include breakpoint.desktop {
      &:first-child {
        margin-top: 0;
      }
    }
  }
  &_des_box {
    text-align: left;
    @include breakpoint.desktop {
      flex: 50%;
    }
  }
  &_title {
    font-size: 24px;
    font-weight: 900;
    color: color.$gray_700;
  }
  &_content {
    font-size: 18px;
    font-weight: 900;
    color: color.$gray_500;
  }
}
.img_box {
  flex: 50%;
  border: solid 8px;
  border-color: color.$white;
  background-color: color.$brown_100;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  max-width: 500px;
  max-height: 400px;
  // @include breakpoint.tablet {
  //   border: solid 16px;
  //   border-color: color.$white;
  //   width: 468px;
  //   height: 368px;
  // }
  & img {
    // object-fit: cover;
    width: 100%;
  }
}
.follow_box {
  flex: 40%;
  @include breakpoint.tablet {
    flex: unset;
  }
  @include breakpoint.desktop {
    flex: 40%;
  }
}
.follow {
  margin-top: 40px;
  text-align: left;
}
.button_adopt {
  display: block;
  margin-top: 30px;
  padding: 21px 42px;
  background-color: color.$brown_300;
  border-radius: 10px;
  font-size: 20px;
  color: color.$white;
  @include breakpoint.tablet {
    font-size: 25px;
  }
}
.look_more {
  margin-top: 30px;
  & span {
    font-size: 30px;
    font-weight: 900;
    color: color.$brown_500;
    @include breakpoint.tablet {
      font-size: 40px;
    }
    &::before {
      content: "";

      height: 2px;
      display: inline-block;
      background-color: color.$brown_300;
      margin: 13px auto;
      @include breakpoint.tablet {
        width: 300px;
      }
    }
  }
}
.arrow_box {
  display: inline-block;
  max-width: 75px;
  & img {
    width: 100%;
  }
  @include breakpoint.tablet {
    max-width: 175px;
  }
}
</style>
