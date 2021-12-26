<template>
  <section class="wrapper">
    <div class="adoption_apply">
      <div class="progress_bar">
        <span></span>
      </div>
      <h3>步驟二 認養申請</h3>
      <label class="accept_container">
        <input type="checkbox" v-model="ifAgree" />
        <span class="fake_button"></span>
        <span>本人願遵守以下規定，並提出申請</span>
      </label>
      <ol>
        <li>
          依法辦理寵物登記、晶片植入等事項。並同意為認養隻動物絕育，避免不必要之繁殖。
        </li>
        <li>
          無論何時都以人道方式對待認養動物，提供牠適當之食物、飲水及空間，並絕不任意棄養認養的動物。
        </li>
        <li>
          若認養動物年齡未滿8週或不宜施打疫苗者，必須完成狂犬病預防注射，並將注射證明影本郵寄或傳真回本所備查。
        </li>
        <li>
          定期幫牠進行狂犬病預防注射、驅蟲及健康檢查，受傷或罹病時，必請獸醫師給予醫療。
        </li>
        <li>妥善照顧牠，防止其無故侵害他人之生命，身體、自由、財產或安寧。</li>
        <li>
          不再隨便放縱牠於戶外，牠出入公共場所或公眾出入之場所時，必由7歲以上之人伴同，並採取適當之防衛措施，如繫犬鍊、帶口罩等，始得攜出戶外。
        </li>
        <li>
          當牠轉讓、死亡或住所異動時，於1個月內依規定辦理變更登記；遺失時，於5天內依規定申報。
        </li>
        <li>本人願接受貴所之追蹤訪視及飼養輔導。</li>
        <li>
          如有違反上述認養規定，貴所有權收回該動物，並終止認養人對該認養動物之權利。
        </li>
        <li>
          如因任何原因無法續養，本人願為牠找到新的認養家庭，或送至動物保護團體所屬收容所，或再送至貴所辦理不擬續養手續並依收容所規定繳交規費。
        </li>
        <li>
          依據「動物保護法」第33-1條之規定:完成不擬續養手續後將不得飼養寵物及認養收容動物。
        </li>
        <li>
          本認養申請資料送出後，不代表已完成所選動物之認養，亦不代表您已具認養本動物的第一優先權，認養以收容所現場完成程序為準。
        </li>
      </ol>
      <ValidationForm :schema="formSchema" @closeFormSignal="closeFormSignal" />
    </div>
  </section>
</template>

<script>
import * as Yup from "yup";
import ValidationForm from "@/components/validationForm.vue";

export default {
  components: { ValidationForm },
  data() {
    const formSchema = {
      fields: [
        {
          label: "飼養地點",
          name: "place",
          as: "input",
          type: "text",
          maxlength: "10",
          rules: Yup.string().required("required"),
        },
        {
          label: "空間大小",
          name: "spaceSize",
          as: "input",
          type: "number",
          maxlength: "10",
          rules: Yup.number().required("required"),
        },
        {
          label: "現有動物隻數",
          name: "petsCount",
          as: "input",
          type: "number",
          maxlength: "4",
          rules: Yup.number().positive().integer().required("required"),
        },
        {
          label: "認養人名稱",
          name: "applierName",
          as: "input",
          type: "text",
          maxlength: "10",
          rules: Yup.string()
            .matches(/(hi|bye)/, { message: "請勿輸入標點符號" })
            .typeError("age must be a number")
            .required("required"),
        },
        {
          label: "認養人出生日期",
          name: "birth",
          as: "input",
          type: "date",
          rules: Yup.date().required("required"),
        },
        {
          label: "認養人聯絡電話",
          name: "contact",
          as: "input",
          type: "tel",
          pattern: "[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{2}",
          minlength: "9",
          maxlength: "15",
          rules: Yup.number().required("required"),
        },
        {
          label: "電子信箱",
          name: "email",
          as: "input",
          type: "email",
          maxlength: "20",
          rules: Yup.string().email().required("required"),
        },
        {
          label: "通訊地址",
          name: "address",
          as: "input",
          type: "text",
          maxlength: "30",
          rules: Yup.string().required("required"),
        },
      ],
    };
    return {
      formSchema,
      ifAgree: false,
    };
  },
  methods: {
    closeFormSignal(status) {
      if (this.ifAgree || status === "cancel") {
        this.$emit("closeFormSignal", true);
      } else {
        window.alert("請勾選同意書");
      }
    },
    receiveApplyData(formAnswer) {
      console.log(formAnswer);
      this.closeForm();
    },
  },
};
</script>

<style lang="scss" scoped>
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
  padding: 20px 0px 20px;
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

  @include breakpoint.tablet {
    height: 100%;
  }

  @include breakpoint.desktop {
    padding: 20px 0 40px;
    height: fit-content;
  }

  // 統一表單樣式
  .adoption_apply {
    display: flex;
    flex-direction: column;
    padding: 20px 10px 20px;
    width: 90%;
    height: fit-content;
    background-color: #fbf8f5;

    @include breakpoint.tablet {
      padding: 20px 20px 20px;
    }

    @include breakpoint.desktop {
      padding: 20px 20px 40px;
    }
    .accept_container {
      text-align: center;
      margin-bottom: 16px;
      input[type="checkbox"] {
        display: none;
        // 改勾選單

        &:checked + span {
          // background: #c4c4c4;
          background: color.$brown_300;
          transition: all 0.2s ease-in-out;
        }
      }
      .fake_button {
        display: inline-block;
        width: 25px;
        height: 25px;
        background: color.$gray_100;
        border-radius: 2px;
      }

      span {
        vertical-align: bottom;
        margin-left: 5px;
        @extend %form_content;
      }
    }

    ol {
      @extend %form_content;
      margin-bottom: 24px;
    }

    li {
      display: flex;
      text-align: start;
      counter-increment: accept;

      & + li {
        margin-top: 12px;

        @include breakpoint.desktop {
          margin-top: 16px;
        }
      }

      &::before {
        content: counter(accept) ". ";
        list-style-type: none;
        align-self: flex-start;
        flex-shrink: 0;
        padding-top: 5px;
        width: 26px;
        font-size: 16px;
        font-weight: 600;
      }
    }

    h3 {
      @extend %title_h3;
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
      background: color.$gray_300;
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
      background: color.$brown_500;
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
