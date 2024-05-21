<template>
    <div class="event-details-container">
      <h3>{{ event.title }}</h3>
      <p><strong>Tipo de Proyecto:</strong> {{ event.projectType }}</p>
      <p><strong>Tipo de Evento:</strong> {{ event.eventType }}</p>
      <p><strong>Descripción:</strong> {{ event.description }}</p>
      <p><strong>Hora:</strong> {{ event.time }}</p>
      <p><strong>Participantes:</strong> {{ event.participants.join(', ') }}</p>
      <p><strong>Link de la Reunión:</strong> <a :href="event.meetingLink">{{ event.meetingLink }}</a></p>
    
      <button class="edit-button" @click="editEvent">Editar Evento</button>
      <button class="delete-button" @click="deleteEvent">Borrar Evento</button>
      <button class="close-button" @click="closeEventDetails">X</button>
      <!-- Editar Modal -->
      <div class="edit-modal" v-if="isEditModalVisible">
        <h3>Editar Evento</h3>
        <form @submit.prevent="updateEvent" class="edit-event-form">
          <div class="form-group">
            <label for="projectType" class="form-label">Proyecto:</label>
            <select id="projectType" v-model="editedEvent.projectType" class="form-select" required>
              <option value="project1">Proyecto 1</option>
              <option value="project2">Proyecto 2</option>
            </select>
          </div>
          <div class="form-group">
            <label for="eventType" class="form-label">Tipo de Evento:</label>
            <select id="eventType" v-model="editedEvent.eventType" class="form-select" required>
              <option value="task">Tarea</option>
              <option value="meeting">Reunión</option>
              <option value="event">Evento</option>
            </select>
          </div>
          <div class="form-group">
            <label for="description" class="form-label">Descripción:</label>
            <textarea id="description" v-model="editedEvent.description" class="form-textarea" placeholder="Ingrese una descripción" required></textarea>
          </div>
          <div class="form-group">
            <label for="time" class="form-label">Hora:</label>
            <input type="time" id="time" v-model="editedEvent.time" class="form-input" required>
          </div>
          <div class="form-group">
            <label for="participants" class="form-label">Participantes:</label>
            <select v-model="editedEvent.participants" class="form-select" multiple required>
              <option v-for="user in filteredUsers" :value="user" :key="user">{{ user }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="meetingLink" class="form-label">Link de la Reunión (opcional):</label>
            <input type="text" id="meetingLink" v-model="editedEvent.meetingLink" class="form-input" placeholder="Ingrese el link de la reunión">
          </div>
          <button type="submit" class="btn-submit">Guardar Cambios</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      event: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        isEditModalVisible: false,
        editedEvent: { ...this.event },
        filteredUsers: ['Usuario 1', 'Usuario 2'] 
      };
    },
    methods: {
      editEvent() {
        this.isEditModalVisible = true;
      },
      updateEvent() {
        this.isEditModalVisible = false;
      },
      deleteEvent() {
      this.$emit('delete-event', this.event);
      },
      closeEventDetails() {
      this.$emit('close');
      }
    }
  };
  </script>
  <style scoped>
  .event-details-container {
    font-family: var(--font-family);
  }
  
  h3 {
    font-size: var(--titulo-aplicacion-font-size);
    font-weight: var(--titulo-aplicacion-font-weight);
    color: var(--titulo-aplicacion-color);
    margin-bottom: 20px;
  }
  
  .edit-button,
  .delete-button {
    border-radius: var(--button-border-radius);
    background-color: var(--button-background-color);
    color: var(--button-color);
    padding: var(--button-padding);
    font-size: var(--button-font-size);
    cursor: pointer;
    margin-right: 10px;
  }
  
  .edit-button:hover,
  .delete-button:hover {
    background-color: var(--button-active-background-color);
  }
  
  .edit-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color6);
    padding: 20px;
    border-radius: var(--input-border-radius);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .edit-modal h3 {
    text-align: center;
    color: var(--titulo-aplicacion-color);
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-label {
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--color7);
  }
  
  .form-input,
  .form-select,
  .form-textarea {
    width: 100%;
    padding: var(--input-padding);
    border-radius: var(--input-border-radius);
    border: 1px solid var(--input-border-color);
    font-size: var(--input-font-size);
  }
  
  .form-textarea {
    resize: vertical;
  }
  
  .btn-submit {
    background-color: var(--button-background-color);
    color: var(--button-color);
    border: none;
    padding: var(--button-padding);
    border-radius: var(--button-border-radius);
    cursor: pointer;
    font-size: var(--button-font-size);
    margin-top: 10px;
  }
  
  .btn-submit:hover {
    background-color: var(--button-active-background-color);
  }
  </style>
  