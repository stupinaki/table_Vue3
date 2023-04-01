<template>
  <div class="main-container">
    <ColumnVisibilitySettings
        :headers="headers"
        @checkbox-click=onCheckboxClick
    />
    <EditForm
        v-if="isEditFormVisible"
        :id="selectedRow.id"
        :first-name="selectedRow.firstName"
        :last-name="selectedRow.lastName"
        :about="selectedRow.about"
        :eye-color="selectedRow.eyeColor"
        :eye-colors="elseEyeColors"
        @change-row-data="onRowChange"
        @close-edit-form="isEditFormVisible = false"
    />

    <PaginationComponent
        :headers="headers"
        :rows="rows"
        :page-size="10"
    >
      <template  #default="props">
        <TableComponent
            :headers="props.headers"
            :rows="props.rows"
            @row-click="onRowClick"
            @start-sort="onStartSort"
        />
      </template>
    </PaginationComponent>
  </div>

</template>

<script>
import {headers} from "./data/headers";
import {newRows} from "./data/rows";
import {sortColumn} from "@/helpers/sortColumn";
import {replaceData} from "@/helpers/replaceData";
import {changeSortDirection} from "@/helpers/changeSortDirection";
import ColumnVisibilitySettings from "@/components/ColumnVisibilitySettings";
import PaginationComponent from "@/components/PaginationComponent";
import TableComponent from "@/components/TableComponent";
import EditForm from "@/components/EditForm";

export default {
  name: 'App',
  components: {
    ColumnVisibilitySettings,
    PaginationComponent,
    TableComponent,
    EditForm
  },
  data() {
    return {
      headers,
      rows: newRows,
      selectedRow: undefined,
      isEditFormVisible: false,
    }
  },
  methods: {
    onCheckboxClick(checkboxId) {
      this.$data.headers = this.$data.headers.map(header => {
        header.visible = header.id === checkboxId ? !header.visible : header.visible;
        return header;
      });
    },
    onRowClick(rowId) {
      this.$data.selectedRow = this.$data.rows.find(row => row.id === rowId);
      this.$data.isEditFormVisible = true;
    },
    onRowChange(newData) {
      this.$data.rows = replaceData(this.$data.rows, newData);
      this.$data.isEditFormVisible =  false;
    },
    onStartSort(header) {
      const { headers, rows } = this.$data;
      const newDirection = changeSortDirection(header.direction);
      this.$data.headers =  headers.map(h => {
        h.direction = h.id === header.id ? newDirection : "";
        return h;
      });
      this.$data.rows = sortColumn(rows, header.id, newDirection);
    },
  },
  computed: {
    elseEyeColors() {
      const colors = this.$data.rows.map(row => row.eyeColor);
      const uniqueColors = [...new Set(colors)];
      return uniqueColors.filter(color => color !== this.$data.selectedRow.eyeColor);
    }
  }
}
</script>

<style>
.main-container {
  margin: 20px 40px;
}
</style>
