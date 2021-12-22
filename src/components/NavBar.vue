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
        <li><router-link to="Search">尋找浪浪</router-link></li>
        <li><router-link to="Track">追蹤浪浪 </router-link></li>
        <li><router-link to="Volunteer">志工招募 </router-link></li>
        <li><router-link to="Custom">愛心項圈 </router-link></li>
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
  & input {
    display: none;
  }
  @include breakpoint.tablet {
    position: unset;
    margin: auto 100px;
  }
}
.navlog {
  width: fit-content;
  font-size: 0;
  & a {
    display: inline-block;
    & img {
      width: 100%;
    }
  }
}

.navbar {
  display: none;
  position: absolute;
  right: 0;
  top: 32px;
  width: 100px;
  text-align: right;
  background-color: color.$brown_100;
  // padding: 0;
  padding: 10px;
  margin: 0;
  gap: 60px;
  list-style-type: none;
  color: color.$gray_500;
  @include breakpoint.tablet {
    display: flex;
    position: unset;
    right: unset;
    top: unset;
    width: unset;
    background-color: unset;
  }
  & li {
    padding: 7px;
    @include breakpoint.tablet {
      padding: 10px 0px;
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
}
@include breakpoint.tablet {
  label {
    display: none;
  }
  #burger:checked + ul {
    display: block;
  }
}
</style>
