<template>
  <div class="pagination">
    <button class="pagination_button first" type="button">第一頁</button>
    <ol class="pagination_numbers">
      <li v-for="page in totalPages" :key="page">{{ page }}</li>
    </ol>
    <button class="pagination_button last" type="button">最後一頁</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalPages: 10,
    };
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  padding: 50px;
  &_button {
    background: #dec39e;
    border-radius: 1px;
    color: white;
    padding: 5px 16px;
  }
  .first {
    margin-right: 24px;
  }
  .last {
    margin-left: 24px;
  }
  &_numbers {
    display: flex;
    align-items: center;

    li {
      margin-right: 10px;
      color: #e5e5e5;
    }
  }
  .number_current {
    color: #5e5b56;
  }
}
</style>
