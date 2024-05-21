<template>
    <CreateForm :fields="roleFields" @submit="handleRoleSubmit" />
  </template>
  
  <script>
  import CreateForm from './components/CreateForm.vue';
  
  export default {
    components: {
      CreateForm,
    },
    data() {
      return {
        roleFields: [
          { name: 'roleName', label: 'Nombre del Rol', type: 'text', placeholder: 'Ingrese el nombre del rol' },
          { name: 'isCoordinator', label: 'Es Coordinador', type: 'checkbox' },
          { name: 'description', label: 'Descripción', type: 'textarea', placeholder: 'Ingrese una descripción' },
        ],
      };
    },
    methods: {
      handleRoleSubmit(formData) {
        console.log('Role Form submitted:', formData);
    
      },
    },
  };
  </script>
  