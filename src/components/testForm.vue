<template>
  <section class="wrapper">
    <div class="adoption_apply">
      <div class="progress_bar">
        <span></span>
      </div>
      <h4>測試表單</h4>
      <Form @submit="onsubmit">
        <Field
          name="email"
          type="email"
          placeholder="email"
          :rules="validateEmail"
        />
        <ErrorMessage name="email" />
        <Field name="name" type="text" placeholder="name" :rules="isRequired" />
        <ErrorMessage name="name" />
        <Field name="phone" type="text" placeholder="phone" />
        <ErrorMessage name="phone" />
        <button>Sign up</button>
      </Form>

      <ValidationForm :schema="formSchema" />
    </div>
  </section>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as Yup from "yup";
import ValidationForm from "@/components/validationForm.vue";

export default {
  components: { Field, Form, ErrorMessage, ValidationForm },
  data() {
    const schema = Yup.object({
      email: Yup.string().required().email(),
      password: Yup.string().required().min(8),
    });
    const formSchema = {
      fields: [
        {
          label: "飼養地點",
          name: "place",
          as: "input",
          type: "text",
          maxlength: "10",
          rules: Yup.string().required(),
        },
        {
          label: "空間大小",
          name: "spaceSize",
          as: "input",
          type: "number",
          maxlength: "10",
          rules: Yup.number().required(),
        },
        {
          label: "現有動物隻數",
          name: "petsCount",
          as: "input",
          type: "number",
          maxlength: "4",
          rules: Yup.number().positive().integer().required(),
        },
        {
          label: "認養人名稱",
          name: "applierName",
          as: "input",
          type: "text",
          maxlength: "10",
          rules: Yup.string().required(),
        },
        {
          label: "認養人出生日期",
          name: "birth",
          as: "input",
          type: "date",
          rules: Yup.date().required(),
        },
        {
          label: "認養人聯絡電話",
          name: "contact",
          as: "input",
          type: "tel",
          minlength: "9",
          maxlength: "15",
          rules: Yup.number().min(9).positive().integer().required(),
        },
        {
          label: "電子信箱",
          name: "email",
          as: "input",
          type: "email",
          maxlength: "20",
          rules: Yup.string().email().required(),
        },
        {
          label: "通訊地址",
          name: "address",
          as: "input",
          type: "text",
          maxlength: "30",
          rules: Yup.string().required(),
        },
      ],
    };
    return {
      schema,
      formSchema,
      place: "",
      space: "",
      petCount: null,
      adopterName: "",
      adoptorBirth: "",
      adoptorContact: "",
      adoptorEmail: "",
      adoptorAddress: "",
      values: "",
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
    // Validator function
    isRequired(value) {
      return value ? true : "This field is required";
    },
    onsubmit(data) {
      console.log(data);
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }
      // All is good
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
// 新增button共用樣式
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

    ::v-deep form {
      display: flex;
      flex-wrap: wrap;
      background-color: #fbf8f5;
      color: color.$gray_700;
      margin-bottom: 20px;
      padding: 0 16px;

      h4 {
        flex: 100%;
        font-size: 20px;
        margin-bottom: 18px;
        @include breakpoint.tablet {
          font-size: 24px;
        }
        @include breakpoint.desktop {
          font-size: 28px;
        }
      }
      .spaceSize,
      .birth,
      .email {
        @include breakpoint.tablet {
          margin-left: 20px;
        }
      }
      label {
        // flex: 1 1 100%;
        flex-grow: 1;
        text-align: start;
        justify-content: flex-start;

        @include breakpoint.tablet {
          flex: 1 1 45%;
        }

        input {
          display: block;
          padding-left: 10px;
          margin: 5px 0 10px;
          width: 100%;
          height: 42px;
          border: 2px solid #dec39e;
          border-radius: 5px;
        }

        input[type="text"] {
          font-size: 16px;
        }

        input::placeholder {
          padding: 5px;
          font-size: 16px;
        }

        input:focus {
          box-shadow: 2px 2px color.$brown_500;
        }
      }
      .pet_number {
        flex: 1 1 100%;
        input {
          @include breakpoint.tablet {
            width: 49%;
          }
        }
      }
      .adress {
        flex: 1 1 100%;
        input {
          @include breakpoint.tablet {
            width: 49%;
          }
        }
      }
    }
  }
}

::v-deep .notice_buttons {
  button {
    @extend %button;

    + button {
      margin-left: 20px;
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
