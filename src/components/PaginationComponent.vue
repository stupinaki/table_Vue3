<template>
  <slot :headers="headers" :rows="rows"/>
  <div class="pagination">
    <button class="btn" disabled><b>⟵</b> Предыдущая</button>
    <button class="btn">Следующая <b>⟶</b></button>
  </div>
</template>

<script>
import {chunk} from "../helpers/chunk";

export default {
  name: "PaginationComponent",
  props: {
    tableRows: {
      type: Array,
      required: true,
    },
    pageSize: {
      type: Number,
      required: true
    },
  },
  computed: {
    chunks() {
      const { tableRows, pageSize } = this.$props;
      return chunk(tableRows, pageSize);
    }
  }
}
</script>

<style scoped>
  .pagination{
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
    background-color: darkgray;
    color: #2341af;
  }

</style>