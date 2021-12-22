<template>
  <section class="wrapper">
    <form>
      <h3 class="form_title">志工報名</h3>
      <div class="col">
        <label>
          <p class="form_subtitle">姓名</p>
          <input class="form_text" type="text" />
        </label>
        <label>
          <p class="form_subtitle">聯絡電話</p>
          <input class="form_text" type="text" />
        </label>
      </div>
      <div class="col">
        <label>
          <p class="form_subtitle">電子信箱</p>
          <input class="form_text" type="text" />
        </label>
        <label>
          <p class="form_subtitle">通訊地址</p>
          <input class="form_text" type="text" />
        </label>
      </div>
      <div class="col">
        <label class="full_width">
          <p class="form_subtitle">為什麼您想要來當志工呢？</p>
          <textarea class="form_textArea" cols="30" rows="10"></textarea>
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
  </section>
</template>

<script>
export default {
  methods: {
    formAction(status) {
      this.$emit("applyFormAction", status);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding: 5% 0;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(190, 188, 188, 0.6);
  backdrop-filter: blur(1px);
  display: flex;
  justify-content: center;
  align-items: center;
  @include breakpoint.desktop {
    padding: 110px 0;
  }
}

form {
  width: 90%;
  height: fit-content;
  padding: 30px 10px;
  background: color.$brown_100;
  color: color.$gray_700;
  .form_title {
    font-size: 30px;
    margin-bottom: 30px;
  }
  @include breakpoint.desktop {
    padding: 60px 16px;
    .form_title {
      font-size: 50px;
    }
  }
  .notice_message {
    margin: 36px 0 60px;
  }
  .button_groups {
    button {
      padding: 10px 30px;
      border-radius: 10px;
      color: white;
      font-size: 25px;
      font-weight: 900;
      & + button {
        margin-left: 36px;
      }

      @include breakpoint.desktop {
        padding: 26px 90px;
      }
    }
    .cancel_btn {
      background: color.$gray_300;
    }
    .submit_btn {
      background: color.$brown_300;
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
      font-weight: 900;
      font-size: 16px;
      text-align: left;
    }
    .form_text {
      display: block;
      width: 100%;
      height: 32px;
      border: 1px solid color.$brown_300;
    }
    .form_textArea {
      resize: none;
      width: 100%;
      margin-top: 16px;
      border: 1px solid color.$brown_300;
    }
    @include breakpoint.tablet {
      width: 50%;
      flex-direction: row;
      justify-content: space-between;
      & + label {
        margin: 0 0 0 16px;
      }
      .form_text {
        height: 52px;
      }
      .form_subtitle {
        font-size: 20px;
      }
    }
  }
}
</style>
