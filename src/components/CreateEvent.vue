<template>
    <CreateForm :fields="eventFields" @submit="handleEventSubmit" />
  </template>
  
  <script>
  import CreateForm from './components/CreateForm.vue';
  
  export default {
    components: {
      CreateForm,
    },
    data() {
      return {
        eventFields: [
          { name: 'projectType', label: 'Tipo de Proyecto', type: 'select', options: this.getProjectOptions() },
          { name: 'eventType', label: 'Tipo de Evento', type: 'select', options: [
              { value: 'task', text: 'Tarea' },
              { value: 'meeting', text: 'Reunión' },
              { value: 'event', text: 'Evento' },
            ]
          },
          { name: 'description', label: 'Descripción', type: 'textarea', placeholder: 'Ingrese una descripción' },
          { name: 'time', label: 'Hora', type: 'time' },
          { name: 'participants', label: 'Participantes', type: 'select', options: this.getParticipantsOptions(), multiple: true },
          { name: 'meetingLink', label: 'Link de la Reunión (opcional)', type: 'text', placeholder: 'Ingrese el link de la reunión' },
        ],
      };
    },
    methods: {
      getProjectOptions() {
        return [
          { value: 'project1', text: 'Proyecto 1' },
          { value: 'project2', text: 'Proyecto 2' },
        ];
      },
      getParticipantsOptions() {
        return [
          { value: 'user1', text: 'Usuario 1' },
          { value: 'user2', text: 'Usuario 2' },
        ];
      },
      handleEventSubmit(formData) {
        console.log('Event Form submitted:', formData);
      },
    },
  };
  </script>
  