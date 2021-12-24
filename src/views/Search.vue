<template>
  <main>
    <h3>尋找浪浪</h3>
    <Dropdown
      @selectedAnimalKind="receiveAnimalKind"
      @selection="receiveSelection"
      :shelterList="shelterList"
    ></Dropdown>
    <!-- @selecztedShelter="receiveSelectedShelter" -->
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
      singleKindData: [],
      singleShelterData: [],
      selectedAnimanlKind: "",
      pageNumber: 1,
      cardAmount: 9,
      selectedShelterPkid: "",
      shelterList: [],
    };
  },
  methods: {
    getAnimalAPI(kind) {
      return getApi
        .getAnimalData(kind)
        .then((res) => (this.singleKindData = res.data.Data));
    },
    getShelterAPI(kind, shelterPkid) {
      getApi
        .getShelterData(kind, shelterPkid)
        .then((res) => (this.singleShelterData = res.data.Data));
    },
    // 接收選取的動物類別
    async receiveAnimalKind(data) {
      await this.getAnimalAPI(data);
      this.selectedAnimanlKind = data;
      console.log("test");
      this.filteredShelterByKind(this.petsDataInArray);
    },
    // 接收選的 filter
    // receiveSelectedShelter(shelterPkid) {
    //   this.selectedShelter = shelterPkid;
    //   this.getShelterAPI(this.selectedAnimanlKind, shelterPkid);
    // },
    receiveSelection(data) {
      this.selectedAnimanlKind = data.animalKind;
      this.selectedShelterPkid = data.shelterPkid;
      this.getShelterAPI(data.animalKind, data.shelterPkid);
    },
    receiveCurrentPage(page) {
      this.pageNumber = page;
      this.scrollToTop();
    },
    scrollToTop() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
    // 依照動物類別篩選出收容所
    filteredShelterByKind() {
      console.log(this.singleKindData);
      let getShelterData = this.singleKindData.map((data) => ({
        shelter_name: data.shelter_name,
        animal_shelter_pkid: data.animal_shelter_pkid,
      }));

      let sortedShelter = getShelterData.sort((front, back) => {
        return front.animal_shelter_pkid - back.animal_shelter_pkid;
      });
      this.shelterList = sortedShelter.reduce((accumulator, current) => {
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
  computed: {
    petData() {
      return this.singleShelterData.slice(this.startIndex, this.endIndex);
    },
    startIndex() {
      return (this.pageNumber - 1) * this.cardAmount;
    },
    endIndex() {
      return this.pageNumber * this.cardAmount;
    },
    totalPage() {
      return parseInt(this.singleShelterData.length / this.cardAmount);
    },
    // shelterList() {
    //   let getShelterData = this.singleKindData.map((data) => ({
    //     shelter_name: data.shelter_name,
    //     animal_shelter_pkid: data.animal_shelter_pkid,
    //   }));

    //   let sortedShelter = getShelterData.sort((front, back) => {
    //     return front.animal_shelter_pkid - back.animal_shelter_pkid;
    //   });

    //   return sortedShelter.reduce((accumulator, current) => {
    //     if (
    //       accumulator.length === 0 ||
    //       accumulator[accumulator.length - 1].animal_shelter_pkid !==
    //         current.animal_shelter_pkid
    //     ) {
    //       accumulator.push(current);
    //     }
    //     return accumulator;
    //   }, []);
    // },
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
