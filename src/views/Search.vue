<template>
  <main>
    <h2>尋找浪浪</h2>
    <Dropdown
      @selectedAnimalKind="receiveAnimalKind"
      @selection="receiveSelection"
      :shelterList="shelterList"
    ></Dropdown>
    <section>
      <Card
        v-for="petData in petDataList"
        :key="petData"
        :petData="petData"
      ></Card>
    </section>
    <Pagination
      @currentPage="receiveCurrentPage"
      :totalPage="totalPage"
      :pageNumber="pageNumber"
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
      pageNumber: 1,
      cardAmount: 9,
      selectedAnimanlKind: "",
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
      this.filteredShelterByKind(this.singleKindData);
    },
    async receiveSelection(data) {
      this.selectedAnimanlKind = data.animalKind;
      this.selectedShelterPkid = data.shelterPkid;
      this.pageNumber = 1;
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
    filteredShelterByKind(allList) {
      let getShelterData = allList.map((data) => ({
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
    petDataList() {
      return this.singleShelterData.slice(this.startIndex, this.endIndex);
    },
    startIndex() {
      return (this.pageNumber - 1) * this.cardAmount;
    },
    endIndex() {
      return this.pageNumber * this.cardAmount;
    },
    totalPage() {
      return Math.ceil(this.singleShelterData.length / this.cardAmount);
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
%title_h2 {
  font-size: 24px;
  font-weight: 500;
  color: color.$gray_700;
  text-align: center;
  margin-bottom: 16px;

  @include breakpoint.tablet {
    text-align: left;
    font-size: 30px;
    margin-bottom: 24px;
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
  min-height: 50%;
  height: fit-content;
  padding: 10px 0 20px;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 16px;

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
