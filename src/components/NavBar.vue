<template>
  <header>
    <div class="header_container">
      <div class="navlog">
        <router-link to="/">
          <img src="@/assets/img/Union.svg" alt="Union" title="浪我陪你等家" />
        </router-link>
      </div>
      <label for="burger">&#9776;</label>
      <input type="checkbox" id="burger" />
      <ul class="navbar">
        <li><router-link :to="{ name: 'Home' }">回首頁</router-link></li>
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

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  height: 60px;
  background-color: color.$brown_100;
  position: fixed;
  z-index: 999;
  right: 0;
  left: 0;
  top: 0;
  box-shadow: 0 1px 3px rgba(5, 5, 5, 0.2);
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
  display: none;
  position: absolute;
  right: 0;
  top: 42px;
  width: calc(100vw - 60px);
  text-align: right;
  background-color: color.$brown_100;
  // padding: 10px;
  margin: 0;
  gap: 60px;
  list-style-type: none;
  color: color.$gray_700;
  box-shadow: 0 2px 2px rgb(5 5 5 / 20%);

  @include breakpoint.tablet {
    display: flex;
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
      background-color: unset;
      padding: 10px 0px;
    }
    &:hover {
      background-color: color.$brown_300;
      @include breakpoint.tablet {
        background-color: unset;
        & a:hover {
          text-decoration: underline color.$gray_500 2px;
          text-underline-offset: 5px;
        }
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
#burger:checked + ul {
  display: block;
  @include breakpoint.tablet {
    display: flex;
  }
}
@include breakpoint.tablet {
  label {
    display: none;
  }
  // #burger:checked + ul {
  //   display: block;
  // }
}
</style>
