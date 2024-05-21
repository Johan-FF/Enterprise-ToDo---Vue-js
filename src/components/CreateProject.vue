<template>
    <CreateForm :fields="projectFields" @submit="handleProjectSubmit" />
  </template>
  
  <script>
  import CreateForm from './components/CreateForm.vue';
  
  export default {
    components: {
      CreateForm,
    },
    data() {
      return {
        projectFields: [
          { name: 'projectName', label: 'Nombre del Proyecto', type: 'text', placeholder: 'Ingrese el nombre del proyecto' },
          { name: 'description', label: 'Descripción del Proyecto', type: 'textarea', placeholder: 'Ingrese una descripción' },
          { name: 'participants', label: 'Participantes', type: 'select', options: this.getParticipantsOptions(), multiple: true },
        ],
      };
    },
    methods: {
      getParticipantsOptions() {
        return [
          { value: 'user1', text: 'Usuario 1' },
          { value: 'user2', text: 'Usuario 2' },
        ];
      },
      handleProjectSubmit(formData) {
        console.log('Project Form submitted:', formData);
      },
    },
  };
  </script>
  