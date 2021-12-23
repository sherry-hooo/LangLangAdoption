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
          <li class="dropdown_items" @click="clickAnimalMenu('狗')">犬</li>
          <li class="dropdown_items" @click="clickAnimalMenu('貓')">貓</li>
          <li class="dropdown_items" @click="clickAnimalMenu('鼠')">鼠</li>
        </ul>
      </div>
    </div>
    <section class="shelter_container">
      <h3 class="serach_title">收容所</h3>
      <div class="shelter">
        <div class="shelter_items shelter_click" @click="openShelterMenu">
          <div>{{ shelterPlace === "" ? "請選擇" : shelterPlace }}</div>
          <i class="fas fa-caret-down shelter_click_icon"></i>
        </div>
        <ul :class="{ show_dropdown: showShelterList }">
          <li class="shelter_items" @click="clickShelterMenu('屏東收容所')">
            屏東收容所
          </li>
          <li class="shelter_items" @click="clickShelterMenu('高雄收容所')">
            高雄收容所
          </li>
        </ul>
      </div>
      <div></div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      openMenu: false,
      showShelterList: false,
      animalKind: "",
      shelterPlace: "",
    };
  },
  methods: {
    showMenu() {
      this.openMenu = !this.openMenu;
    },
    openShelterMenu() {
      this.showShelterList = !this.showShelterList;
    },
    clickAnimalMenu(animal) {
      this.animalKind = animal;
      this.$emit("animalKind", animal);
      this.openMenu = false;
    },
    clickShelterMenu(place) {
      this.shelterPlace = place;
      this.$emit("shelterPlace", place);
      this.showShelterList = false;
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
