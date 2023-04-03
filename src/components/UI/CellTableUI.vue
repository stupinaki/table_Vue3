<template>
  <div>
    <slot name="content"/>
  </div>
</template>

<script>
export default {
  name: "CellTableUI",

}
</script>

<style scoped>

</style>

дефолтно - текст
но если есть рендер функция, то то что она возвращает (а что она вернут?) отдельный компонент?