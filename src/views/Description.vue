<template>
  <main>
    <div class="description">
      <div class="des_container">
        <h2>浪浪資料</h2>
        <div class="line_box">
          <div class="line2_box">
            <img src="@/assets/img/Line2.svg" alt="" />
          </div>
          <div class="line3_box">
            <img src="@/assets/img/Line3.svg" alt="" />
          </div>
        </div>
        <div class="case">
          <div class="circle_box">
            <img src="@/assets/img/circles.svg" alt="" />
          </div>
          <div class="case_img_box">
            <div class="img_box">
              <img :src="petData.album_file" alt="浪浪圖片" />
            </div>
            <div class="follow_box">
              <div class="follow">
                <label class="heart_icon">
                  <input type="checkbox" @click="setToTrack" />
                  <i class="far fa-heart"></i>
                </label>
                <span>{{ tracking ? "已追蹤" : "追蹤" }}</span>
              </div>
              <button class="button_adopt" @click="showAdoptionNotice = true">
                我有意願認養
              </button>
            </div>
          </div>
          <div class="case_des_box">
            <div v-if="petData.animal_status" class="case_wrapper wrapper_2">
              <p class="case_title">狀態 &colon;</p>
              <p class="case_content">
                {{ petData.animal_status === "OPEN" ? "待領養" : "已領養" }}
              </p>
            </div>
            <div v-if="petData.animal_kind" class="case_wrapper wrapper_2">
              <p class="case_title">類型 &colon;</p>
              <p class="case_content">{{ petData.animal_kind }}</p>
            </div>
            <div v-if="petData.animal_colour" class="case_wrapper wrapper_2">
              <p class="case_title">顏色 &colon;</p>
              <p class="case_content">{{ petData.animal_colour }}</p>
            </div>
            <div v-if="petData.animal_sex" class="case_wrapper wrapper_2">
              <p class="case_title">性別 &colon;</p>
              <p class="case_content">{{ petData.animal_sex === "F" }}</p>
            </div>
            <div v-if="petData.animal_bodytype" class="case_wrapper wrapper_2">
              <p class="case_title">體型 &colon;</p>
              <p class="case_content">{{ petData.animal_bodytype }}</p>
            </div>
            <div
              v-if="petData.animal_createtime"
              class="case_wrapper wrapper_2"
            >
              <p class="case_title">入所日期 &colon;</p>
              <p class="case_content">{{ petData.animal_createtime }}</p>
            </div>
            <div v-if="petData.animal_place" class="case_wrapper wrapper_1">
              <p class="case_title">收容地點 &colon;</p>
              <p class="case_content">{{ petData.animal_place }}</p>
            </div>
            <div v-if="petData.shelter_address" class="case_wrapper wrapper_1">
              <p class="case_title">收容地址 &colon;</p>
              <p class="case_content">{{ petData.shelter_address }}</p>
            </div>
            <div v-if="petData.shelter_tel" class="case_wrapper wrapper_2">
              <p class="case_title">聯絡電話 &colon;</p>
              <p class="case_content">{{ petData.shelter_tel }}</p>
            </div>
            <div v-if="petData.animal_remark" class="case_wrapper">
              <p class="case_title">備註 &colon;</p>
              <p class="case_content">
                {{ petData.animal_remark }}
              </p>
            </div>
          </div>
        </div>
        <div class="look_more">
          <router-link :to="{ name: 'Search' }">
            <span> 尋找其它浪浪 </span>
            <div class="arrow_box">
              <img src="@/assets/img/arrow.svg" alt="" />
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <AdoptionNotice
      v-if="showAdoptionNotice"
      @goNextPage="goNextPage"
      @submitNoticeForm="receiveNoticeForm"
      @cancelEdit="cancelEdit"
    ></AdoptionNotice>
    <AdoptionApply
      v-if="showAdoptionApply"
      @cancelEdit="cancelEdit"
      @submitApplyForm="receiveApplForm"
    ></AdoptionApply>
  </main>
</template>

<script>
import AdoptionApply from "@/components/AdoptionApply.vue";
import AdoptionNotice from "@/components/AdoptionNotice.vue";
import getApi from "@/service/getApi.js";

export default {
  name: "Description",
  props: ["petID", "petKind"],
  components: { AdoptionApply, AdoptionNotice },
  data() {
    return {
      showAdoptionNotice: false,
      showAdoptionApply: false,
      noticeForm: {},
      applyForm: {},
      tracking: false,
      petData: {},
    };
  },
  computed: {
    // tracking() {
    //   let ifTracking = this.getLocalStorage().find({
    //     petID: this.petID,
    //     petKind: this.petKind,
    //   })
    //     ? true
    //     : false;
    //   console.log(ifTracking);
    //   return false;
    // },
  },
  methods: {
    goNextPage(data) {
      this.showAdoptionNotice = false;
      this.showAdoptionApply = data;
    },
    receiveNoticeForm(answer) {
      console.log(answer);
      this.noticeForm = answer;
    },
    cancelEdit(componentName) {
      componentName === "AdoptionApply"
        ? (this.showAdoptionApply = false)
        : (this.showAdoptionNotice = false);
    },
    receiveApplForm(form) {
      console.log("收到驗證後的資料了", form);
      this.showAdoptionApply = false;
    },
    setToTrack() {
      this.tracking = !this.tracking;
      let trackingList = this.getLocalStorage();
      const trackingPet = { petID: this.petID, petKind: this.petKind };
      trackingList.push(trackingPet);
      this.setLocalStorage(trackingList);
    },
    getLocalStorage() {
      return JSON.parse(localStorage.getItem("trackList")) || [];
    },
    setLocalStorage(trackingList) {
      localStorage.setItem("trackList", JSON.stringify(trackingList));
    },
    getAnimalData(petKind, petID) {
      getApi
        .getAnimalData(petKind, petID)
        .then((res) => (this.petData = res.data.Data[0]));
    },
    checkTrackingStatus() {
      let inTrackingList = this.getLocalStorage()
        .map((pet) => pet.id)
        .includes(this.petID);
      if (inTrackingList) {
        this.tracking = true;
      } else {
        return false;
      }
    },
  },
  created() {
    this.getAnimalData(this.petKind, this.petID);
    this.checkTrackingStatus();
  },
};
</script>
<style lang="scss" scoped>
// * {
//   outline: solid 1px red;
// }
.sample {
  padding: 10px;
  cursor: pointer;
}
main {
  padding-top: 60px;
  background-color: color.$brown-100;
  position: relative;
  overflow: hidden;
  height: fit-content;
  min-height: 100vh;
  @include breakpoint.tablet {
    padding-top: 103px;
  }
}
.description {
  padding: 10px 30px 30px 30px;
  @include breakpoint.tablet {
    padding: 0px 50px 50px 50px;
  }
  @include breakpoint.desktop {
    padding: 0px 100px 60px 100px;
  }
}
@mixin h2 {
  font-size: 24px;
  font-weight: 500;
  color: color.$gray_700;
  width: fit-content;
  @include breakpoint.tablet {
    font-size: 36px;
  }
  @include breakpoint.bgScreen {
    font-size: 50px;
  }
}
.des_container {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  & h2 {
    @include h2;
  }
}
.case {
  margin-top: 10px;
  @include breakpoint.tablet {
    margin-top: 30px;
  }
  @include breakpoint.desktop {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    gap: 80px;
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
    }
    @include breakpoint.desktop {
      display: block;
    }
  }
  &_wrapper {
    // margin-top: 24px;
    @include breakpoint.desktop {
      &:first-child {
        margin-top: 0;
      }
    }
  }
  & .wrapper_2 {
    flex: 40%;
  }
  & .wrapper_1 {
    flex: 60%;
    @include breakpoint.desktop {
      flex: 40%;
    }
  }
  &_des_box {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    text-align: left;
    gap: 10px 50px;
    @include breakpoint.mobile {
      // max-width: 576px;
      margin: 0 auto;
      margin-top: 40px;
    }
    @include breakpoint.tablet {
      gap: 15px;
    }
    @include breakpoint.desktop {
      margin-top: 0;
      flex-direction: column;
      flex-wrap: nowrap;
      flex: 50%;
    }
  }
  &_title {
    font-size: 22px;
    font-weight: 500;
    color: color.$gray_700;
    @include breakpoint.desktop {
      font-size: 25px;
    }
  }
  &_content {
    margin-top: 5px;
    font-size: 18px;
    font-weight: 400;
    color: color.$gray_500;
    @include breakpoint.desktop {
      font-size: 21px;
    }
  }
}
.circle_box {
  display: none;
  @include breakpoint.mobile {
    display: block;
    position: absolute;
    width: 10%;
    left: 35vw;
    top: 31vh;
  }
  @include breakpoint.tablet {
    left: 35vw;
    top: 44vh;
  }
  @include breakpoint.desktop {
    left: 30vw;
    top: 48vh;
  }
  @include breakpoint.bgScreen {
    left: 30vw;
    top: 48vh;
  }
  & img {
    width: 100%;
    height: 100%;
  }
}
.line_box {
  display: none;
  @include breakpoint.mobile {
    display: block;
  }
}

.line2_box {
  position: absolute;
  right: 0;
  top: 3px;
  width: 170px;
  & img {
    width: 100%;
    height: 100%;
  }
}
.line3_box {
  position: absolute;
  right: 15px;
  top: 0;
  height: 170px;
  & img {
    height: 100%;
  }
}
.img_box {
  flex: 40%;
  border: solid 8px;
  border-color: color.$white;
  background-color: color.$brown_100;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  max-width: 500px;
  // max-height: 400px;
  & img {
    width: 100%;
    height: 100%;
  }
  @include breakpoint.desktop {
    flex: unset;
  }
}
.follow_box {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 5px;
  flex: 40%;
  @include breakpoint.mobile {
    margin-top: 0;
    gap: 30px;
    justify-content: flex-end;
  }
  @include breakpoint.desktop {
    margin-top: 50px;
    justify-content: flex-start;
  }
}
.follow {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .heart_icon {
    margin-right: 15px;
    input[type="checkbox"] {
      display: none;
    }
    i {
      font-size: 30px;
      color: red;
    }
    input[type="checkbox"]:checked + i {
      font-weight: 900;
    }
  }
  span {
    font-size: 20px;
    font-weight: 900;
  }
}
.button_adopt {
  display: block;
  padding: 10px 20px;
  margin-left: auto;
  width: fit-content;
  background-color: color.$brown_300;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  color: color.$white;
  cursor: pointer;
  @include breakpoint.mobile {
    margin-left: unset;
  }
  // @include breakpoint.tablet {
  // }
  @include breakpoint.bgScreen {
    font-size: 22px;
    padding: 15px 30px;
  }
}
.look_more {
  margin-top: 30px;
  text-align: end;
  a {
    display: block;
    &::before {
      content: "";
      height: 1px;
      display: inline-block;
      background-color: color.$brown_300;
      @include breakpoint.mobile {
        width: 200px;
      }
      @include breakpoint.tablet {
        width: 250px;
      }
      @include breakpoint.desktop {
        width: 350px;
      }
    }
  }
  & span {
    font-size: 24px;
    font-weight: 500;
    color: color.$brown_500;
    @include breakpoint.tablet {
      font-size: 30px;
    }
  }
  .arrow_box {
    display: inline-block;
    max-width: 75px;
    & img {
      width: 100%;
      height: 100%;
    }
    @include breakpoint.tablet {
      max-width: 120px;
    }
  }
}
.line4_box {
  display: inline-block;
  width: 36%;
  & img {
    width: 100%;
  }
}
</style>
