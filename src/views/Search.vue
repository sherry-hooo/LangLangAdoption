<template>
  <Dropdown @animalKind="receiveAnimalKind"></Dropdown>
  <section>
    <Card v-for="petData in petData" :key="petData" :petData="petData"></Card>
  </section>
  <Pagination @currentPage="receiveCurrentPage"></Pagination>
</template>

<script>
import Card from "@/components/Card.vue";
import Pagination from "@/components/Pagination.vue";
import Dropdown from "@/components/Dropdown.vue";
import getApi from "@/service/getApi.js";

export default {
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
      cardAmount: 10,
    };
  },
  methods: {
    getAPI() {
      getApi
        .getAnimalData("貓")
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
  },
  // created() {
  //   this.getAPI();
  // },
};
</script>

<style lang="scss" scoped>
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
