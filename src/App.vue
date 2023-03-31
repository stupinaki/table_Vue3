<template>
  <div class="main-container">
    <ColumnVisibilitySettings
        :headers="headers"
        :is-checkbox-selected="isCheckboxSelected"
        @checkbox-click=onCheckboxClick
    />
    <EditForm
        v-if="isEditFormVisible"
        @change-row-data="onRowChange"
        @close-edit-form="isEditFormVisible = false"
        :id="selectedRow.id"
        :first-name="selectedRow.firstName"
        :last-name="selectedRow.lastName"
        :about="selectedRow.about"
        :eye-color="selectedRow.eyeColor"
        :eye-colors="elseEyeColors"
    />

    <TableComponent
        :headers="headers"
        :rows="rows"
        @row-click="onRowClick"
    />

    <PaginationComponent :table-rows="rows" :page-size="10">
      <template  #default="props">
        props: {{props}}
        <TableComponent :headers="props.headers" :rows="props.rows"></TableComponent>
      </template>
    </PaginationComponent>
  </div>

</template>

<script>
import {headers} from "../data/headers";
import {newRows} from "../data/rows";
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
      rows: newRows,
      headers,
      //todo
      isCheckboxSelected: true,
      isEditFormVisible: false,
      selectedRow: undefined,
    }
  },
  methods: {
    onCheckboxClick(checkboxId) {
      console.log("we get change checkboxId:", checkboxId)
    },
    onRowChange(newData) {
      const newRows = [...this.$data.rows];
      const targetRowIndex = newRows.findIndex(el => el.id === newData.id);
      newRows.splice(targetRowIndex, 1, newData);
      this.$data.rows = newRows;
      this.$data.isEditFormVisible =  false;
    },
    onRowClick(rowId) {
      this.$data.selectedRow = this.$data.rows.find(row => row.id === rowId);
      this.$data.isEditFormVisible = true;
    }
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
