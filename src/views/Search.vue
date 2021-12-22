<template>
  <main>
    <h3>尋找浪浪</h3>
    <Dropdown @animalKind="receiveAnimalKind"></Dropdown>
    <section>
      <Card v-for="petData in petData" :key="petData" :petData="petData"></Card>
    </section>
    <Pagination
      @currentPage="receiveCurrentPage"
      :totalPage="totalPage"
    ></Pagination>
  </main>
</template>

<script>
import Card from "@/components/Card.vue";
import Pagination from "@/components/Pagination.vue";
import Dropdown from "@/components/Dropdown.vue";
import getApi from "@/service/getApi.js";

export default {
  name: "Search",
  components: {
    Card,
    Pagination,
    Dropdown,
  },
  data() {
    return {
      petsDataInArray: [],
      animalKind: "",
      currentPage: 1,
      cardAmount: 9,
    };
  },
  methods: {
    getAPI() {
      getApi
        .getAnimalData(this.animalKind)
        .then((res) => (this.petsDataInArray = res.data.Data));
    },
    receiveAnimalKind(data) {
      console.log(data);
      this.animalKind = data;
      this.getAPI(this.animalKind);
    },
    receiveCurrentPage(page) {
      console.log(page);
      this.currentPage = page;
    },
  },
  computed: {
    petData() {
      console.log(this.startIndex, this.endIndex);
      return this.petsDataInArray.slice(this.startIndex, this.endIndex);
    },
    startIndex() {
      return (this.currentPage - 1) * this.cardAmount;
    },
    endIndex() {
      return this.currentPage * this.cardAmount;
    },
    totalPage() {
      return parseInt(this.petsDataInArray.length / this.cardAmount);
    },
  },
  // created() {
  //   this.getAPI();
  // },
};
</script>

<style lang="scss" scoped>
main {
  background: color.$brown_100;
  min-height: calc(100vh - 60px);
  height: fit-content;
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
  // 暫時設定高度 500px
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
