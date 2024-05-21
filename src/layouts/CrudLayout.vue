<template>
  <div class="crud-container">
    <template v-if="viewAddButton">
      <button @click="changeTypeOfContent" id="add-button">
        {{ typeOfContent === "table" ? "Agregar" : "Volver" }}
      </button>
    </template>

    <template v-if="typeOfContent === 'table'">
      <AppTable
        :headers="headers"
        :content="localContent"
        :itsProjects="itsProjects"
        :typeOfContent="typeOfContent"
      />
    </template>
    <template v-else-if="typeOfContent === 'form'">
      <CreateForm :fields="fields" />
    </template>
  </div>
</template>

<script>
import AppTable from "@/components/AppTable.vue";
import CreateForm from "@/components/CreateForm.vue";

export default {
  name: "CrudLayout",
  data() {
    return {
      typeOfContent: "table",
      currentSearch: "",
      localContent: this.content,
    };
  },
  computed: {
    filteredItems() {
      return this.content.filter((item) => {
        const itemValuesString = Object.values(item).join(" ").toLowerCase();
        return itemValuesString.includes(this.currentSearch.toLowerCase());
      });
    },
  },
  components: {
    AppTable,
    CreateForm,
  },
  props: {
    headers: {
      default: ["Nombre", "Descripción", "Participantes", ""],
    },
    content: {
      require: true,
    },
    fields: {
      require: true,
    },
    viewAddButton: {
      default: true,
    },
    itsProjects: {
      default: false,
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
}
.crud-container div:nth-child(1) {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#add-button {
  position: fixed;
  right: 8%;
  height: fit-content;
  padding: 8px;
  cursor: pointer;
  border-radius: 16px;
  border-width: 1px;
  background-color: var(--color1);
}
</style>
