<template>
  <div class="dropdown_container">
    <div class="categroy_container">
      <h3 class="search_title">動物品種</h3>
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
      <h3 class="search_title">收容所</h3>
      <div class="shelter">
        <div class="shelter_items shelter_click" @click="openShelterMenu">
          <div>請選擇</div>
          <i class="fas fa-caret-down shelter_click_icon"></i>
        </div>
        <ul :class="{ show_dropdown: showShelterList }">
          <li class="shelter_items">屏東收容所</li>
          <li class="shelter_items">高雄收容所</li>
        </ul>
      </div>
      <div></div>
    </section>
    <button class="sumbit_button">搜尋</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      openMenu: false,
      showShelterList: false,
      animalKind: "",
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
  }
}

// 統一dropdown元件內的字體大小
%dropdown_font{
  font-size: 16px;
  font-weight: 500;
  @include breakpoint.tablet{
    font-size: 18px;
  }
  @include breakpoint.desktop{
    font-size: 24px;
  }
}

%dropdown_items {
  @extend %dropdown_font;
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
  @extend %dropdown_font;
  
  margin-bottom: 5px;

  @include breakpoint.tablet{
    margin-bottom: 0;
  }
}

.dropdown_container {
  display: flex;
  justify-content: space-between; //平板以下統一左右切齊navbar，所以改成space-between
  align-items: center;
  margin-bottom: 10px;

  @include breakpoint.tablet{
    margin-bottom: 28px;
  }

  @include breakpoint.desktop{
    margin-bottom: 32px;
  }

  @include breakpoint.bgScreen {
    justify-content: space-evenly; //桌機視窗比較寬，所以改成space-around
  }

  .search_title {
    @extend %dropdown_title;
  }
  .sumbit_button {
    @extend %dropdown_font;
    padding: 5px 10px;
    align-self: flex-end;
    height: max-content;
    border-radius: 0;
    color: white;
    background: color.$brown_300;

    @include breakpoint.desktop{
      align-self: center
    }
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
