<template>
    <div class="event-form">
      <label for="eventName">Nombre:</label>
      <input type="text" v-model="eventName" id="eventName" />
  
      <label for="eventDate">Fecha:</label>
      <input type="datetime-local" v-model="eventDate" id="eventDate" />
  
      <label for="eventDescription">Descripción:</label>
      <textarea v-model="eventDescription" id="eventDescription"></textarea>
  
      <label for="meetingLink">Link de Reunión:</label>
      <input type="text" v-model="meetingLink" id="meetingLink" />
  
      <label>Participantes:</label>
      <ul>
        <li v-for="(participant, index) in participants" :key="index">
          {{ participant }}
          <button @click="removeParticipant(index)">Eliminar</button>
        </li>
      </ul>
      <input type="text" v-model="newParticipant" />
      <button @click="addParticipant">Agregar Participante</button>
  
      <button @click="saveEvent">Guardar Evento</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "EventForm",
    data() {
      return {
        eventName: "",
        eventDate: "",
        eventDescription: "",
        meetingLink: "",
        participants: [],
        newParticipant: "",
      };
    },
    methods: {
      addParticipant() {
        if (this.newParticipant.trim() !== "") {
          this.participants.push(this.newParticipant);
          this.newParticipant = "";
        }
      },
      removeParticipant(index) {
        this.participants.splice(index, 1);
      },
      saveEvent() {
        const newEvent = {
          title: this.eventName,
          start: this.eventDate,
          description: this.eventDescription,
          link: this.meetingLink,
          participants: this.participants,
        };
        // Aquí puedes emitir un evento para enviar el nuevo evento al componente padre
        this.$emit("save-event", newEvent);
        // También puedes realizar otras acciones, como limpiar el formulario
        this.clearForm();
      },
      clearForm() {
        this.eventName = "";
        this.eventDate = "";
        this.eventDescription = "";
        this.meetingLink = "";
        this.participants = [];
        this.newParticipant = "";
      },
    },
  };
  </script>
  
  <style scoped>
  .event-form {
    max-width: 400px;
    margin: 0 auto;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  textarea,
  button {
    width: 100%;
    margin-bottom: 10px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 5px;
  }
  </style>
  