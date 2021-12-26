<template>
  <div class="wrapper">
    <div class="adoption_notice">
      <div class="progress_bar"><span></span></div>
      <h3 class="notice_header">步驟一 認養須知</h3>
      <ul class="notice_list">
        <li>
          <p>
            您是否看過犬貓之行為健康評估表?您是否與管理人員或志工討論過該犬貓之狀況。
          </p>
          <label
            ><input
              type="radio"
              name="q1"
              v-model="form.q1"
              :value="true"
            /><span />是</label
          >
          <label
            ><input
              type="radio"
              name="q1"
              v-model="form.q1"
              :value="false"
            /><span />否</label
          >
        </li>
        <li>
          <p>
            您是否知道犬貓的健康有許多不確定的風險?
            您是否了解當牠生病時立即就醫治療是飼主的責任?
          </p>
          <label>
            <input
              type="radio"
              name="q2"
              v-model="form.q2"
              :value="true"
            /><span />是</label
          >
          <label>
            <input
              type="radio"
              name="q2"
              v-model="form.q2"
              :value="false"
            /><span />否</label
          >
        </li>
        <li>
          <p>您是否了解: 給犬貓良好的教育，是飼主應該努力學習的責任?</p>
          <label>
            <input
              type="radio"
              name="q3"
              v-model="form.q3"
              :value="true"
            /><span />是</label
          >
          <label>
            <input
              type="radio"
              name="q3"
              v-model="form.q3"
              :value="false"
            /><span />否</label
          >
        </li>
        <li>
          <p>
            您是否了解犬貓剛到新環境時，許多潛在的疾病會因 &colon;<br />
            1) 運輸過程吹風淋雨 2) 洗澡 3) 過度玩耍 4)
            更換食物等等讓降低抵抗力而爆發疾病
          </p>
          <label
            ><input
              type="radio"
              name="q4"
              v-model="form.q4"
              :value="true"
            /><span />是</label
          >
          <label
            ><input
              type="radio"
              name="q4"
              v-model="form.q4"
              :value="false"
            /><span />否</label
          >
        </li>
        <li>
          <p>
            您是否了解就外觀判斷犬貓健康是不夠的，必須到動物醫院為牠做基本的檢查
          </p>
          <label
            ><input
              type="radio"
              name="q5"
              v-model="form.q5"
              :value="true"
            /><span />是</label
          >
          <label
            ><input
              type="radio"
              name="q5"
              v-model="form.q5"
              :value="false"
            /><span />否</label
          >
        </li>
        <li>
          <p>犬貓將近有15年的壽命，您是否了解無論人事物的演變</p>
          <label
            ><input
              type="radio"
              name="q6"
              v-model="form.q6"
              :value="true"
            /><span />是</label
          >
          <label
            ><input
              type="radio"
              name="q6"
              v-model="form.q6"
              :value="false"
            /><span />否</label
          >
        </li>
        <li>
          <p>您是否了解飼養動物需要適當的居家條件?</p>
          <label
            ><input
              type="radio"
              name="q7"
              v-model="form.q7"
              :value="true"
            /><span />是</label
          >
          <label
            ><input
              type="radio"
              name="q7"
              v-model="form.q7"
              :value="false"
            /><span />否</label
          >
        </li>
        <li>
          <p>
            您是否同意在未取得共識之前絕不貿然認養，以免造成日後極大的心理負擔
          </p>
          <label
            ><input
              type="radio"
              name="q8"
              v-model="form.q8"
              :value="true"
            /><span />是</label
          >
          <label
            ><input
              type="radio"
              name="q8"
              v-model="form.q8"
              :value="false"
            /><span />否</label
          >
        </li>
        <li>
          <p>您是否了解若縱放犬貓在外，任何人都可以加以協送保護送交收容所。</p>
          <label
            ><input
              type="radio"
              name="q9"
              v-model="form.q9"
              :value="true"
            /><span />是</label
          >
          <label
            ><input
              type="radio"
              name="q9"
              v-model="form.q9"
              :value="false"
            /><span />否</label
          >
        </li>
        <li>
          <p>
            如因任何原因無法續養，本人願為牠找到新的認養家庭，或送至動物保護團體所屬收容所，或再送至貴所辦理不擬續養手續並依收容所規定繳交規費
          </p>
          <label
            ><input
              type="radio"
              name="q10"
              v-model="form.q10"
              :value="true"
            /><span />是</label
          >
          <label
            ><input
              type="radio"
              name="q10"
              v-model="form.q10"
              :value="false"
            /><span />否</label
          >
        </li>
      </ul>
      <div class="notice_buttons">
        <button class="cancel_btn" type="cancel" @click="closeFormSignal">
          <!-- 中間加入一個全形空格，讓取消＆提交按鈕等寬 -->
          取&emsp;消
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
      form: {
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
      },
    };
  },
  methods: {
    goNextPage() {
      try {
        this.validateForm(this.form);
        this.$emit("goNextPage", true);
      } catch (error) {
        window.alert(error);
      }
    },
    validateForm(formAnswer) {
      for (const eachField in formAnswer) {
        if (!formAnswer[eachField]) {
          throw "請確認已閱讀認養須知並將每個選項勾選「是」";
        }
      }
    },
    closeFormSignal() {
      this.$emit("closeFormSignal", true);
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
// 通用button樣式，除了banner的滑動按鈕，其他都用此樣式
%button {
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  background: color.$brown_300;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    box-shadow: inset 2px -2px 4px color.$brown_500;
  }

  @include breakpoint.desktop {
    padding: 15px 30px;
    font-size: 22px;
  }
}

// 新增表單title共用樣式
%title_h3 {
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 500;
  color: color.$gray_700;
  @include breakpoint.tablet {
    font-size: 30px;
  }
  @include breakpoint.desktop {
    margin-bottom: 24px;
    font-size: 36px;
  }
}

%form_content {
  color: color.$gray_700;
  font-size: 16px;
  font-weight: 500;

  @include breakpoint.desktop {
    font-size: 18px;
  }
}

// 統一表單wrapper樣式
.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  overflow: scroll;
  padding: 20px 0 20px;
  background: #bebabaab;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;

  // @include breakpoint.tablet {
  //   height: 100%;
  // }

  @include breakpoint.desktop {
    padding: 20px 0 40px;
  }
}
// 統一表單樣式
.adoption_notice {
  color: color.$gray_700;
  background: color.$brown_100;
  width: 90%;
  height: fit-content;
  padding: 20px 10px 20px;
  border-radius: 2px;

  @include breakpoint.tablet {
    padding: 20px 20px 20px;
  }

  @include breakpoint.desktop {
    padding: 20px 20px 40px;
  }

  .progress_bar {
    height: 20px;
    line-height: 20px;
    margin-bottom: 16px;

    @include breakpoint.desktop {
      height: 40px;
      line-height: 40px;
      margin-bottom: 20px;
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

  //統一表單表頭
  h3 {
    @extend %title_h3;
  }

  .notice_list {
    margin-bottom: 30px;
    li {
      @extend %form_content;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      counter-increment: notice;

      &::before {
        content: counter(notice) ". ";
        list-style-type: none;
        align-self: flex-start;
        flex-shrink: 0;
        padding-top: 5px;
        width: 24px;
        font-size: 16px;
        font-weight: 600;
      }

      + li {
        margin-top: 12px;
      }
      @include breakpoint.desktop {
        margin-top: 16px;
      }
      p {
        flex: 1;
        align-self: flex-start;
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
        input[type="radio"]:checked + span {
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
      @extend %button;
      background: color.$gray_100;
      &:hover {
        box-shadow: inset 2px -2px 4px color.$gray_300;
      }
    }
    .submit_btn {
      @extend %button;
      background: color.$brown_300;
      &:hover {
        // box-shadow: inset 2px -2px 4px color.$brown_500;
      }
    }
  }
}
</style>
