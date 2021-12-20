<template>
  <router-link to="/">Home | </router-link>
  <router-link to="Search">尋找浪浪 | </router-link>
  <router-link to="Track">追蹤浪浪 | </router-link>
  <router-link to="Volunteer">志工招募 | </router-link>
  <router-link to="Custom">愛心項圈 |</router-link>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
