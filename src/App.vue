<template>
  <NavBar />
  <router-view />
  <footer>&copy; 2021GoodIdeas. All rights reserved.</footer>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
footer {
  height: 60px;
  line-height: 60px;
  width: 100%;
  background: white;
  font-weight: 900;
  color: color.$brown_300;
}
</style>
