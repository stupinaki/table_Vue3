<template>
  <div class="eye-color-cell" :style="eyeColorStyle"/>
</template>

<script>
export default {
  name: "EyeColorCell",
  props: {
    value: {
      type: String,
      required: true
    },
  },
  computed: {
    eyeColorStyle() {
      return `background-color:${this.$props.value}`;
    }
  }
}
</script>

<style scoped>
.eye-color-cell {
  border-radius: 50%;
  height: 2em;
  width: 2em;
  margin: 0 auto;
}
</style>