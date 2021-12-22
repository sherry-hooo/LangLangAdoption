<template>
  <div class="pagination">
    <button
      class="pagination_button first"
      type="button"
      @click="switchPreviousPage"
    >
      第一頁
    </button>
    <ol class="pagination_numbers">
      <li
        v-for="(page, index) in totalPages"
        :key="page"
        :class="{ number_current: currentPage === index + 1 }"
      >
        {{ page }}
      </li>
    </ol>
    <button
      class="pagination_button last"
      type="button"
      @click="switchNextPage"
    >
      下一頁
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalPages: 10,
      currentPage: 1,
    };
  },
  methods: {
    switchNextPage() {
      this.currentPage++;

      this.$emit("currentPage", this.currentPage);
    },
    switchPreviousPage() {
      if (this.currentPage <= 1) {
        return;
      }
      this.currentPage--;
      this.$emit("currentPage", this.currentPage);
    },
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
