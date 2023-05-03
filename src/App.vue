<template>
  <div class="main-container">
    <ColumnVisibilitySettings
        :headers="headers"
        @checkbox-click=toggleColumnVisibility
    />
    <EditForm
        v-if="!!selectedRow"
        :row="selectedRow"
        :eye-colors="elseEyeColors"
        @change-row-data="onRowChange"
        @close-edit-form="selectedRow = undefined"
    />
    <TableComponent
        :headers="headers"
        :rows="rows"
        :page-size="10"
        @open-edit-form="onOpenEditForm"
        @sorted-rows="onSortedRows"
    />
  </div>
</template>

<script>
import {headers} from "./data/headers";
import {newRows} from "./data/rows";
import {replaceData} from "@/helpers/replaceData";
import EditForm from "@/components/EditForm";
import TableComponent from "@/components/TableComponent";
import ColumnVisibilitySettings from "@/components/ColumnVisibilitySettings";

export default {
  name: 'App',
  components: {
    ColumnVisibilitySettings,
    TableComponent,
    EditForm
  },
  data() {
    return {
      headers,
      rows: newRows,
      selectedRow: undefined,
    }
  },
  methods: {
    toggleColumnVisibility(checkboxId) {
      this.$data.headers = this.$data.headers.map(header => {
        header.visible = header.id === checkboxId ? !header.visible : header.visible;
        return header;
      });
    },
    onOpenEditForm(rowId) {
      this.$data.selectedRow = this.$data.rows.find(row => row.id === rowId);
    },
    onRowChange(newData) {
      this.$data.rows = replaceData(this.$data.rows, newData);
      this.$data.selectedRow = undefined;
    },
    onSortedRows(newData) {
      this.$data.rows = newData.rows;
      this.$data.headers = newData.headers;
    }
  },
  computed: {
    elseEyeColors() {
      const colors = this.$data.rows.map(row => row.eyeColor);
      const uniqueColors = [...new Set(colors)];
      // todo too complicated you don't need to recalc it each time IMO
      return uniqueColors.filter(color => color !== this.$data.selectedRow.eyeColor);
    }
  }
}
</script>

<style>
@import "reset.css";
.main-container {
  margin: 20px 40px;
}
</style>
