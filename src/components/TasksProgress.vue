<template>
  <div id="tasks-progress">
    <section id="initial">
      <div
        class="card"
        v-for="(element, i) of localInitial"
        :key="`element - ${i}`"
        :id="`element - ${element.id}`"
      >
        <div>
          <span>{{ element.title }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5rem"
            viewBox="0 0 576 512"
          >
            <path
              d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
            />
          </svg>
        </div>
        <p>{{ element.description }}</p>
        <button @click="toProgress(i)">En progreso</button>
      </div>
    </section>
    <section id="in-progress">
      <div
        class="card"
        v-for="(element, i) of localInProgress"
        :key="`element - ${i}`"
        :id="`element - ${element.id}`"
      >
        <div>
          <span>{{ element.title }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5rem"
            viewBox="0 0 576 512"
          >
            <path
              d="M309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5zM288 384.7V79.1l52.5 108.1c3.5 7.1 10.2 12.1 18.1 13.3l118.3 17.5L391 303c-5.5 5.5-8.1 13.3-6.8 21l20.2 119.6L299.2 387.5c-3.5-1.9-7.4-2.8-11.2-2.8z"
            />
          </svg>
        </div>
        <p>{{ element.description }}</p>
        <div>
          <button @click="returnToInitial(i)">Volver a iniciar</button>
          <button @click="toComplete(i)">Finalizar</button>
        </div>
      </div>
    </section>
    <section id="completed">
      <div
        class="card"
        v-for="(element, i) of localCompleted"
        :key="`element - ${i}`"
        :id="`element - ${element.id}`"
      >
        <div>
          <span>{{ element.title }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5rem"
            viewBox="0 0 576 512"
          >
            <path
              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
            />
          </svg>
        </div>
        <p>{{ element.description }}</p>
        <button @click="del(i)">Borrar</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "TasksProgress",
  data() {
    return {
      localInitial: this.initial,
      localInProgress: this.inProgress,
      localCompleted: this.completed,
    };
  },
  props: {
    initial: {
      default: [
        {
          id: 1,
          title: "Tarea 1",
          description: "hacer el backend",
        },
        {
          id: 2,
          title: "Tarea 2",
          description: "completar el informe",
        },
        {
          id: 3,
          title: "Tarea 3",
          description: "hacer la máquina de turing",
        },
        {
          id: 4,
          title: "Tarea 2",
          description: "completar el informe",
        },
        {
          id: 5,
          title: "Tarea 3",
          description: "hacer la máquina de turing",
        },
      ],
    },
    inProgress: {
      default: [
        {
          id: 6,
          title: "Tarea 4",
          description: "hacer el frontend",
        },
        {
          id: 7,
          title: "Tarea 5",
          description: "hacer la base de datos",
        },
      ],
    },
    completed: {
      default: [
        {
          id: 8,
          title: "Tarea 6",
          description: "finalizar primer corte",
        },
        {
          id: 9,
          title: "Tarea 7",
          description: "finalizar segundo corte",
        },
        {
          id: 10,
          title: "Tarea 8",
          description: "inscribirme a intersemestral",
        },
        {
          id: 11,
          title: "Tarea 7",
          description: "finalizar segundo corte",
        },
        {
          id: 12,
          title: "Tarea 8",
          description: "inscribirme a intersemestral",
        },
        {
          id: 13,
          title: "Tarea 7",
          description: "finalizar segundo corte",
        },
        {
          id: 14,
          title: "Tarea 8",
          description: "inscribirme a intersemestral",
        },
      ],
    },
  },
  methods: {
    toProgress(index) {
      const card = this.localInitial.splice(index, 1)[0];
      this.localInProgress.push(card);
    },
    returnToInitial(index) {
      const card = this.localInProgress.splice(index, 1)[0];
      this.localInitial.push(card);
    },
    toComplete(index) {
      const card = this.localInProgress.splice(index, 1)[0];
      this.localCompleted.push(card);
    },
    del(index) {
      this.localCompleted.splice(index, 1); // back
    },
  },
};
</script>

<style scoped>
#tasks-progress {
  width: 100%;
  height: 90%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
}

section {
  padding: 2%;
  height: 60vh;
  overflow-y: auto;
}

/* Estilo general de la barra de desplazamiento */
section::-webkit-scrollbar {
  width: 12px; /* Ancho de la barra de desplazamiento vertical */
  height: 12px; /* Alto de la barra de desplazamiento horizontal */
}

/* Fondo de la barra de desplazamiento */
section::-webkit-scrollbar-track {
  background: var(--color2); /* Color de fondo del track */
}

/* Estilo del thumb (la parte movible) */
section::-webkit-scrollbar-thumb {
  background: var(--color3); /* Color del thumb */
  border-radius: 6px; /* Bordes redondeados */
}

/* Estilo del thumb cuando se encuentra en estado hover */
section::-webkit-scrollbar-thumb:hover {
  background: var(--color4); /* Color del thumb en hover */
}

/* Opcional: Cambiar el color del thumb cuando es activo */
section::-webkit-scrollbar-thumb:active {
  background: var(--color5); /* Color del thumb cuando es activo */
}

.card {
  border-radius: 32px;
  background-color: var(--color4);
  margin-bottom: 16px;
  padding-block: 5%;
}

.card span {
  font-weight: 900;
}

.card div {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

button {
  border-radius: 16px;
  font-family: var(--font-comfortaa);
  background-color: var(--color1);
  color: var(--color7);
  border: none;
  cursor: pointer;
  text-decoration: none;
  margin-inline: 5%;
}
</style>
