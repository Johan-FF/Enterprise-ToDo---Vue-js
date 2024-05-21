<template>
  <div id="form-container">
    <form @submit.prevent="handleSubmit">
      <div v-for="(field, index) in fields" :key="index" class="form-field">
        <label :for="field.name">{{ field.label }}</label>
        <input
          v-if="field.type === 'text' || field.type === 'email' || field.type === 'password' || field.type === 'time'"
          :type="field.type"
          :name="field.name"
          v-model="formData[field.name]"
          :placeholder="field.placeholder"
        />
        <textarea
          v-else-if="field.type === 'textarea'"
          :name="field.name"
          v-model="formData[field.name]"
          :placeholder="field.placeholder"
        ></textarea>
        <select
          v-else-if="field.type === 'select'"
          :name="field.name"
          v-model="formData[field.name]"
        >
          <option v-for="option in field.options" :value="option.value" :key="option.value">
            {{ option.text }}
          </option>
        </select>
        <input
          v-else-if="field.type === 'checkbox'"
          type="checkbox"
          :name="field.name"
          v-model="formData[field.name]"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateForm",
  props: {
    fields: {
      type: Array,
      required: true,
    },
  },
  data() {
    const formData = {};
    this.fields.forEach(field => {
      formData[field.name] = field.type === 'checkbox' ? false : '';
    });
    return {
      formData,
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.formData);
      this.$emit('submit', this.formData);
    },
  },
};
</script>

<style scoped>
#form-container {
  max-width: 600px;
  margin: 0 auto;
}

.form-field {
  margin-bottom: 16px;
}

.form-field label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.form-field input,
.form-field textarea,
.form-field select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: var(--color3);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: var(--color4);
}
</style>
