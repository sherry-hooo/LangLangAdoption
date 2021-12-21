<template>
  <main>
    <div class="description">
      <div class="des_container">
        <h2>浪浪資料</h2>
        <div class="case">
          <div class="case_img_box">
            <img src="images/cat2.svg" alt="" />
          </div>
          <div class="case_des_box"></div>
        </div>
      </div>
    </div>
    <button class="sample" @click="showAdoptionNotice = true">
      我有意願認養
    </button>
    <AdoptionNotice
      v-if="showAdoptionNotice"
      @goNextPage="goNextPage"
    ></AdoptionNotice>
    <AdoptionApply v-if="AdoptionApply"></AdoptionApply>
  </main>
</template>

<script>
import AdoptionApply from "@/components/AdoptionApply.vue";
import AdoptionNotice from "@/components/AdoptionNotice.vue";

export default {
  components: { AdoptionApply, AdoptionNotice },
  data() {
    return {
      showAdoptionNotice: false,
      AdoptionApply: false,
    };
  },
  methods: {
    goNextPage(data) {
      this.showAdoptionNotice = false;
      this.AdoptionApply = data;
    },
  },
};
</script>
<style lang="scss" scoped>
.sample {
  padding: 10px;
  cursor: pointer;
}
@use "../utilities/color";
@use "../utilities/breakpoint";

.description {
  padding: 103px 100px 100px 100px;
}
.des_container {
  margin: 0 auto;
  & h2 {
    width: fit-content;
  }
}
</style>
