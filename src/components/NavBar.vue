<template>
  <header>
    <div class="header_container">
      <div class="navlog">
        <router-link to="/">
          <img src="@/assets/img/Union.svg" alt="Union" title="浪我陪你等家" />
        </router-link>
      </div>
      <label for="burger">&#9776;</label>
      <input type="checkbox" id="burger" @click="openNav = !openNav" />
      <ul v-if="openNav" class="navbar sm_nav" @click="openNav = false">
        <li><router-link :to="{ name: 'Home' }">首頁</router-link></li>
        <li><router-link :to="{ name: 'Search' }">尋找浪浪</router-link></li>
        <li><router-link :to="{ name: 'Track' }">追蹤浪浪 </router-link></li>
        <li>
          <router-link :to="{ name: 'Volunteer' }">志工招募 </router-link>
        </li>
        <li><router-link :to="{ name: 'Custom' }">愛心項圈 </router-link></li>
      </ul>
      <ul class="lg_nav navbar" @click="openNav = false">
        <li><router-link :to="{ name: 'Home' }">首頁</router-link></li>
        <li><router-link :to="{ name: 'Search' }">尋找浪浪</router-link></li>
        <li><router-link :to="{ name: 'Track' }">追蹤浪浪 </router-link></li>
        <li>
          <router-link :to="{ name: 'Volunteer' }">志工招募 </router-link>
        </li>
        <li><router-link :to="{ name: 'Custom' }">愛心項圈 </router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      openNav: false,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  height: 60px;
  background-color: color.$brown_100;
  @include breakpoint.tablet {
    height: 103px;
  }
}
.header_container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto 30px;
  width: 1400px;
  align-items: center;
  & label {
    color: color.$gray_500;
  }
  & input {
    display: none;
  }
  @include breakpoint.tablet {
    position: unset;
    margin: auto 50px;
  }
  @include breakpoint.bgScreen {
    margin: auto 100px;
  }
}
.navlog {
  width: fit-content;
  font-size: 0;
  & a {
    display: inline-block;
    width: 80%;
    & img {
      width: 100%;
    }
    @include breakpoint.tablet {
      width: 100%;
    }
  }
}

.navbar {
  display: block;
  position: absolute;
  right: -30px;
  top: 42px;
  width: 100vw;
  text-align: right;
  background-color: color.$brown_100;
  margin: 0;
  gap: 60px;
  list-style-type: none;
  color: color.$gray_700;
  box-shadow: 0 2px 2px rgb(5 5 5 / 20%);

  @include breakpoint.tablet {
    display: flex;
    /* fixed */
    align-items: center;
    //
    position: unset;
    right: unset;
    top: unset;
    width: unset;
    background-color: unset;
    box-shadow: unset;
  }
  & li {
    padding: 7px;
    text-align: center;
    @include breakpoint.tablet {
      display: flex;
      align-items: center;
      background-color: unset;
      height: 100px;
      padding: 10px 0px;
      &:first-child {
        width: 64px;
        justify-content: center;
      }
    }
    @include breakpoint.desktop {
    }
    &:hover {
      // background-color: color.$brown_300;
      @include breakpoint.tablet {
        // background-color: unset;
        background-image: url("~@/assets/img/Union2.svg");
        background-repeat: no-repeat;
        background-position: bottom;
        align-self: center;
        // background-size: 70%;
        // transform: rotate(30deg);
        // z-index: -1;
        // & a:hover {
        //   // text-decoration: underline color.$gray_500 2px;
        //   // text-underline-offset: 5px;
        // }
      }
      @include breakpoint.desktop {
      }
    }
    @include breakpoint.tablet {
      & a:focus {
        text-decoration: underline color.$gray_500 2px;
        text-underline-offset: 5px;
      }
    }
  }
}
label {
  display: block;
  padding: 0px 4px 0px;
  font-size: 2rem;
  line-height: 20px;
}
// #burger:checked + ul {
//   display: block;
//   @include breakpoint.tablet {
//     display: flex;
//   }
// }
@include breakpoint.tablet {
  label {
    display: none;
  }
  // #burger:checked + ul {
  //   display: block;
  // }
}

header {
  .sm_nav {
    z-index: 10;
    .navbar {
      li > a {
        display: block;
        width: 100%;
      }
    }
    @include breakpoint.tablet {
      display: none;
    }
  }
  .lg_nav {
    display: none;
    @include breakpoint.tablet {
      display: flex;
    }
  }
}

.targeting {
  text-decoration: underline color.$gray_500 2px;
  text-underline-offset: 5px;
}
</style>
