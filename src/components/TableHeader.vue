<template>
  <th class="th" @click="$emit('startSort', header)">
    <div v-if="header.visible" class="th-value">
      <div> {{ header.title }} </div>
      <div :class="sortArrowStyle"> 🠹 </div>
    </div>
  </th>
</template>

<script>
import {sortDirections} from "@/data/headers";

export default {
  name: "TableHeader",
  emits: ['startSort'],
  props: {
    header: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      sortDirections,
    }
  },
  computed: {
    sortArrowStyle () {
      const { direction } = this.$props.header;
      if( direction === sortDirections.descending) {
        return "dSorted";
      }
      if( direction === sortDirections.ascending) {
        return "aSorted"
      }
      return "unsorted"
    }
  }
}
</script>

<style scoped>
  .th {
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