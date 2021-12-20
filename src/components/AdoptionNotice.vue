<template>
  <main>
    Adoption Notice
    <button @click="goNextPage">下一頁</button>
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goNextPage() {
      this.$emit("goNextPage", true);
    },
  },
};
</script>
<style lang="scss" scoped></style>
