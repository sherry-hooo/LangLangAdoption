<template>
  <div class="dropdown_container">
    <section class="categroy_container">
      <h3 class="search_title">動物品種</h3>
      <div class="dropdown">
        <div class="dropdown_items dropdown_click" @click="showMenu">
          <div>{{ animalKind === "" ? "請選擇" : animalKind }}</div>
          <i class="fas fa-caret-down dropdown_click_icon"></i>
        </div>
        <ul :class="{ show_dropdown: openMenu }" class="dropDown_animation">
          <li class="dropdown_items" @click="selectAnimalKind('狗')">狗</li>
          <li class="dropdown_items" @click="selectAnimalKind('貓')">貓</li>
          <li class="dropdown_items" @click="selectAnimalKind('其他')">其他</li>
        </ul>
      </div>
    </section>
    <section class="categroy_container">
      <h3 class="search_title">收容所</h3>
      <div class="dropdown">
        <div class="dropdown_items dropdown_click" @click="openShelterMenu">
          <div>{{ shelterName === "" ? "請選擇" : shelterName }}</div>
          <i class="fas fa-caret-down dropdown_click_icon"></i>
        </div>
        <ul
          :class="{ show_dropdown: showShelterList }"
          class="dropDown_animation"
        >
          <li
            v-for="shelter in shelterList"
            :key="shelter.animal_shelter_pkid"
            class="dropdown_items"
            @click="selectShelter(shelter)"
          >
            {{ shelter.shelter_name }}
          </li>
        </ul>
      </div>
    </section>
    <button class="sumbit_button" @click="emitSelection">搜尋</button>
  </div>
</template>
<script>
export default {
  props: ["shelterList", "selectedShelter", "selectedKind"],
  data() {
    return {
      openMenu: false,
      showShelterList: false,
      animalKind: this.selectedKind || "",
      shelterName: this.selectedShelter || "",
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
    },
    // 點選送出按鈕
    emitSelection() {
      this.$emit("selection", {
        animalKind: this.animalKind,
        shelterPkid: this.shelterPkid,
      });
    },
  },
  watch: {
    animalKind() {
      this.shelterName = "";
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
    // margin-left: 40px;
  }
}
%dropdown_cotainer {
  width: fit-content;
  border: 2px solid #dec39e;
  position: relative;
  @include breakpoint.tablet {
    margin-left: 15px;
  }
  @include breakpoint.desktop {
    margin-left: 15px;
  }
  .show_dropdown {
    display: block;
    flex-direction: column;
    justify-content: center;
  }
}

// 統一dropdown元件內的字體大小
%dropdown_font {
  font-size: 16px;
  font-weight: 500;
  @include breakpoint.tablet {
    font-size: 18px;
  }
  @include breakpoint.desktop {
    font-size: 24px;
  }
}

%dropdown_items {
  @extend %dropdown_font;
  width: 80px;
  height: 32px;
  padding: 5px;
  background-color: white;
  @include breakpoint.tablet {
    width: 100px;
    height: 52px;
    padding: 10px 5px;
  }
  @include breakpoint.desktop {
    width: 120px;
    height: 45px;
    padding: 10px 10px;
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
  background: white;
  cursor: pointer;
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
  @extend %dropdown_font;
  margin-bottom: 5px;
  white-space: nowrap;
  @include breakpoint.tablet {
    margin-bottom: 0;
  }
}

.dropdown_container {
  display: flex;
  justify-content: space-around; //平板以下統一左右切齊navbar，所以改成space-between
  align-items: center;
  margin-bottom: 10px;

  @include breakpoint.tablet {
    margin-bottom: 28px;
    justify-content: space-between;
  }

  @include breakpoint.desktop {
    margin-bottom: 32px;
  }

  @include breakpoint.bgScreen {
    // justify-content: space-evenly; //桌機視窗比較寬，所以改成space-around
  }

  .search_title {
    @extend %dropdown_title;
  }
  .sumbit_button {
    @extend %dropdown_font;
    padding: 5px 15px;
    margin-bottom: 2px;
    align-self: flex-end;
    height: max-content;
    border-radius: 2px;
    color: white;
    background: color.$brown_300;
    &:hover {
      box-shadow: inset 2px -2px 4px color.$brown_500;
    }
    @include breakpoint.desktop {
      align-self: center;
    }
  }

  .categroy_container {
    @extend %container;
    .dropdown {
      @extend %dropdown_cotainer;

      &_items {
        @extend %dropdown_items;
        div {
          font-size: 5px;
          margin: 0 auto;
          @include breakpoint.tablet {
            font-size: 15px;
            // margin-right: 10px;
          }
          @include breakpoint.desktop {
            font-size: 22px;
            // margin-right: 10px;
          }
        }
      }
      &_click {
        @extend %dropdown_button;
        &_icon {
          font-size: 18px;
          margin-right: 5px;
          @include breakpoint.tablet {
            font-size: 27px;
          }
        }
      }

      ul {
        @extend %dropdown_menu;
        border-bottom: 2px solid #dec39e;

        li {
          display: flex;
          justify-content: center;
          align-items: center;
          vertical-align: center;
          font-size: 5px;
          border-top: 2px solid #dec39c;
          height: fit-content;
          @include breakpoint.tablet {
            font-size: 15px;
          }
          @include breakpoint.desktop {
            font-size: 22px;
            padding: 1px 0;
          }
        }
      }
    }
  }
}

.dropdown_container > section:nth-child(2) {
  flex: 1 1 160px;
  max-width: 160px;
  width: 150px;

  @include breakpoint.tablet {
    flex: 1 1 300px;
    max-width: 300px;
    width: 300px;
  }
  @include breakpoint.desktop {
    flex: 1 1 650px;
    max-width: 650px;
    width: 650px;
  }

  .dropdown {
    width: 100%;
    .dropdown_items {
      width: 100%;
    }
  }
  .show_dropdown {
    width: calc(100% + 4px);
    height: 300px;
    overflow: scroll;
    li {
      padding: 10px 5px;
    }
  }
}

// dropDown Animation
.dropDown_animation {
  animation: growDown 500ms ease-in-out forwards;
  transform-origin: top;
}

@keyframes growDown {
  0% {
    transform: scaleY(0);
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
