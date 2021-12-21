<template>
  <main>
    <div class="wrapper">
      <h3>追蹤浪浪</h3>
      <section>
        <Card v-for="card in 10" :key="card"></Card>
      </section>
    </div>
  </main>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
main {
  background: color.$brown_100;
  min-height: calc(100vh - 60px);
  margin-top: 60px;

  @include breakpoint.tablet {
    min-height: calc(100vh - 103px);
    margin-top: 103px;
  }
  .wrapper {
    padding: 5px 100px;
    h3 {
      font-size: 30px;
      color: color.$gray_700;
      text-align: left;
      margin-bottom: 60px;
      @include breakpoint.desktop {
        font-size: 50px;
      }
    }
  }
}
section {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @include breakpoint.tablet {
    grid-template-columns: repeat(2, 1fr);
  }
  @include breakpoint.bgScreen {
    grid-template-columns: repeat(3, 1fr);
  }
  a {
    margin-bottom: 16px;
    @include breakpoint.desktop {
      margin-bottom: 24px;
    }
  }
}
</style>
