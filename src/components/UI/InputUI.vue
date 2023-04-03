<template>
  <label :for="id">
    {{ label }}
  </label>
  <input
      :value="value"
      :id="id"
      :ref="id"
      :type="type"
      class="input-ui"
      @change="onChange"
  >
</template>

<script>
export default {
  name: "InputUI",
  emits: ["inputChange"],
  props: {
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    }
  },
  methods: {
    onChange(e) {
      const data = {
        id: this.$props.id,
        newValue: e.target.value
      }
      this.$emit("inputChange", data);
    }
  }
}
</script>

<style scoped>
.input-ui {
  padding: 10px;
  border: 1px solid #e7e6e6;
  border-radius: 16px;
  overflow: hidden;
}
</style>