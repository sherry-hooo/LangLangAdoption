<template>
  <main>
    <button class="sample" @click="showAdoptionNotice = true">
      我有意願認養
    </button>
    <AdoptionNotice
      v-if="showAdoptionNotice"
      @goNextPage="goNextPage"
      @noticeFormAnswer="receiveNoticeFormAnswer"
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
      noticeForm: {},
    };
  },
  methods: {
    goNextPage(data) {
      this.showAdoptionNotice = false;
      this.AdoptionApply = data;
    },
    receiveNoticeFormAnswer(answer) {
      console.log(answer);
      this.noticeForm = answer;
    },
  },
};
</script>
<style lang="scss" scoped>
.sample {
  padding: 10px;
  cursor: pointer;
}
</style>
