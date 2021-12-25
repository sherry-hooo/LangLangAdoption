<template>
  <section class="wrapper">
    <form>
      <div class="col">
        <label>
          <p class="form_subtitle">姓名</p>
          <input
            class="form_text"
            type="text"
            v-model="userData.name"
            maxlength="10"
          />
        </label>
        <label>
          <p class="form_subtitle">聯絡電話</p>
          <input class="form_text" type="text" v-model="userData.phone" />
        </label>
      </div>
      <div class="col">
        <label>
          <p class="form_subtitle">電子信箱</p>
          <input class="form_text" type="text" v-model="userData.email" />
        </label>
        <label>
          <p class="form_subtitle">通訊地址</p>
          <input class="form_text" type="text" v-model="userData.adress" />
        </label>
      </div>
      <div class="col">
        <label class="full_width">
          <p class="form_subtitle">為什麼您想要來當志工呢？</p>
          <textarea
            class="form_textArea"
            cols="30"
            rows="10"
            v-model="userData.joinReason"
          ></textarea>
        </label>
      </div>
      <p class="notice_message">
        單位收到資料後，三日內會有專人與您聯絡，感謝您的參與。
      </p>
      <div class="button_groups">
        <button class="cancel_btn" @click="formAction('cancel')">取消</button>
        <button class="submit_btn" @click="formAction('submit')">送出</button>
      </div>
    </form>
    <Form @submit="onSubmit">
      <h3 class="form_title">志工報名</h3>
      <div class="col">
        <label
          v-for="{
            as,
            name,
            label,
            children,
            type,
            rules,
            ...attrs
          } in formSchema.fields1"
          :key="name"
          :class="name"
        >
          <p class="form_subtitle">
            {{ label }} <ErrorMessage :name="name" class="validity" />
          </p>
          <Field
            :as="as"
            :id="name"
            :name="name"
            v-bind="attrs"
            :type="type"
            :rules="rules"
            class="form_text"
          >
            <template v-if="children && children.length">
              <component
                v-for="({ tag, text, ...childAttrs }, idx) in children"
                :key="idx"
                :is="tag"
                v-bind="childAttrs"
              >
                {{ text }}
              </component>
            </template>
          </Field>
        </label>
      </div>
      <div class="col">
        <label
          v-for="{
            as,
            name,
            label,
            children,
            type,
            rules,
            ...attrs
          } in formSchema.fields2"
          :key="name"
          :class="name"
        >
          <p class="form_subtitle">
            {{ label }} <ErrorMessage :name="name" class="validity" />
          </p>
          <Field
            :as="as"
            :id="name"
            :name="name"
            v-bind="attrs"
            :type="type"
            :rules="rules"
            class="form_text"
          >
            <template v-if="children && children.length">
              <component
                v-for="({ tag, text, ...childAttrs }, idx) in children"
                :key="idx"
                :is="tag"
                v-bind="childAttrs"
              >
                {{ text }}
              </component>
            </template>
          </Field>
        </label>
      </div>
      <div class="col">
        <label
          v-for="{
            as,
            name,
            label,
            children,
            type,
            rules,
            ...attrs
          } in formSchema.fields3"
          :key="name"
          :class="name"
        >
          <p class="form_subtitle">
            {{ label }} <ErrorMessage :name="name" class="validity" />
          </p>
          <Field
            :as="as"
            :id="name"
            :name="name"
            v-bind="attrs"
            :type="type"
            :rules="rules"
            class="form_text"
          >
            <template v-if="children && children.length">
              <component
                v-for="({ tag, text, ...childAttrs }, idx) in children"
                :key="idx"
                :is="tag"
                v-bind="childAttrs"
              >
                {{ text }}
              </component>
            </template>
          </Field>
        </label>
      </div>
      <p class="notice_message">
        單位收到資料後，三日內會有專人與您聯絡，感謝您的參與。
      </p>
      <div class="button_groups">
        <button class="cancel_btn" @click="formAction('cancel')">取消</button>
        <button class="submit_btn" @click="formAction('submit')">送出</button>
      </div>
    </Form>
  </section>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";

export default {
  components: { Form, Field, ErrorMessage },
  data() {
    const formSchema = {
      fields1: [
        {
          label: "姓名",
          name: "volunteerName",
          as: "input",
          type: "text",
          maxlength: "10",
          rules: Yup.string().required("required"),
        },
        {
          label: "聯絡電話",
          name: "contact",
          as: "input",
          type: "tel",
          pattern: "[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{2}",
          minlength: "9",
          maxlength: "15",
          rules: Yup.number().required("required"),
        },
      ],
      fields2: [
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
      fields3: [
        {
          label: "為什麼您想要來當志工呢？",
          name: "reason",
          as: "textarea",
          type: "text",
          cols: "30",
          rows: "10",
          rules: Yup.string().required("required"),
        },
      ],
    };
    return {
      formSchema,
      userData: {
        name: "",
        phone: "",
        email: "",
        adress: "",
        joinReason: "",
      },
    };
  },
  methods: {
    formAction(status) {
      if (status === "submit") {
        this.$emit("applyFormAction", status);
        this.getUserData();
      }
      this.$emit("applyFormAction", status);
    },
    getUserData() {
      console.log(this.userData);
    },
    onSubmit(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="scss" scoped>
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
  flex: 0 1 100%;
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

%form_wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding: 20px 0 20px;
  background: rgba(190, 188, 188, 0.6);
  backdrop-filter: blur(1px);

  @include breakpoint.desktop {
    padding: 20px 0 40px;
  }
}

@mixin input_style {
  display: block;
  padding-left: 10px;
  margin: 5px 0 10px;
  width: 100%;
  height: 42px;
  border: 2px solid #dec39e;
  border-radius: 5px;
  font-size: 16px;

  &::placeholder {
    padding: 5px;
    font-size: 16px;
  }

  &:focus {
    box-shadow: 2px 2px color.$brown_500;
  }
}

.wrapper {
  flex-direction: column;
  @extend %form_wrapper;
}

form {
  width: 90%;
  height: fit-content;
  padding: 20px 10px 20px;
  background: color.$brown_100;
  color: color.$gray_700;
  .form_title {
    @extend %title_h3;
  }
  @include breakpoint.tablet {
    padding: 20px 20px 20px;
  }
  @include breakpoint.desktop {
    padding: 40px 40px 40px;
  }
  .notice_message {
    margin: 16px 0 30px;
  }
  .button_groups {
    button {
      @extend %button;
      & + button {
        margin-left: 20px;
      }
    }
    .cancel_btn {
      background: color.$gray_300;
    }
  }
}

.col {
  display: flex;
  flex-direction: column;
  + .col {
    margin-top: 16px;
  }
  @include breakpoint.tablet {
    flex-direction: row;
    justify-content: space-between;
  }
  .full_width {
    @include breakpoint.tablet {
      width: 100%;
    }
  }
  label {
    width: 100%;
    & + label {
      margin-top: 16px;
    }
    .form_subtitle {
      @extend %form_content;
      text-align: left;
    }
    .form_text {
      @include input_style;
    }

    .form_textArea {
      resize: none;
      width: 100%;
      margin: 5px 0 10px;
      padding: 10px;
      border: 2px solid color.$brown_300;
      border-radius: 5px;
      font-size: 16px;
      &:focus {
        box-shadow: 2px 2px color.$brown_500;
      }
    }

    @include breakpoint.tablet {
      width: 50%;
      flex-direction: row;
      justify-content: space-between;
      & + label {
        margin: 0 0 0 16px;
      }
    }

    @include breakpoint.desktop {
      & + label {
        margin: 0 0 0 30px;
      }
    }
  }
}

////////
// form {
//   display: flex;
//   flex-direction: column;
//   width: 90%;
//   height: fit-content;
//   padding: 20px 10px 20px;
//   background: color.$brown_100;
//   color: color.$gray_700;

//   @include breakpoint.tablet {
//     flex-direction: row;
//     flex-wrap: wrap;
//     justify-content: space-between;
//   }

//   .form_title {
//     @extend %title_h3;
//   }
//   @include breakpoint.tablet {
//     padding: 20px 20px 20px;
//   }
//   @include breakpoint.desktop {
//     padding: 40px 40px 40px;
//   }
//   .notice_message {
//     flex: 0 1 100%;
//     margin: 16px 0 30px;
//   }
//   .button_groups {
//     flex: 0 1 100%;
//     button {
//       @extend %button;
//       & + button {
//         margin-left: 20px;
//       }
//     }
//     .cancel_btn {
//       background: color.$gray_300;
//     }
//   }
// }
// label {
//   width: 100%;
//   display: flex;
//   flex-direction: column;

//   @include breakpoint.tablet {
//     justify-content: space-between;
//     & + label {
//       margin: 0 0 0 16px;
//     }
//   }
//   @include breakpoint.desktop {
//     & + label {
//       margin: 0 0 0 30px;
//     }
//   }

//   & + label {
//     margin-top: 16px;
//   }

//   .form_subtitle {
//     @extend %form_content;
//     text-align: left;
//   }
//   .form_text {
//     @include input_style;
//   }

//   textArea {
//     resize: none;
//     width: 100%;
//     margin: 5px 0 10px;
//     padding: 10px;
//     border: 2px solid color.$brown_300;
//     border-radius: 5px;
//     font-size: 16px;
//     &:focus {
//       box-shadow: 2px 2px color.$brown_500;
//     }
//   }
// }

// .volunteerName,
// .contact,
// .email,
// .address {
//   width: 100%;
//   @include breakpoint.tablet {
//     width: 45%;
//   }
// }
</style>
