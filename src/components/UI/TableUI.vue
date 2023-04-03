<template>
  <table class="main-table" >
    <thead>
    <tr class="main-table-row">
      <CellTableHeaderUI
          v-for="header in headers"
          :key="header.id"
          :header="header"
          @sort="onSort"
      />
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="row in rows"
        :key="row.id"
        class="main-table-row"
        @click="$emit('rowClick', row.id)"
    >
      <template v-for="header in headers" :key="header.id">
        <td class="main-table-cell">
          <div v-show="header.visible">
            <slot
                name="tableCell"
                :value="row[header.id]"
                :header="header"
            >
              {{ row[header.id] }}
            </slot>
          </div>
        </td>
      </template>
    </tr>
    </tbody>
  </table>
</template>

<script>
import CellTableHeaderUI from "@/components/UI/CellTableHeaderUI";

export default {
  name: "TableUI",
  emits: ["rowClick", "sort"],
  props: {
    headers: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
  },
  components: {
    CellTableHeaderUI,
  },
  methods: {
    onSort(header) {
      this.$emit('sort', header);
    },
  }
}
</script>

<style scoped>
.main-table{
  width: 100%;
  border-collapse: collapse;
  font-size: 1.2rem;
}
.main-table-cell {
  padding: 0.5rem;
}
.main-table-row {
  border-bottom: 1px solid #e7e6e6;
  cursor: pointer;
}
</style>