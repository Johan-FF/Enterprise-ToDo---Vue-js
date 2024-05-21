<template>
  <div v-if="isVisible" class="create-event-container">
    <div class="create-event-header">
      <button class="close-btn" @click="closeModal">X</button>
      <h2 class="create-event-title">Crear Nuevo Evento</h2>
      <span v-if="date" class="create-event-date">{{ formatDate(date) }}</span>
    </div>
    <form @submit.prevent="handleSubmit" class="create-event-form">
      <div class="form-group">
        <label for="eventName" class="form-label">Nombre del Evento:</label>
        <input type="text" id="eventName" v-model="formData.eventName" class="form-input" placeholder="Ingrese el nombre del evento" required>
      </div>
      <div class="form-group">
        <label for="projectType" class="form-label">Proyecto:</label>
        <select id="projectType" v-model="formData.projectType" class="form-select" required @change="filterUsers">
          <option value="project1">Proyecto 1</option>
          <option value="project2">Proyecto 2</option>
        </select>
      </div>
      <div class="form-group">
        <label for="eventType" class="form-label">Tipo de Evento:</label>
        <select id="eventType" v-model="formData.eventType" class="form-select" required>
          <option value="task">Tarea</option>
          <option value="meeting">Reunión</option>
          <option value="event">Evento</option>
        </select>
      </div>
      <div class="form-group">
        <label for="description" class="form-label">Descripción:</label>
        <textarea id="description" v-model="formData.description" class="form-textarea" placeholder="Ingrese una descripción"></textarea>
      </div>
      <div class="form-group">
        <label for="time" class="form-label">Hora:</label>
        <input type="time" id="time" v-model="formData.time" class="form-input" required>
      </div>
      <div class="form-group">
        <label for="participants" class="form-label">Participantes:</label>
        <div class="participants-field">
          <div class="selected-participants">
            <div v-for="(participant, index) in formData.participants" :key="index" class="selected-participant">
              {{ participant }}
              <button type="button" @click="removeParticipant(index)">x</button>
            </div>
          </div>
          <select v-model="selectedParticipants" class="form-select" multiple>
            <option v-for="user in filteredUsers" :value="user" :key="user">{{ user }}</option>
          </select>
          <button type="button" @click="addParticipants" class="btn-add">Agregar</button>
        </div>
      </div>
      <div class="form-group">
        <label for="meetingLink" class="form-label">Link de la Reunión (opcional):</label>
        <input type="text" id="meetingLink" v-model="formData.meetingLink" class="form-input" placeholder="Ingrese el link de la reunión">
      </div>
      <button type="submit" class="btn-submit">Crear Evento</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isVisible: true,
      formData: {
        eventName: '',
        projectType: '',
        eventType: '',
        description: '',
        time: '',
        participants: [],
        meetingLink: ''
      },
      selectedParticipants: [],
      usersByProject: {
        project1: ['Usuario 1', 'Usuario 2'],
        project2: ['Usuario 3', 'Usuario 4']
      },
      filteredUsers: []
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('create-event', this.formData);
    },
    filterUsers() {
      this.filteredUsers = this.usersByProject[this.formData.projectType] || [];
      this.selectedParticipants = [];
    },
    addParticipants() {
      this.formData.participants = [
        ...new Set([...this.formData.participants, ...this.selectedParticipants])
      ];
      this.selectedParticipants = [];
    },
    removeParticipant(index) {
      this.formData.participants.splice(index, 1);
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    },
    closeModal() {
      this.isVisible = false;
      this.$emit('close');
    }
  },
  watch: {
    'formData.projectType': 'filterUsers'
  },
  created() {
    this.filterUsers();
  }
};
</script>

<style scoped>
.create-event-container {
  max-width: 400px;
  margin: 0 auto;
}

.create-event-title {
  font-size: var(--subtitle-font-size);
  margin-bottom: var(--subtitle-margin-bottom);
}
.create-event-date {
  font-size: var(--small-font-size);
  color: var(--secondary-text-color);
}
.create-event-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: var(--button-font-size);
  color: var(--button-color);
  cursor: pointer;
}

.create-event-form {
  background-color: var(--input-background-color);
  padding: 20px;
  border-radius: var(--input-border-radius);
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  font-weight: bold;
  margin-bottom: 5px;
}

.form-input,
.form-select,
.form-textarea {
  width: var(--input-width);
  padding: var(--input-padding);
  border-radius: var(--input-border-radius);
  border: 1px solid var(--input-border-color);
  font-size: var(--input-font-size);
}

.btn-submit {
  background-color: var(--button-background-color);
  color: var(--button-color);
  border: none;
  padding: var(--button-padding);
  border-radius: var(--button-border-radius);
  cursor: pointer;
  font-size: var(--button-font-size);
}

.btn-submit:hover {
  background-color: var(--button-active-background-color);
}

.participants-field {
  display: flex;
  flex-direction: column;
}

.selected-participants {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.selected-participant {
  background-color: var(--button-background-color);
  color: var(--button-color);
  padding: 5px 10px;
  border-radius: 20px;
  margin: 5px;
  display: flex;
  align-items: center;
}

.selected-participant button {
  background: none;
  border: none;
  color: var(--button-color);
  margin-left: 10px;
  cursor: pointer;
}

.btn-add {
  background-color: var(--button-background-color);
  color: var(--button-color);
  border: none;
  padding: var(--button-padding);
  border-radius: var(--button-border-radius);
  cursor: pointer;
  font-size: var(--button-font-size);
  margin-top: 10px;
}

.btn-add:hover {
  background-color: var(--button-active-background-color);
}
</style>
