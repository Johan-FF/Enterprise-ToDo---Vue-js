<template>
  <FullCalendar :options="calendarOptions" />
</template>

<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  name: "AppCalendar",
  components: {
    FullCalendar,
  },
  props: {
    editable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        events: [
          { title: "Event 1", start: "2024-05-01" },
          { title: "Event 2", start: "2024-05-02" },
        ],
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
        // eventsSet: this.handleEvents
      },
    };
  },
  methods: {
    handleDateClick(info) {
      if (this.editable) {
        console.log("Agregar evento en la fecha:", info.dateStr);
      } else {
        alert("No tienes permiso para agregar eventos.");
      }
    },
    handleEventClick(info) {
      // Lógica para manejar el clic en un evento
      console.log("Evento:", info.event.title);
    },
  },
};
</script>

<style>
/* @import "@fullcalendar/core/main.css";
@import "@fullcalendar/daygrid/main.css";
@import "@fullcalendar/timegrid/main.css"; */
.fc {
  /* the calendar root */
  max-width: 80%;
  margin: 0 auto;
}
</style>
