<template>
  <table class="main-table" >
    <thead>
    <tr class="main-table-row">
      <TableHeader
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
      <td
          v-for="header in headers"
          :key="header.id"
          class="main-table-cell"
      >
        <CellTableUI v-show="header.visible">
          <template #content>
            <div
                v-if="header.render"
                :style="header.render(row[header.id])"
            />
            <div v-else> {{ row[header.id] }} </div>
          </template>
        </CellTableUI>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import TableHeader from "@/components/TableHeader";
import CellTableUI from "@/components/UI/CellTableUI";

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
    TableHeader,
    CellTableUI,
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