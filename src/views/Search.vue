<template>
  <main>
    <h2>尋找浪浪</h2>
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
      this.animalKind = data;
      this.getAPI(this.animalKind);
    },
    receiveCurrentPage(page) {
      this.currentPage = page;
      this.scrollToTop();
    },
    scrollToTop() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
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

%title_h2 {
  font-size: 24px;
  font-weight: 500;
  color: color.$gray_700;

  @include breakpoint.tablet {
    font-size: 30px;
  }
  @include breakpoint.desktop {
    font-size: 50px;
  }
}

main {
  background: color.$brown_100;
  min-height: calc(100vh - 60px);
  height: fit-content;
  margin-top: 60px;
  padding: 10px 30px 20px;

  @include breakpoint.tablet {
    min-height: calc(100vh - 103px);
    margin-top: 103px;
    padding: 10px 50px 30px;
  }

  @include breakpoint.desktop{
    padding: 10px 100px 60px;
  }

  h2 {
    @extend %title_h2;
    
    text-align: left;
    margin-bottom: 16px;

    @include breakpoint.desktop {
      text-align: left;
      margin-bottom: 24px;
    }
  }
}
section {
  // 暫時設定高度 500px
  min-height: 500px;
  height: fit-content;

  text-align: center;

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
