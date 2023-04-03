<template>
  <PaginationComponent
    :headers="headers"
    :rows="rows"
    :page-size="pageSize"
  >
    <template #default="props">
      <TableUI
          :headers="props.headers"
          :rows="props.rows"
          @row-click="onRowClick"
          @sort="onStartSort"
      />
    </template>
  </PaginationComponent>
</template>

<script>
import {sortColumn} from "@/helpers/sortColumn";
import {changeSortDirection} from "@/helpers/changeSortDirection";
import TableUI from "@/components/UI/TableUI";
import PaginationComponent from "@/components/PaginationComponent";

export default {
  name: "TableComponent",
  emits: ["openEditForm"],
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
  components: {
    TableUI,
    PaginationComponent,
  },
  methods: {
    onStartSort(header) {
      const { headers, rows } = this.$data;
      const newDirection = changeSortDirection(header.direction);
      this.$props.headers =  headers.map(h => {
        h.direction = h.id === header.id ? newDirection : "";
        return h;
      });
      this.$props.rows = sortColumn(rows, header.id, newDirection);
    },
    onRowClick(rowId) {
      this.$emit('openEditForm', rowId);
    }
  }
}
</script>
