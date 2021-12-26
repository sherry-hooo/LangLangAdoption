<template>
  <Form @submit="onSubmit">
    <h4>申請資料</h4>
    <label
      v-for="{
        as,
        name,
        label,
        children,
        type,
        rules,
        ...attrs
      } in schema.fields"
      :key="name"
      :class="name"
    >
      <!-- <p>{{ children }}</p> -->
      <p class="field_title">
        {{ label }} <ErrorMessage :name="name" class="validity" />
      </p>
      <Field
        :as="as"
        :id="name"
        :name="name"
        v-bind="attrs"
        :type="type"
        :rules="rules"
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
    <div class="notice_buttons">
      <input
        class="cancel_btn"
        type="reset"
        value="取消"
        @click="sentCloseFormSignal('cancel')"
      />
      <input class="submit_btn" type="submit" value="申請" />
    </div>
  </Form>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { db } from "@/firebase/firebase.config.js";
import { collection, addDoc } from "firebase/firestore";

export default {
  name: "Test11",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    schema: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onSubmit(data) {
      this.storeFirebase(data);
      this.sentCloseFormSignal();
    },
    sentCloseFormSignal(status = "continue") {
      this.$emit("closeFormSignal", status);
    },
    async storeFirebase(applyFormData) {
      try {
        const docRef = await addDoc(collection(db, "adoptionApply"), {
          applyFormData,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
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

form {
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
    .field_title {
      span {
        margin-left: 10px;
        color: #8b0000;
      }
    }

    input {
      display: block;
      padding-left: 10px;
      margin: 5px 0 10px;
      width: 100%;
      height: 42px;
      border: 2px solid #dec39e;
      border-radius: 5px;
      font-size: 16px;
      // &:invalid + .validity::before {
      //   position: absolute;
      //   content: "✖";
      //   padding-left: 5px;
      //   color: #8b0000;
      // }
    }

    input::placeholder {
      padding: 5px;
      font-size: 16px;
    }

    input:focus {
      box-shadow: 2px 2px color.$brown_500;
    }
  }
  .petsCount {
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
.notice_buttons {
  flex: 0 1 100%;
  margin-top: 24px;
  input {
    @extend %button;

    + input {
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
</style>
