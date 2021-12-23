<template>
  <main>
    <div class="description">
      <div class="des_container">
        <h2>浪浪資料</h2>
        <div class="case">
          <div class="case_img_box">
            <div class="img_box">
              <img
                v-if="petData.album_file"
                :src="petData.album_file"
                alt="浪浪圖片"
              />
              <img
                v-else-if="petKind === '狗'"
                src="@/assets/img/dog1.jpg"
                alt="狗狗替代圖片"
              />
              <img v-else src="@/assets/img/cat1.jpg" alt="貓貓替代圖片" />
            </div>
            <div class="follow_box">
              <div class="follow">
                <label class="heart_icon">
                  <input type="checkbox" @click="setTrack" />
                  <i class="far fa-heart" :class="{ onTrack: tracking }"></i>
                </label>
                <span>{{ tracking ? "已追蹤" : "追蹤" }}</span>
              </div>
              <button class="button_adopt" @click="showAdoptionNotice = true">
                我有意願認養
              </button>
            </div>
          </div>
          <div class="case_des_box" v-if="petData">
            <div v-if="petData.animal_status" class="case_wrapper">
              <p class="case_title">狀態 &colon;</p>
              <p class="case_content">
                {{ petData.animal_status === "OPEN" ? "待領養" : "已領養" }}
              </p>
            </div>
            <div v-if="petData.animal_kind" class="case_wrapper">
              <p class="case_title">類型 &colon;</p>
              <p class="case_content">{{ petData.animal_kind }}</p>
            </div>
            <div v-if="petData.animal_colour" class="case_wrapper">
              <p class="case_title">顏色 &colon;</p>
              <p class="case_content">{{ petData.animal_colour }}</p>
            </div>
            <div v-if="petData.animal_sex" class="case_wrapper">
              <p class="case_title">性別 &colon;</p>
              <p class="case_content">{{ petSex }}</p>
            </div>
            <div v-if="petData.animal_bodytype" class="case_wrapper">
              <p class="case_title">體型 &colon;</p>
              <p class="case_content">{{ petBodyType }}</p>
            </div>
            <div v-if="petData.animal_place" class="case_wrapper">
              <p class="case_title">收容地點 &colon;</p>
              <p class="case_content">{{ petData.animal_place }}</p>
            </div>
            <div v-if="petData.shelter_address" class="case_wrapper">
              <p class="case_title">收容地址 &colon;</p>
              <p class="case_content">{{ petData.shelter_address }}</p>
            </div>
            <div v-if="petData.shelter_tel" class="case_wrapper">
              <p class="case_title">聯絡電話 &colon;</p>
              <p class="case_content">{{ petData.shelter_tel }}</p>
            </div>
            <div v-if="petData.animal_createtime" class="case_wrapper">
              <p class="case_title">入所日期 &colon;</p>
              <p class="case_content">{{ petData.animal_createtime }}</p>
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
    petBodyType() {
      let bodyType = this.petData.animal_bodytype;
      switch (bodyType) {
        case "MEDIUM":
          bodyType = "中型";
          break;
        case "BIG":
          bodyType = "大型";
          break;
        case "SMALL":
          bodyType = "小型";
          break;
      }
      return bodyType;
    },
    petSex() {
      let gender = this.petData.animal_sex;
      switch (gender) {
        case "F":
          gender = "女孩";
          break;
        case "M":
          gender = "男孩";
          break;
        case "N":
          gender = "中性";
          break;
      }
      return gender;
    },
  },
  methods: {
    goNextPage(data) {
      this.showAdoptionNotice = false;
      this.showAdoptionApply = data;
    },
    receiveNoticeForm(answer) {
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
    setTrack() {
      this.tracking = !this.tracking;
      let trackingList = this.getLocalStorage();
      const trackingPet = {
        petID: parseInt(this.petID),
        petKind: this.petKind,
        petImg: this.petData.album_file,
        petColour: this.petData.animal_colour,
        petSex: this.petData.animal_sex,
        petPlace: this.petData.animal_place,
      };
      if (this.tracking) {
        trackingList.push(trackingPet);
        this.setLocalStorage(trackingList);
      } else {
        const removeTrackingIndex = trackingList.findIndex(
          (trackedPet) => trackedPet.petID === trackingPet.petID
        );
        trackingList.splice(removeTrackingIndex, 1);
        this.setLocalStorage(trackingList);
      }
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
        .map((pet) => pet.petID)
        .includes(parseInt(this.petID));
      if (inTrackingList) {
        this.tracking = true;
      } else {
        this.tracking = false;
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
  padding: 60px 0px 0px 0px;
  background-color: color.$brown-100;
  position: relative;
  height: fit-content;
  min-height: 100vh;
}
.description {
  padding: 0px 30px 30px 30px;
  @include breakpoint.tablet {
    padding: 0px 50px 50px 50px;
  }
  @include breakpoint.desktop {
    padding: 0px 100px 60px 100px;
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
  & img {
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
    .onTrack {
      font-weight: 900;
      transition: all 0.3s ease-in-out;
    }
  }
  span {
    font-size: 20px;
    font-weight: 900;
  }
}
.button_adopt {
  display: block;
  margin-top: 30px;
  padding: 21px 42px;
  background-color: color.$brown_300;
  border-radius: 10px;
  font-size: 20px;
  color: color.$white;
  cursor: pointer;
  @include breakpoint.tablet {
    font-size: 25px;
  }
}
.look_more {
  margin-top: 30px;
  a {
    display: block;
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
  & span {
    font-size: 30px;
    font-weight: 900;
    color: color.$brown_500;
    @include breakpoint.tablet {
      font-size: 40px;
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
}
</style>
