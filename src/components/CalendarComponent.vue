<template>
    <FullCalendar
      :plugins="calendarPlugins"
      :events="calendarEvents"
      :editable="editable"
      @dateClick="handleDateClick"
      @eventClick="handleEventClick"
    />
  </template>
  
  <script>
  import FullCalendar from '@fullcalendar/vue3';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import timeGridPlugin from '@fullcalendar/timegrid';
  import interactionPlugin from '@fullcalendar/interaction';
  
  export default {
    name: 'CalendarComponent',
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
        calendarPlugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        calendarEvents: [
          { title: 'Event 1', start: '2024-05-01' },
          { title: 'Event 2', start: '2024-05-02' },
        ],
      };
    },
    methods: {
      handleDateClick(info) {
        if (this.editable) {
          console.log('Agregar evento en la fecha:', info.dateStr);
        } else {
          alert('No tienes permiso para agregar eventos.');
        }
      },
      handleEventClick(info) {
        // Lógica para manejar el clic en un evento
        console.log('Evento:', info.event.title);
      },
    },
  };
  </script>
  
  <style>
  @import '@fullcalendar/core/main.css';
  @import '@fullcalendar/daygrid/main.css';
  @import '@fullcalendar/timegrid/main.css';
  </style>
  