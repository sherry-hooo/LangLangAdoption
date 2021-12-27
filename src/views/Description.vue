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
        <div v-if="petData" class="case">
          <div class="case_img_box">
            <div class="img_box">
              <div class="circle_box">
                <img src="@/assets/img/circles.svg" alt="" />
              </div>
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
              <p class="case_content">{{ petSex }}</p>
            </div>
            <div v-if="petData.animal_bodytype" class="case_wrapper wrapper_2">
              <p class="case_title">體型 &colon;</p>
              <p class="case_content">{{ petBodyType }}</p>
            </div>
            <div
              v-if="petData.animal_createtime"
              class="case_wrapper wrapper_2"
            >
              <p class="case_title">入所日期 &colon;</p>
              <p class="case_content">{{ petData.animal_createtime }}</p>
            </div>
            <div v-if="petData.animal_place" class="case_wrapper">
              <p class="case_title">收容地點 &colon;</p>
              <p class="case_content">{{ petData.animal_place }}</p>
            </div>
            <div v-if="petData.shelter_address" class="case_wrapper">
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
          <router-link
            :to="{
              name: 'Search',
              query: {
                animalKind: petKind,
                animalPlace: petData.animal_place,
                shelterPkid: petData.animal_shelter_pkid,
              },
            }"
          >
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
      @closeFormSignal="showAdoptionNotice = false"
    ></AdoptionNotice>
    <AdoptionApply
      v-if="showAdoptionApply"
      @closeFormSignal="showAdoptionApply = false"
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
    setTrack() {
      this.tracking = !this.tracking;
      let trackingList = this.getLocalStorage();
      const trackingPet = {
        animal_id: parseInt(this.petID),
        animal_kind: this.petKind,
        album_file: this.petData.album_file,
        animal_colour: this.petData.animal_colour,
        animal_sex: this.petData.animal_sex,
        animal_place: this.petData.animal_place,
      };
      if (this.tracking) {
        trackingList.push(trackingPet);
        this.setLocalStorage(trackingList);
      } else {
        const removeTrackingIndex = trackingList.findIndex(
          (trackedPet) => trackedPet.petID === trackingPet.animal_id
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
        .map((pet) => pet.animal_id)
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
  background-color: color.$brown-100;
  // position: relative;
  // overflow: hidden; //會卡到表單
  height: fit-content;
  min-height: 100vh;
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
    flex: 60%;
    @include breakpoint.desktop {
      flex: 40%;
      &:first-child {
        margin-top: 0;
      }
    }
  }
  & .wrapper_2 {
    flex: 40%;
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
      gap: 15px 50px;
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
    word-break: break-all;
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
    width: 20%;
    right: -28px;
    bottom: -35px;
  }
  @include breakpoint.tablet {
    width: 25%;
    right: -35px;
    bottom: -40px;
  }
  @include breakpoint.desktop {
    // left: 30vw;
    // top: 48vh;
  }
  @include breakpoint.bgScreen {
    // left: 30vw;
    // top: 48vh;
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
  animation: MoveLR 2s ease-in-out alternate infinite;
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
  animation: MoveTB 2s ease-in-out alternate infinite;
  & img {
    height: 100%;
  }
}
.img_box {
  position: relative;
  flex: 40%;
  line-height: 0;
  border: solid 8px;
  border-color: color.$white;
  background-color: color.$brown_100;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
  max-width: 500px;
  max-height: 60vh;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @include breakpoint.desktop {
    flex: unset;
  }
}
.follow_box {
  display: flex;
  margin-top: 20px;
  gap: 5px;
  flex: 40%;
  @include breakpoint.mobile {
    flex-direction: column;
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
    max-width: 60px;
    animation: MoveLR 2s ease-in-out alternate infinite;
    & img {
      width: 100%;
      height: 100%;
    }
    @include breakpoint.tablet {
      max-width: 90px;
    }
    @include breakpoint.desktop {
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
@keyframes MoveLR {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes MoveTB {
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
</style>
