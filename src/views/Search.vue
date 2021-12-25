<template>
  <main>
    <h3>尋找浪浪</h3>
    <Dropdown
      @selectedAnimalKind="receiveAnimalKind"
      @selectedShelter="receiveSelectedShelter"
      @selection="receiveSelection"
      :filteredShelter="filteredShelter"
    ></Dropdown>
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
      selectedAnimanlKind: "",
      currentPage: 1,
      cardAmount: 9,
      selectedShelter: "",
    };
  },
  methods: {
    getAnimalAPI(kind) {
      getApi
        .getAnimalData(kind)
        .then((res) => (this.petsDataInArray = res.data.Data));
    },
    getShelterAPI(kind, shelterPkid) {
      getApi
        .getShelterData(kind, shelterPkid)
        .then((res) => (this.petsDataInArray = res.data.Data));
    },
    receiveAnimalKind(data) {
      this.selectedAnimanlKind = data;
      this.getAnimalAPI(data);
    },
    receiveSelectedShelter(shelterPkid) {
      this.selectedShelter = shelterPkid;

      this.getShelterAPI(this.selectedAnimanlKind, shelterPkid);
    },
    receiveSelection(data) {
      this.selectedAnimanlKind = data.animalKind;
      this.selectedShelter = data.shelterPlace;
      this.getShelterAPI(data.animalKind, data.shelterPlace);
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
    filteredShelter() {
      let getShelterData = this.petsDataInArray.map((data) => ({
        shelter_name: data.shelter_name,
        animal_shelter_pkid: data.animal_shelter_pkid,
      }));

      let sortedShelter = getShelterData.sort((front, back) => {
        return front.animal_shelter_pkid - back.animal_shelter_pkid;
      });
      return sortedShelter.reduce((accumulator, current) => {
        if (
          accumulator.length === 0 ||
          accumulator[accumulator.length - 1].animal_shelter_pkid !==
            current.animal_shelter_pkid
        ) {
          accumulator.push(current);
        }
        return accumulator;
      }, []);
    },
  },
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
