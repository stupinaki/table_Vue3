<template>
  <slot :headers="headers" :rows="chunks[currentPageIndex]"/>

  <div class="pagination">
    <button
        :class="prevBtnStyle"
        :disabled="previousPageDisabled"
        @click="goPrevious"
    >
      <b> ⟵ </b> Предыдущая
    </button>
    <button
        :class="nextBtnStyle"
        :disabled="nextPageDisabled"
        @click="goNext"
    >
      Следующая <b> ⟶ </b>
    </button>
  </div>
</template>

<script>
import {chunk} from "@/helpers/chunk";

export default {
  name: "PaginationComponent",
  props: {
    headers: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
    pageSize: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      currentPageIndex: 0,
      previousPageDisabled: true,
      nextPageDisabled: false,
    }
  },
  computed: {
    chunks() {
      const {rows, pageSize} = this.$props;
      return chunk(rows, pageSize);
    },
    prevBtnStyle() {
      return this.$data.previousPageDisabled ? "disabled" : "btn";
    },
    nextBtnStyle() {
      return this.$data.nextPageDisabled ? "disabled" : "btn";
    },
  },
  methods: {
    goNext() {
      this.$data.currentPageIndex++
      this.$data.nextPageDisabled = this.$data.currentPageIndex >= this.chunks.length - 1;
      this.$data.previousPageDisabled = false;
    },
    goPrevious() {
      this.$data.currentPageIndex--
      this.$data.previousPageDisabled = this.$data.currentPageIndex <= 0;
      this.$data.nextPageDisabled = false;
    }
  }
}
</script>

<style scoped>
.pagination {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 20px;
}
.btn {
  padding: 8px;
  border: 1px solid #e7e6e6;
  cursor: pointer;
  border-radius: 16px;
}
.btn:hover {
  background-color: #aaa3a3;
}
.disabled {
  padding: 8px;
  border: 1px solid #e7e6e6;
  border-radius: 16px;
  background-color: #716f6f;
  color: #e7e6e6;
}

</style>