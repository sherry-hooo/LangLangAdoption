<template>
  <main>
    <div class="wrapper">
      <h3>追蹤浪浪</h3>
      <section>
        <Card
          v-for="petData in TrackingList"
          :key="petData"
          :petData="petData"
        ></Card>
      </section>
      <div class="pagination"><Pagination /></div>
    </div>
  </main>
</template>

<script>
import Card from "@/components/Card.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  name: "Track",
  components: {
    Card,
    Pagination,
  },
  data() {
    return {
      TrackingList: [],
    };
  },
  methods: {
    getTrackingList() {
      this.TrackingList = JSON.parse(localStorage.getItem("trackList"));
      console.log(JSON.parse(localStorage.getItem("trackList")));
    },
  },
  created() {
    this.getTrackingList();
  },
};
</script>
<style lang="scss" scoped>
main {
  background: color.$brown_100;
  min-height: calc(100vh - 60px);
  margin-top: 60px;
  padding: 5px 10px;

  @include breakpoint.tablet {
    min-height: calc(100vh - 103px);
    margin-top: 103px;
    padding: 10px 100px;
  }

  h3 {
    font-size: 30px;
    color: color.$gray_700;
    text-align: middle;
    margin-bottom: 16px;
    @include breakpoint.desktop {
      font-size: 50px;
      text-align: left;
      margin-bottom: 60px;
    }
  }
}
section {
  min-height: 500px;
  height: fit-content;
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
