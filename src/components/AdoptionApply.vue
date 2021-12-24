<template>
  <section class="wrapper">
    <div class="adoption_apply">
      <div class="progress_bar">
        <span></span>
      </div>
      <h4>步驟二 認養申請</h4>
      <label class="accept_container">
        <input type="checkbox" />
        <span class="fake_button"></span>
        <span>本人願遵守以下規定，並提出申請</span>
      </label>
      <ol>
        <li>
          1.
          依法辦理寵物登記、晶片植入等事項。並同意為認養隻動物絕育，避免不必要之繁殖。
        </li>
        <li>
          2.
          無論何時都以人道方式對待認養動物，提供牠適當之食物、飲水及空間，並絕不任意棄養認養的動物。
        </li>
        <li>
          3.
          若認養動物年齡未滿8週或不宜施打疫苗者，必須完成狂犬病預防注射，並將注射證明影本郵寄或傳真回本所備查。
        </li>
        <li>
          4.
          定期幫牠進行狂犬病預防注射、驅蟲及健康檢查，受傷或罹病時，必請獸醫師給予醫療。
        </li>
        <li>
          5. 妥善照顧牠，防止其無故侵害他人之生命，身體、自由、財產或安寧。
        </li>
        <li>
          6.
          不再隨便放縱牠於戶外，牠出入公共場所或公眾出入之場所時，必由7歲以上之人伴同，並採取適當之防衛措施，如繫犬鍊、帶口罩等，始得攜出戶外。
        </li>
        <li>
          7.
          當牠轉讓、死亡或住所異動時，於1個月內依規定辦理變更登記；遺失時，於5天內依規定申報。
        </li>
        <li>8. 本人願接受貴所之追蹤訪視及飼養輔導。</li>
        <li>
          9.
          如有違反上述認養規定，貴所有權收回該動物，並終止認養人對該認養動物之權利。
        </li>
        <li>
          10.
          如因任何原因無法續養，本人願為牠找到新的認養家庭，或送至動物保護團體所屬收容所，或再送至貴所辦理不擬續養手續並依收容所規定繳交規費。
        </li>
        <li>
          11.
          依據「動物保護法」第33-1條之規定:完成不擬續養手續後將不得飼養寵物及認養收容動物。
        </li>
        <li>
          12.
          本認養申請資料送出後，不代表已完成所選動物之認養，亦不代表您已具認養本動物的第一優先權，認養以收容所現場完成程序為準。
        </li>
      </ol>
      <form>
        <h5>申請資料</h5>
        <label>
          飼養地點:
          <input
            type="text"
            v-model="place"
            placeholder="請輸入地址及型態(公寓、透天)"
          />
        </label>
        <label class="space">
          空間大小:
          <input type="text" v-model="space" placeholder="請輸入坪數" />
        </label>
        <label class="pet_number">
          現有動物隻數:
          <input type="text" v-model="petCount" />
        </label>
        <label>
          認養人名稱:
          <input type="text" v-model="adoptorName" />
        </label>
        <label class="birth">
          認養人出生日期:
          <input type="text" v-model="adoptorBirth" />
        </label>
        <label>
          認養人聯絡電話:
          <input type="text" v-model="adoptorContact" />
        </label>
        <label class="email">
          電子信箱:
          <input type="text" v-model="adoptorEmail" />
        </label>
        <label class="adress">
          通訊地址:
          <input type="text" v-model="adoptorAddress" />
        </label>
      </form>
      <div class="notice_buttons">
        <button class="cancel_btn" type="cancel" @click="cancelEdit">
          取消
        </button>
        <button class="submit_btn" @click="submitApplyForm">申請</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      place: "",
      space: "",
      petCount: null,
      adoptorName: "",
      adoptorBirth: "",
      adoptorContact: "",
      adoptorEmail: "",
      adoptorAddress: "",
    };
  },
  methods: {
    cancelEdit() {
      this.$emit("cancelEdit", "AdoptionApply");
    },
    submitApplyForm() {
      const applyFormContent = {
        place: this.place,
        space: this.space,
        petCount: this.petCount,
        adoptorName: this.adoptorName,
        adoptorBirth: this.adoptorBirth,
        adoptorEmail: this.adoptorEmail,
        adoptorAddress: this.adoptorAddress,
      };
      this.validateData(applyFormContent);
      this.$emit("submitApplyForm", applyFormContent);
    },
    validateData() {
      console.log("驗證");
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 60px 0 20px 0;
  background: rgba(190, 188, 188, 0.6);
  backdrop-filter: blur(1px);
  display: flex;
  justify-content: center;
  //達成滿版效果
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  width: 100vw;
  height: 100%;
  min-height: fit-content;

  @include breakpoint.desktop {
    padding: 114px 0 20px 0;
    height: fit-content;
  }

  .adoption_apply {
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    width: 90%;
    height: fit-content;
    background-color: #fbf8f5;

    @include breakpoint.desktop {
      padding: 20px;
    }
    .accept_container {
      text-align: center;
      margin-top: 60px;
      margin-bottom: 16px;
      input[type="checkbox"] {
        // width: 25px;
        // height: 25px;
        // background-color: #c4c4c4;
        display: none;

        &:checked + span {
          background: #c4c4c4;
        }
      }
      .fake_button {
        display: inline-block;
        width: 25px;
        height: 25px;
        border: 1px solid;
      }

      span {
        vertical-align: bottom;
        margin-left: 5px;
      }
    }
    li {
      text-align: start;
    }

    h4 {
      font-size: 30px;
      font-weight: 900;
      margin-bottom: 16px;
      @include breakpoint.desktop {
        font-size: 50px;
        margin-bottom: 30px;
      }
    }
    form {
      display: flex;
      flex-wrap: wrap;
      background-color: #fbf8f5;
      margin-bottom: 60px;
      padding: 0 16px;

      h5 {
        flex: 100%;
        font-size: 20px;
        margin: 15px 0;
        @include breakpoint.desktop {
          font-size: 25px;
        }
      }
      .space,
      .birth,
      .email {
        margin-left: 20px;
      }
      label {
        flex: 1 1 45%;
        text-align: start;

        input {
          display: block;
          width: 100%;
          border: 2px solid #dec39e;
          height: 42px;
          border-radius: 10px;
        }
      }
      .pet_number {
        flex: 1 1 100%;
        input {
          width: 49%;
        }
      }
      .adress {
        flex: 1 1 100%;
        input {
          width: 49%;
        }
      }
    }
  }
}

.notice_buttons {
  button {
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    font-weight: 900;
    font-size: 16px;
    cursor: pointer;
    + button {
      margin-left: 10px;
    }
    @include breakpoint.desktop {
      font-size: 25px;
      padding: 20px 90px;
    }
  }
  .cancel_btn {
    background: color.$gray_100;
    &:hover {
      box-shadow: inset 2px -2px 4px color.$gray_300;
    }
  }
  .submit_btn {
    background: color.$brown_300;
    &:hover {
      box-shadow: inset 2px -2px 4px color.$brown_500;
    }
  }
}

.progress_bar {
  height: 20px;
  line-height: 20px;
  margin-bottom: 16px;

  @include breakpoint.desktop {
    height: 40px;
    line-height: 40px;
    margin-bottom: 36px;
  }
  span {
    display: inline-block;
    width: 100px;
    height: 3px;
    background: color.$gray_300;
    margin: 0 auto;
    position: relative;
    vertical-align: middle;
    &::before {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: color.$brown_500;
      position: absolute;
      left: -20px;
      top: calc(50% - 10px);
    }
    &::after {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: color.$gray_300;
      position: absolute;
      right: -20px;
      top: calc(50% - 10px);
    }
  }
  @include breakpoint.desktop {
    span {
      width: 140px;
      &::before {
        width: 40px;
        height: 40px;
        left: -40px;
        top: calc(50% - 20px);
      }
      &::after {
        width: 40px;
        height: 40px;
        right: -40px;
        top: calc(50% - 20px);
      }
    }
  }
}
</style>
