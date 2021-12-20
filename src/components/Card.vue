<template>
  <router-link :to="{ name: 'Description' }">
    <div class="sample">範例卡片</div>
  </router-link>
</template>

<style lang="scss" scoped>
.sample {
  width: 100px;
  height: 100px;
  outline: 1px solid black;
}
</style>
