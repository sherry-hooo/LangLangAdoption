<template>
  <div class="wrapper">
    <div class="adoption_notice">
      <div class="progress_bar"><span></span></div>
      <h4 class="notice_header">步驟一 認養須知</h4>
      <ul class="notice_list">
        <li>
          <p>
            1.
            您是否看過犬貓之行為健康評估表?您是否與管理人員或志工討論過該犬貓之狀況。
          </p>
          <label @click="q1 = true"
            ><input type="radio" name="q1" /><span />是</label
          >
          <label @click="q1 = false"
            ><input type="radio" name="q1" checked /><span />否</label
          >
        </li>
        <li>
          <p>
            2. 您是否知道犬貓的健康有許多不確定的風險?
            您是否了解當牠生病時立即就醫治療是飼主的責任?
          </p>
          <label @click="q2 = true"
            ><input type="radio" name="q2" /><span />是</label
          >
          <label @click="q2 = false"
            ><input type="radio" name="q2" checked /><span />否</label
          >
        </li>
        <li>
          <p>3. 您是否了解: 給犬貓良好的教育，是飼主應該努力學習的責任?</p>
          <label @click="q3 = true"
            ><input type="radio" name="q3" /><span />是</label
          >
          <label @click="q3 = false"
            ><input type="radio" name="q3" checked /><span />否</label
          >
        </li>
        <li>
          <p>
            4. 您是否了解犬貓剛到新環境時，許多潛在的疾病會因 &colon;<br />
            1) 運輸過程吹風淋雨 2) 洗澡 3) 過度玩耍 4)
            更換食物等等讓降低抵抗力而爆發疾病
          </p>
          <label @click="q4 = true"
            ><input type="radio" name="q4" /><span />是</label
          >
          <label @click="q4 = false"
            ><input type="radio" name="q4" checked /><span />否</label
          >
        </li>
        <li>
          <p>
            5.
            您是否了解就外觀判斷犬貓健康是不夠的，必須到動物醫院為牠做基本的檢查
          </p>
          <label @click="q5 = true"
            ><input type="radio" name="q5" /><span />是</label
          >
          <label @click="q5 = false"
            ><input type="radio" name="q5" checked /><span />否</label
          >
        </li>
        <li>
          <p>6. 犬貓將近有15年的壽命，您是否了解無論人事物的演變</p>
          <label @click="q6 = true"
            ><input type="radio" name="q6" /><span />是</label
          >
          <label @click="q6 = false"
            ><input type="radio" name="q6" checked /><span />否</label
          >
        </li>
        <li>
          <p>7. 您是否了解飼養動物需要適當的居家條件?</p>
          <label @click="q7 = true"
            ><input type="radio" name="q7" /><span />是</label
          >
          <label @click="q7 = false"
            ><input type="radio" name="q7" checked /><span />否</label
          >
        </li>
        <li>
          <p>
            8.
            您是否同意在未取得共識之前絕不貿然認養，以免造成日後極大的心理負擔
          </p>
          <label @click="q8 = true"
            ><input type="radio" name="q8" /><span />是</label
          >
          <label @click="q8 = false"
            ><input type="radio" name="q8" checked /><span />否</label
          >
        </li>
        <li>
          <p>
            9. 您是否了解若縱放犬貓在外，任何人都可以加以協送保護送交收容所。
          </p>
          <label @click="q9 = true"
            ><input type="radio" name="q9" /><span />是</label
          >
          <label @click="q9 = false"
            ><input type="radio" name="q9" checked /><span />否</label
          >
        </li>
        <li>
          <p>
            10.
            如因任何原因無法續養，本人願為牠找到新的認養家庭，或送至動物保護團體所屬收容所，或再送至貴所辦理不擬續養手續並依收容所規定繳交規費
          </p>
          <label @click="q10 = true"
            ><input type="radio" name="q10" /><span />是</label
          >
          <label @click="q10 = false"
            ><input type="radio" name="q10" checked /><span />否</label
          >
        </li>
      </ul>
      <div class="notice_buttons">
        <button class="cancel_btn" type="cancel" @click="cancelEdit">
          取消
        </button>
        <button class="submit_btn" @click="goNextPage">下一頁</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      q1: false,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
      q6: false,
      q7: false,
      q8: false,
      q9: false,
      q10: false,
    };
  },
  methods: {
    goNextPage() {
      this.$emit("goNextPage", true);
      this.submitNoticeForm();
    },
    submitNoticeForm() {
      let answer = {
        q1: this.q1,
        q2: this.q2,
        q3: this.q3,
        q4: this.q4,
        q5: this.q5,
        q6: this.q6,
        q7: this.q7,
        q8: this.q8,
        q9: this.q9,
        q10: this.q10,
      };
      this.$emit("submitNoticeForm", answer);
    },
    cancelEdit() {
      this.$emit("cancelEdit", "AdoptionNotice");
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding-top: 60px;
  background: #bebabaab;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  @include breakpoint.desktop {
    padding-top: 114px;
  }
}
.adoption_notice {
  color: color.$gray_700;
  background: color.$brown_100;
  width: 90%;
  height: fit-content;
  padding: 20px 10px 60px;
  border-radius: 2px;

  @include breakpoint.desktop {
    padding: 20px 20px 60px;
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

  h4 {
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 16px;
    @include breakpoint.desktop {
      font-size: 50px;
      margin-bottom: 30px;
    }
  }

  .notice_list {
    margin-bottom: 30px;
    li {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      font-weight: 900;
      + li {
        margin-top: 16px;
      }
      @include breakpoint.desktop {
        margin-top: 27px;
      }
      p {
        flex: 1;
        text-align: left;
        margin-right: 16px;
      }
      label {
        flex: 0 1 8%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        & + label {
          margin-left: 5px;
          @include breakpoint.tablet {
            margin-left: 0;
          }
        }
        input {
          display: none;
        }
        input:checked + span {
          background: color.$brown_300;
          transition: all 0.2s ease-in-out;
        }
        span {
          display: inline-block;
          width: 20px;
          height: 20px;
          border-radius: 2px;
          background: color.$gray_300;
          margin-right: 5px;
        }
        @include breakpoint.desktop {
          span {
            width: 30px;
            height: 30px;
            margin-right: 0;
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
}
</style>
