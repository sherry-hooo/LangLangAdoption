<template>
  <main>
    <h2>追蹤浪浪</h2>
    <section>
      <Card
        v-for="petData in trackingList"
        :key="petData"
        :petData="petData"
      ></Card>
    </section>
    <Pagination :totalPage="totalPage" :pageNumber="pageNumber"></Pagination>
  </main>
</template>

<script>
import Card from "@/components/Card.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  props: ["petData", "petKind"],
  name: "Track",
  components: {
    Card,
    Pagination,
  },
  data() {
    return {
      trackingList: JSON.parse(localStorage.getItem("trackList")) || [],
      pageNumber: 1,
    };
  },
  methods: {
    // async getTrackingList() {
    //   await this.trackingList = JSON.parse(localStorage.getItem("trackList"));
    //   this.totalPage = this.trackingList.length
    // },
  },
  computed: {
    totalPage() {
      return this.trackingList.length;
    },
  },
  created() {
    // this.getTrackingList();
  },
};
</script>
<style lang="scss" scoped>
%title_h2 {
  font-size: 24px;
  font-weight: 500;
  color: color.$gray_700;
  text-align: center;
  margin-bottom: 16px;

  @include breakpoint.tablet {
    text-align: left;
    font-size: 30px;
    margin-bottom: 50px;
  }
  @include breakpoint.desktop {
    font-size: 50px;
  }
}

main {
  display: flex;
  flex-direction: column;
  background: color.$brown_100;
  min-height: calc(100vh - 60px);
  height: fit-content;
  padding: 10px 10px 20px;

  @include breakpoint.tablet {
    min-height: calc(100vh - 103px);
    padding: 10px 50px 30px;
  }
  @include breakpoint.desktop {
    padding: 10px 100px 60px;
  }

  h2 {
    @extend %title_h2;
  }
}
section {
  min-height: 500px;
  height: fit-content;
  display: grid;
  margin-bottom: 16px;
  grid-template-columns: repeat(1, 1fr);
  @include breakpoint.tablet {
    margin-bottom: 20px;
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
