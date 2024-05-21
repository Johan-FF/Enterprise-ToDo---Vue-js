<template>
  <div id="form-container">
    <form @submit.prevent="handleSubmit">
      <div v-for="(field, index) in fields" :key="index" class="form-field">
        <label :for="field.name">{{ field.label }}</label>
        <input
          v-if="
            field.type === 'text' ||
            field.type === 'email' ||
            field.type === 'password' ||
            field.type === 'time'
          "
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
          <option
            v-for="option in field.options"
            :value="option.value"
            :key="option.value"
          >
            {{ option.text }}
          </option>
        </select>
        <div
          v-else-if="field.type === 'select' && field.name === 'participants'"
          class="participants-field"
        >
          <label>{{ field.label }}</label>
          <div class="selected-participants">
            <div
              v-for="(participant, index) in formData[field.name]"
              :key="index"
              class="selected-participant"
            >
              {{ participant }}
              <button type="button" @click="removeParticipant(index)">x</button>
            </div>
          </div>
          <input
            type="text"
            v-model="newParticipant"
            placeholder="Agregar participante"
            @keyup.enter="addParticipant"
          />
          <button type="button" @click="addParticipant">Agregar</button>
        </div>
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
      default: () => [
        {
          name: "firstName",
          label: "Nombre",
          type: "text",
          placeholder: "Ingrese su nombre",
        },
        {
          name: "lastName",
          label: "Apellido",
          type: "text",
          placeholder: "Ingrese su apellido",
        },
        {
          name: "email",
          label: "Correo",
          type: "email",
          placeholder: "Ingrese su correo",
        },
        {
          name: "cedula",
          label: "Cédula",
          type: "text",
          placeholder: "Ingrese su cédula",
        },
        {
          name: "role",
          label: "Rol",
          type: "select",
          options: [
            { value: "admin", text: "Administrador" },
            { value: "user", text: "Usuario" },
          ],
        },
      ],
    },
  },
  data() {
    const formData = {};
    this.fields.forEach((field) => {
      formData[field.name] =
        field.type === "checkbox" ? false : field.multiple ? [] : "";
    });
    return {
      formData,
      newParticipant: "",
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", this.formData);
    },
    addParticipant() {
      if (
        this.newParticipant.trim() &&
        !this.formData.participants.includes(this.newParticipant.trim())
      ) {
        this.formData.participants.push(this.newParticipant.trim());
        this.newParticipant = "";
      }
    },
    removeParticipant(index) {
      this.formData.participants.splice(index, 1);
    },
    addParticipant() {
      if (
        this.newParticipant.trim() &&
        !this.formData.participants.includes(this.newParticipant.trim())
      ) {
        this.formData.participants.push(this.newParticipant.trim());
        this.newParticipant = "";
      }
    },
    removeParticipant(index) {
      this.formData.participants.splice(index, 1);
    },
  },
};
</script>

<style scoped>
#form-container {
  width: 70%;
  padding: 20px;
  border-radius: 16px;
  margin: 5% auto 0 auto;
  background-color: var(--color6);
}

.form-field {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea,
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid var(--color5);
  background-color: var(--color6);
  font-family: var(--font-family);
}

textarea {
  resize: vertical;
}

button {
  border-radius: 20px;
  background-color: var(--color3);
  color: var(--color7);
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
}

button:active {
  background-color: var(--color4);
}

.participants-field {
  display: flex;
  flex-direction: column;
}

.selected-participants {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.selected-participant {
  background-color: var(--color3);
  color: var(--color7);
  padding: 5px 10px;
  border-radius: 20px;
  margin: 5px;
  display: flex;
  align-items: center;
}

.selected-participant button {
  background: none;
  border: none;
  color: var(--color7);
  margin-left: 10px;
  cursor: pointer;
}
</style>
