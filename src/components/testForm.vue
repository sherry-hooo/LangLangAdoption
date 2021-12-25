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

      <Test11 :schema="formSchema" />
    </div>
  </section>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as Yup from "yup";
import Test11 from "@/components/test11.vue";

export default {
  components: { Field, Form, ErrorMessage, Test11 },
  data() {
    const schema = Yup.object({
      email: Yup.string().required().email(),
      password: Yup.string().required().min(8),
    });
    const formSchema = {
      fields: [
        {
          label: "Your Name",
          name: "name",
          as: "input",
          rules: Yup.string().required(),
        },
        {
          label: "Your Email",
          name: "email",
          as: "input",
          rules: Yup.string().email().required(),
        },
        {
          label: "Your Password",
          name: "password",
          as: "input",
          type: "password",
          rules: Yup.string().min(6).required(),
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
form {
  display: flex;
  flex-direction: column;
  input {
    height: 30px;
    border: 1px solid black;
    margin: 5px;
  }
}
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
