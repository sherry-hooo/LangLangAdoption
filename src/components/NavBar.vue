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

<style lang="scss" scoped></style>
