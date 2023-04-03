<template>
  <th
      class="table-header"
      @click="onClick"
  >
    <div
        v-if="header.visible"
        class="th-value"
    >
      <div> {{ header.title }} </div>
      <div :class="sortArrowStyle"> 🠹 </div>
    </div>
  </th>
</template>

<script>
import {sortDirections} from "@/data/headers";

export default {
  name: "TableHeader",
  emits: ['sort'],
  props: {
    header: {
      type: Object,
      required: true,
    },
  },
  computed: {
    sortArrowStyle () {
      const { direction } = this.$props.header;
      if( direction === sortDirections.des) {
        return "dSorted";
      }
      if( direction === sortDirections.asc) {
        return "aSorted";
      }
      return "unsorted";
    }
  },
  methods: {
    onClick() {
      this.$emit('sort', this.$props.header);
    }
  }
}
</script>

<style scoped>
  .table-header {
    padding: 0.5rem;
    white-space: nowrap;
    text-align: start;
    background-color: #e7e6e6;
  }
  .th-value {
    display: flex;
    gap: 8px;
  }
  .unsorted {
    display: none;
  }
  .aSorted {
    display: block;
  }
  .dSorted {
    display: block;
    transform: rotate(180deg);
  }
</style>