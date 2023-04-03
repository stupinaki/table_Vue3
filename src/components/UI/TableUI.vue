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
        <div v-show="header.visible">
          <!-- TODO please remove, looks wierd and to specific, replace with slot or custom render function-->
          <div
              v-if="header.specialStyle"
              :style="header.specialStyle(row[header.id])"
          />
          <div v-else> {{ row[header.id] }} </div>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import TableHeader from "@/components/TableHeader";

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