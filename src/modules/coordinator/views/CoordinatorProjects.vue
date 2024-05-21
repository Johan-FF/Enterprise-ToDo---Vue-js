<template>
  <AdminLayout>
    <div class="coordinator-projects">
      <CrudLayout
        :fields="fieldsNewForm"
        @submit="handleProjectSubmit"
        :content="content"
        :itsProjects="true"
      />
    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from "@/layouts/AdminLayout.vue";
import CrudLayout from "@/layouts/CrudLayout.vue";

export default {
  name: "CoordinatorProjects",
  components: {
    AdminLayout,
    CrudLayout,
  },
  data() {
    return {
      fieldsNewForm: [
        {
          name: "projectName",
          label: "Nombre del Proyecto",
          type: "text",
          placeholder: "Ingrese el nombre del proyecto",
        },
        {
          name: "description",
          label: "Descripción del Proyecto",
          type: "textarea",
          placeholder: "Ingrese una descripción",
        },
        {
          name: "participants",
          label: "Participantes",
          type: "select",
          options: this.getParticipantsOptions(),
          multiple: true,
        },
      ],
      content: [
        { name: "Juan", description: 30, city: "Madrid" },
        { name: "Ana", description: 25, city: "Barcelona" },
        { name: "Luis", description: 35, city: "Sevilla" },
      ],
    };
  },
  methods: {
    getParticipantsOptions() {
      return [
        { value: "user1", text: "Usuario 1" },
        { value: "user2", text: "Usuario 2" },
      ];
    },
    handleProjectSubmit(formData) {
      console.log("Project Form submitted:", formData);
    },
  },
};
</script>

<style scoped>
.coordinator-projects {
  width: 100%;
  height: 100%;
  background-color: var(--color2);
  color: var(--color7);
}
</style>
