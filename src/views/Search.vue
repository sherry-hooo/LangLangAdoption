<template>
  <Dropdown />
  <section>
    <Card v-for="petData in petData" :key="petData" :petData="petData"></Card>
  </section>
  <Pagination />
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
    };
  },
  methods: {
    getAPI() {
      getApi
        .getAnimalData("貓")
        .then((res) => (this.petsDataInArray = res.data.Data));
    },
  },
  computed: {
    petData() {
      return this.petsDataInArray.slice(0, 10);
    },
  },
  created() {
    this.getAPI();
  },
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
