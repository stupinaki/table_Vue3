<template>
  <div class="about-cell">
    {{ value }}
  </div>
</template>

<script>
export default {
  name: "AboutCell",
  props: {
    value: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>
.about-cell {
  display: -webkit-box;
  overflow: hidden; max-height: 3rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

</style>

