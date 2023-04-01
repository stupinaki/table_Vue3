<template>
  <table id="tableID" class="table" >
    <thead>
      <tr class="tr">
        <TableHeader
            v-for="header in headers"
            :key="header.id"
            :header="header"
            @start-sort="onStartSort"
        />
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
          <div v-if="header.visible">
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
  name: "TableComponent",
  emits: ["rowClick", "startSort"],
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
    onStartSort(header) {
      this.$emit('startSort', header);
    }
  }
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
  .tr {
    border-bottom: 1px solid #e7e6e6;
    cursor: pointer;
  }

</style>