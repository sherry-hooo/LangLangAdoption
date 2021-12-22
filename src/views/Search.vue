<template>
  <div>
    <Card v-for="petData in petData" :key="petData" :petData="petData"></Card>
  </div>
  <Pagination />
</template>

<script>
import Card from "@/components/Card.vue";
import Pagination from "@/components/Pagination.vue";
import getApi from "@/service/getApi.js";

export default {
  components: {
    Card,
    Pagination,
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

<style lang="scss" scoped></style>
