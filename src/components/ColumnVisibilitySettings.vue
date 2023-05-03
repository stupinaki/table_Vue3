<template>
  <div class="visibility-setting">
    <h3> Отображаемые колонки таблицы: </h3>
    <div class="visibility-setting-inputs-labels">
      <div v-for="header in headers" :key="header.id">
        <input
            type="checkbox"
            :id="header.id"
            :checked="header.visible"
            @click="$emit('checkboxClick', $event.target.id)"
        >
        <label :for="header.id"> {{ header.title }} </label>
      </div>
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
  }
}
</script>

<style scoped>
.visibility-setting {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
}

.visibility-setting-inputs-labels {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>