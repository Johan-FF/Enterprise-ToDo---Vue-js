<template>
    <CreateForm :fields="userFields" @submit="handleUserSubmit" />
  </template>
  
  <script>
  import CreateForm from './components/CrateForm.vue';
  
  export default {
    components: {
      CreateForm,
    },
    data() {
      return {
        userFields: [
          { name: 'firstName', label: 'Nombre', type: 'text', placeholder: 'Ingrese su nombre' },
          { name: 'lastName', label: 'Apellido', type: 'text', placeholder: 'Ingrese su apellido' },
          { name: 'email', label: 'Correo', type: 'email', placeholder: 'Ingrese su correo' },
          { name: 'cedula', label: 'Cédula', type: 'text', placeholder: 'Ingrese su cédula' },
          { 
            name: 'role', 
            label: 'Rol', 
            type: 'select', 
            options: [
              { value: 'admin', text: 'Administrador' },
              { value: 'user', text: 'Usuario' },
            ] 
          },
        ],
      };
    },
    methods: {
      handleUserSubmit(formData) {
        console.log('User Form submitted:', formData);
      },
    },
  };
  </script>
  