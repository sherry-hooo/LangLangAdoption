<template>
  <div class="pagination">
    <button
      class="pagination_button first"
      type="button"
      @click="switchPreviousPage"
    >
      <i class="fas fa-chevron-left fa-fw"></i>
    </button>
    <div class="pagination_pages">
      <input
        type="text"
        @change="keyPageNumber"
        :value="currentPage"
        required
      />
      <div>/</div>
      <div>{{ totalPage }}</div>
    </div>
    <button
      class="pagination_button last"
      type="button"
      @click="switchNextPage"
    >
      <i class="fas fa-chevron-right fa-fw"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: ["totalPage", "pageNumber"],
  data() {
    return {
      test: true,
      currentPage: this.pageNumber,
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
    keyPageNumber(e) {
      // if (e.target.value > this.totalPage || e.target.value == "") {
      //   console.log("沒有此頁面");
      //   return;
      // }
      this.currentPage = parseInt(e.target.value);
      setTimeout(() => {
        this.$emit("currentPage", this.currentPage);
      }, 300);
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  margin: auto auto 0;
  &_button {
    background: #dec39e;
    border-radius: 1px;
    color: white;
    padding: 3px 10px;
    border-radius: 3px;
  }
  .first {
    margin-right: 20px;
    @include breakpoint.tablet {
      margin-right: 30px;
    }
  }
  .last {
    margin-left: 10px;
    @include breakpoint.tablet {
      margin-left: 25px;
    }
  }
  &_pages {
    display: flex;
    flex: 1;
    align-items: stretch;
    font-size: 16px;

    > * {
      flex: 0 1 33.3%;
      width: 33.3%;
    }
    input {
      border-radius: 3px;
      border: 1px solid darkgray;
      text-align: center;
      width: 20px;
      padding: 0 5px;
    }
    input::-webkit-textfield-decoration-container {
      height: 100%;
      justify-content: center;
    }
  }
  .number_current {
    color: #5e5b56;
  }
}
</style>
