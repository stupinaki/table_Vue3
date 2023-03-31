<template>
  <div class="visibility-setting">
    <h3> Отображаемые колонки таблицы: </h3>
    <div
        v-for="header in headers"
        :key="header.id"
    >
      <input type="checkbox"
             :id="header.id"
             :checked="header.visible"
             @click="onClick">
      <label :for="header.id"> {{ header.title }} </label>
    </div>
  </div>
</template>

<script>

export default {
  name: "ColumnVisibilitySettings",
  emits: ["checkboxClick"],
  props: {
    headers: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onClick(e) {
      this.$emit("checkboxClick", e.target.id);
    }
  }
}
</script>

<style scoped>
.visibility-setting {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}
</style>