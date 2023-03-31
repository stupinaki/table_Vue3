<template>
  <table id="tableID" class="table" >
    <thead>
      <tr class="tr">
        <th v-for="header in headers" :key="header.id" class="th">
          {{ header.title }}
        </th>
      </tr>
    </thead>

    <tbody id="tbodyID">
      <tr
          v-for="row in rows"
          :key="row.id"
          class="tr"
          @click="$emit('rowClick', row.id)"
      >
        <td v-for="header in headers" :key="header.id" class="td">
          <div
              v-if="header.specialStyle"
              :style="header.specialStyle(row[header.id])"
          />
          <div v-else> {{ row[header.id] }} </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {getDataFromNestedPath} from "../../helpers/getDataFromNestedPath";

export default {
  name: "TableComponent",
  emits: ["rowClick"],
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
  methods: {
    getTdData(row, header) {
      return getDataFromNestedPath(row, header);
    },
  },
}
</script>

<style scoped>
  .table{
    width: 100%;
    border-collapse: collapse;
    font-size: 1.2rem;
  }
  .td {
    padding: 0.5rem;
  }
  .th {
    padding: 0.5rem;
    white-space: nowrap;
    text-align: start;
    background-color: #e7e6e6;
  }
  .tr {
    border-bottom: 1px solid #e7e6e6;
    cursor: pointer;
  }

</style>