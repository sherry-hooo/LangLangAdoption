<template>
  <main>
    <div class="wrapper">
      <h3>追蹤浪浪</h3>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background: color.$brown_100;
  min-height: calc(100vh - 60px);
  margin-top: 60px;

  @include breakpoint.desktop {
    min-height: calc(100vh - 103px);
    margin-top: 103px;
  }
  .wrapper {
    padding: 5px 100px;
    h3 {
      font-size: 30px;
      color: color.$gray_700;
      text-align: left;
      @include breakpoint.desktop {
        font-size: 50px;
      }
    }
  }
}
</style>
