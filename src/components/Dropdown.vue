<template>
  <div class="dropdown_container">
    <div class="categroy_container">
      <h3 class="serach_title">動物品種</h3>
      <div class="dropdown">
        <div class="dropdown_items dropdown_click" @click="showMenu">
          <div>{{ animalKind === "" ? "請選擇" : animalKind }}</div>
          <i class="fas fa-caret-down dropdown_click_icon"></i>
        </div>
        <ul :class="{ show_dropdown: openMenu }">
          <li class="dropdown_items" @click="selectAnimalKind('狗')">狗</li>
          <li class="dropdown_items" @click="selectAnimalKind('貓')">貓</li>
          <li class="dropdown_items" @click="selectAnimalKind('其他')">其他</li>
        </ul>
      </div>
    </div>
    <section class="shelter_container">
      <h3 class="serach_title">收容所</h3>
      <div class="shelter">
        <div class="shelter_items shelter_click" @click="openShelterMenu">
          <div>{{ shelterName === "" ? "請選擇" : shelterName }}</div>
          <i class="fas fa-caret-down shelter_click_icon"></i>
        </div>
        <ul :class="{ show_dropdown: showShelterList }">
          <li
            v-for="shelter in shelterList"
            :key="shelter.animal_shelter_pkid"
            class="shelter_items"
            @click="selectShelter(shelter)"
          >
            {{ shelter.shelter_name }}
          </li>
        </ul>
      </div>

      <div><button @click="emitSelection">search</button></div>
    </section>
  </div>
</template>
<script>
export default {
  props: ["shelterList"],
  data() {
    return {
      openMenu: false,
      showShelterList: false,
      animalKind: "",
      shelterName: "",
      shelterPkid: "",
    };
  },
  methods: {
    showMenu() {
      this.openMenu = !this.openMenu;
    },
    openShelterMenu() {
      this.showShelterList = !this.showShelterList;
    },
    // 接收選取的動物類別
    selectAnimalKind(animal) {
      this.animalKind = animal;
      this.openMenu = false;
      this.$emit("selectedAnimalKind", animal);
    },
    // 接收選取的收容所
    selectShelter(place) {
      this.shelterName = place.shelter_name;
      this.shelterPkid = place.animal_shelter_pkid;
      this.showShelterList = false;
      // this.$emit("selectedShelter", place.animal_shelter_pkid);
    },
    // 點選送出按鈕
    emitSelection() {
      this.$emit("selection", {
        animalKind: this.animalKind,
        shelterPkid: this.shelterPkid,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
%container {
  display: flex;
  align-items: center;
  flex-direction: column;

  // margin-left: 20px;
  @include breakpoint.tablet {
    flex-direction: row;
  }
  @include breakpoint.desktop {
    flex-direction: row;
    margin-left: 40px;
  }
}
%dropdown_cotainer {
  width: fit-content;
  border: 2px solid #dec39e;
  position: relative;
  @include breakpoint.tablet {
    margin-left: 25px;
  }
  @include breakpoint.desktop {
    margin-left: 25px;
  }
  .show_dropdown {
    display: block;
  }
}
%dropdown_items {
  width: 100px;
  background-color: white;
  @include breakpoint.tablet {
  }
  @include breakpoint.desktop {
    width: 250px;
    padding: 10px 0;
  }
  &:hover {
    color: white;
    background-color: #dec39e;
  }
}
%dropdown_menu {
  display: none;

  width: fit-content;
  border-left: 2px solid #dec39c;
  border-right: 2px solid #dec39c;

  position: absolute;
  //因為絕對定位對齊父層的內容初始位置（沒有
  left: -2px;
}

%dropdown_button {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include breakpoint.tablet {
  }
  @include breakpoint.desktop {
  }
}

%dropdown_title {
  display: inline-block;
  font-size: 15px;
  @include breakpoint.tablet {
  }
  @include breakpoint.desktop {
    font-size: 30px;
  }
}

.dropdown_container {
  display: flex;
  justify-content: space-evenly;

  @include breakpoint.tablet {
    justify-content: space-around;
  }

  .serach_title {
    @extend %dropdown_title;
  }
  .categroy_container {
    @extend %container;
    .dropdown {
      @extend %dropdown_cotainer;

      &_items {
        @extend %dropdown_items;
      }
      &_click {
        @extend %dropdown_button;
        div {
          padding-left: 16px;
        }
        &_icon {
          font-size: 27px;
          padding-right: 12px;
        }
      }

      ul {
        @extend %dropdown_menu;
        li {
          border-top: 2px solid #dec39c;

          &:last-child {
            border-bottom: 2px solid #dec39c;
          }
        }
      }
    }
  }
  .shelter_container {
    @extend %container;
    .shelter {
      @extend %dropdown_cotainer;

      &_items {
        @extend %dropdown_items;
      }
      &_click {
        @extend %dropdown_button;

        div {
          padding-left: 16px;
        }
        &_icon {
          font-size: 27px;
          padding-right: 12px;
        }
      }
      ul {
        @extend %dropdown_menu;
        li {
          border-top: 2px solid #dec39c;

          &:last-child {
            border-bottom: 2px solid #dec39c;
          }
        }
      }
    }
  }
}
</style>
