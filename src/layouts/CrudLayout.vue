<template>
  <div class="crud-container">
    <div>
      <AppSearch />
      <button @click="changeTypeOfContent" id="add-button">
        {{ typeOfContent === "table" ? "Agregar" : "Volver" }}
      </button>
    </div>

    <template v-if="typeOfContent === 'table'">
      <AppTable :headers="headers" :content="content" />
    </template>
    <template v-if="typeOfContent === 'form'">
      <CreateForm />
    </template>
  </div>
</template>

<script>
import AppSearch from "@/components/AppSearch.vue";
import AppTable from "@/components/AppTable.vue";
import CreateForm from "@/components/CreateForm.vue";

export default {
  name: "CrudLayout",
  data() {
    return {
      typeOfContent: "table",
    };
  },
  components: {
    AppSearch,
    AppTable,
    CreateForm,
  },
  props: {
    headers: {
      default: ["Nombre", "Edad", "Ciudad", ""],
    },
    content: {
      default: [
        { nombre: "Juan", edad: 30, ciudad: "Madrid" },
        { nombre: "Ana", edad: 25, ciudad: "Barcelona" },
        { nombre: "Luis", edad: 35, ciudad: "Sevilla" },
      ],
    },
  },
  methods: {
    changeTypeOfContent() {
      this.typeOfContent = this.typeOfContent === "table" ? "form" : "table";
    },
  },
};
</script>

<style scoped>
.crud-container {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 10% 90%;
}
.crud-container div:nth-child(1) {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#add-button {
  height: fit-content;
  padding: 8px;
  cursor: pointer;
  border-radius: 16px;
  border-width: 1px;
  background-color: var(--color1);
}
</style>
