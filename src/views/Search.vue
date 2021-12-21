<template>
  <Card />
  <Pagination />
</template>

<script>
import Card from "@/components/Card.vue";
import Pagination from "@/components/Pagination.vue";
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
      fetch(
        "https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL"
      )
        .then((data) => data.json())
        .then((data) => (this.petsDataInArray = data));
    },
  },
  // computed: {
  //   petData() {
  //     return this.petsDataInArray.slice(0, 10);
  //   },
  // },
  // created() {
  //   this.getAPI();
  // },
};
</script>

<style lang="scss" scoped></style>
