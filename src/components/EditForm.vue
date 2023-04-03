<template>
  <div class="form-background" @click="$emit('closeEditForm')"/>
  <div class="form-container">
    <form class="edit-form" @submit.prevent="onSubmit">
      <label for="firstName">Имя</label>
      <input :value="row.firstName" id="firstName" ref="firstName" type="text" class="edit-details">

      <label for="lastName">Фамилия</label>
      <input id="lastName" ref="lastName"  type="text" class="edit-details" :value="row.lastName">

      <label for="about">Описание</label>
      <textarea id="about" ref="about" class="edit-details" rows="10" :value="row.about"/>

      <label for="eyeColor">Цвет глаз</label>
      <select id="eyeColor" ref="eyeColor" class="edit-details">
        <option :value="row.eyeColor"> {{ row.eyeColor }} </option>
        <option
            v-for="(color, i) in eyeColors"
            :key="i"
            :value="color"
        >
          {{ color }}
        </option>
      </select>

      <button type="submit" class="btn-submit">
        Сохранить изменения
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditForm",
  emits: ["changeRowData", "closeEditForm"],
  props: {
    row: {
      type: Object,
      required: true
    },
    eyeColors: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onSubmit() {
      const newRow = {
        id: this.$props.row.id,
        firstName: this.$refs.firstName.value,
        lastName: this.$refs.lastName.value,
        about: this.$refs.about.value,
        eyeColor: this.$refs.eyeColor.value
      }
      this.$emit("changeRowData", newRow);
    },
  }
}
</script>

<style scoped>
.form-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000033;
}
.form-container {
  position: absolute;
  width: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: aliceblue;
  border-radius: 16px;
  padding: 20px;
}
.edit-form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
.edit-details {
  padding: 10px;
  border: 1px solid #e7e6e6;
  border-radius: 16px;
  overflow: hidden;
}
.btn-submit {
  padding: 10px;
  border: 1px solid #e7e6e6;
  border-radius: 16px;
  overflow: hidden;
}
.btn-submit:hover {
  background-color: darkgray;
  color: #2341af;
}

@media (max-width: 600px) {
  .form-container {
    width: 80%;
  }
}
</style>