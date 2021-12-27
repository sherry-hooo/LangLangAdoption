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
        type="number"
        :max="totalPage"
        @change="keyPageNumber"
        :value="currentPage"
        placeholder="1"
        required
      />
      <div class="divider">/</div>
      <p>{{ totalPage }}</p>
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
    keyPageNumber(event) {
      console.log(event);
      console.log(typeof event.target.value);
      this.currentPage = parseInt(
        Number(event.target.value) > this.totalPage ||
          Number(event.target.value) <= 0
          ? this.totalPage
          : Number(event.target.value)
      );
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
  width: 250px;
  margin: auto auto 0;
  &_button {
    background: #dec39e;
    border-radius: 1px;
    color: white;
    padding: 5px 15px;
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
    @include breakpoint.tablet {
      font-size: 20px;
    }

    > input,
    p {
      flex: 0 1 45%;
      width: 45%;
    }
    input {
      border-radius: 3px;
      border: 1px solid darkgray;
      text-align: center;
      width: 60px;
      padding: 0 5px;
      font-size: 16px;
      font-weight: 500;
      color: #625c5cfa;
      @include breakpoint.tablet {
        font-size: 20px;
      }
    }
    input::-webkit-textfield-decoration-container {
      height: 100%;
      justify-content: center;
    }
    .divider {
      width: 10px;
      margin: 0 18px 0 15px;
    }
  }
  .number_current {
    color: #5e5b56;
  }
}
</style>
