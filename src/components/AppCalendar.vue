<template>
  <div id="app-calendar">
    <FullCalendar :options="calendarOptions" />
    <div id="modal-main" v-if="isCreateModalVisible || isDetailModalVisible">
      <div id="modal-container">
        <div v-if="isCreateModalVisible">
          <CreateEvent :date="selectedDate" @create-event="addEvent" @close="isCreateModalVisible = false" />
        </div>
        <div v-if="isDetailModalVisible">
          <EventDetails
            :event="selectedEvent"
            @edit-event="openEditModal"
            @delete-event="deleteEvent"
            @close="closeEventDetails"
          />
        </div>
      </div>
    </div>
    <div id="edit-modal" v-if="isEditModalVisible">
      <CreateForm :fields="editFields" @submit="updateEvent" />
    </div>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import CreateEvent from "./CreateEvent.vue";
import EventDetails from "./EventDetails.vue";
import CreateForm from "./CreateForm.vue";
import { mapGetters } from "vuex";

export default {
  name: "AppCalendar",
  components: {
    FullCalendar,
    CreateEvent,
    EventDetails,
    CreateForm,
  },
  data() {
    return {
      isCreateModalVisible: false,
      isDetailModalVisible: false,
      isEditModalVisible: false,
      selectedDate: "",
      selectedEvent: null,
      editFields: [],
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        events: [],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        initialView: "dayGridMonth",
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateClick,
        eventClick: this.handleEventClick,
      },
    };
  },
  computed: {
    ...mapGetters(["generalRole"]),
  },
  methods: {
    handleDateClick(info) {
      const selectedDatetime = new Date(info.startStr);
      const currentDatetime = new Date();
      if (selectedDatetime < currentDatetime) {
        console.warn("No se pueden agregar eventos en el pasado");
        return;
      }
      if (this.generalRole === "coordinator") {
        this.selectedDate = info.startStr;
        this.isCreateModalVisible = true;
      } else {
        console.warn("Solo los coordinadores pueden agregar eventos");
      }
    },
    handleEventClick(info) {
      this.selectedEvent = { ...info.event.extendedProps };
      this.selectedEvent.title = info.event.title;
      this.isDetailModalVisible = true;
    },
    addEvent(eventData) {
      if (eventData.eventName) {
        const newEvent = {
          ...eventData,
          start: this.selectedDate,
          title: eventData.eventName,
        };
        this.calendarOptions.events.push(newEvent);
        this.isCreateModalVisible = false;
      } else {
        console.error("El nombre del evento no está definido");
      }
    },
    openEditModal(event) {
      if (this.generalRole === "coordinator") {
        this.editFields = [
          {
            name: "eventName",
            label: "Nombre del Evento",
            type: "text",
            placeholder: "Ingrese el nombre del evento",
            value: event.title,
          },
          {
            name: "projectType",
            label: "Proyecto",
            type: "select",
            options: [
              { text: "Proyecto 1", value: "project1" },
              { text: "Proyecto 2", value: "project2" },
            ],
            value: event.projectType,
          },
          {
            name: "eventType",
            label: "Tipo de Evento",
            type: "select",
            options: [
              { text: "Tarea", value: "task" },
              { text: "Reunión", value: "meeting" },
              { text: "Evento", value: "event" },
            ],
            value: event.eventType,
          },
          {
            name: "description",
            label: "Descripción",
            type: "textarea",
            placeholder: "Ingrese una descripción",
            value: event.description,
          },
          { name: "time", label: "Hora", type: "time", value: event.time },
          {
            name: "participants",
            label: "Participantes",
            type: "select",
            options: [
              { text: "Usuario 1", value: "user1" },
              { text: "Usuario 2", value: "user2" },
            ],
            multiple: true,
            value: event.participants,
          },
          {
            name: "meetingLink",
            label: "Link de la Reunión",
            type: "text",
            placeholder: "Ingrese el link de la reunión",
            value: event.meetingLink,
          },
        ];
        this.isEditModalVisible = true;
        this.isDetailModalVisible = false;
      } else {
        console.warn("Solo los coordinadores pueden editar eventos");
      }
    },
    updateEvent(updatedEvent) {
      const index = this.calendarOptions.events.findIndex(
        (event) => event.title === this.selectedEvent.title
      );
      if (index !== -1) {
        this.calendarOptions.events.splice(index, 1, {
          ...updatedEvent,
          title: updatedEvent.eventName,
          start: this.selectedEvent.start,
        });
      }
      this.isEditModalVisible = false;
    },
    deleteEvent(event) {
      if (this.generalRole === "coordinator") {
        this.calendarOptions.events = this.calendarOptions.events.filter(
          (e) => e.title !== event.title
        );
        this.isDetailModalVisible = false;
      } else {
        console.warn("Solo los coordinadores pueden eliminar eventos");
      }
    },
    closeEventDetails() {
      this.isDetailModalVisible = false;
      this.selectedEvent = null;
      this.isCreateModalVisible = false; // Add this line
      this.isEditModalVisible = false;
    },
  },
};
</script>

<style>
#modal-main,
#edit-modal {
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

#modal-container,
#edit-modal {
  width: 70vh;
  max-height: 90vh;
  overflow-y: auto;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
}

.fc {
  max-width: 80%;
  margin: 0 auto;
}

#app-calendar {
  padding: 1%;
  border-radius: 32px;
  background-color: var(--color3);
}
</style>
