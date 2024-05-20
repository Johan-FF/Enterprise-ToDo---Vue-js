<template>
  <div class="crud-container">
    <div>
      <AppSearch />
      <button id="add-button">Add</button>
    </div>
    <AppTable :headers="headers" :content="content" />
  </div>
</template>

<script>
import AppSearch from "@/components/AppSearch.vue";
import AppTable from "@/components/AppTable.vue";

export default {
  name: "CrudLayout",
  components: {
    AppSearch,
    AppTable,
  },
  props: {
    headers: {
      default: ["Nombre", "Edad", "Ciudad"],
    },
    content: {
      default: [
        { nombre: "Juan", edad: 30, ciudad: "Madrid" },
        { nombre: "Ana", edad: 25, ciudad: "Barcelona" },
        { nombre: "Luis", edad: 35, ciudad: "Sevilla" },
      ],
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
