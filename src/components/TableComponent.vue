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
      >
        <template #tableCell="cellProps">
          <component :is="getComponent(cellProps.header.id)" v-bind="cellProps">
            {{cellProps.value}}
          </component>
        </template>
      </TableUI>
    </template>
  </PaginationComponent>
</template>

<script>
import {sortColumn} from "@/helpers/sortColumn";
import {changeSortDirection} from "@/helpers/changeSortDirection";
import TableUI from "@/components/UI/TableUI";
import AboutCell from "@/components/cells/AboutCell";
import EyeColorCell from "@/components/cells/EyeColorCell";
import PaginationComponent from "@/components/PaginationComponent";

export default {
  name: "TableComponent",
  emits: ["openEditForm", "sortedRows"],
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
    AboutCell,
    EyeColorCell,
    PaginationComponent,
  },
  methods: {
    getComponent(headerId) {
      if (headerId === "eyeColor") {
        return EyeColorCell;
      }
      if (headerId === "about") {
        return AboutCell;
      }
      return "div";
    },
    onStartSort(header) {
      const { headers, rows } = this.$props;
      const newDirection = changeSortDirection(header.direction);
      const newHeaders =  headers.map(h => {
        h.direction = h.id === header.id ? newDirection : "";
        return h;
      });
      const newRows = sortColumn(rows, header.id, newDirection);
      const data = {
        headers: newHeaders,
        rows: newRows,
      }
      this.$emit("sortedRows", data);
    },
    onRowClick(rowId) {
      this.$emit('openEditForm', rowId);
    }
  }
}
</script>
