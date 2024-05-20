<template>
  <div id="table-container">
    <table>
      <thead>
        <tr>
          <th v-for="(header, index) of headers" :key="`${header} - ${index}`">
            {{ header }}
          </th>
        </tr>
      </thead>
      <thead>
        <tr v-for="(element, i) of content" :key="`element - ${i}`">
          <td
            v-for="(value, j) in Object.values(element)"
            :key="`${value} - ${j}`"
          >
            {{ value }}
          </td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  name: "AppTable",
  props: {
    headers: {
      required: true,
    },
    content: {
      required: true,
    },
  },
};
</script>

<style scoped>
#table-container {
  width: 100%;
  max-width: 100%;
  height: 80%;
  max-height: 80%;
  overflow: auto;
}
/* Estilo general de la barra de desplazamiento */
#table-container::-webkit-scrollbar {
  width: 12px; /* Ancho de la barra de desplazamiento vertical */
  height: 12px; /* Alto de la barra de desplazamiento horizontal */
}

/* Fondo de la barra de desplazamiento */
#table-container::-webkit-scrollbar-track {
  background: var(--color2); /* Color de fondo del track */
}

/* Estilo del thumb (la parte movible) */
#table-container::-webkit-scrollbar-thumb {
  background: var(--color3); /* Color del thumb */
  border-radius: 6px; /* Bordes redondeados */
}

/* Estilo del thumb cuando se encuentra en estado hover */
#table-container::-webkit-scrollbar-thumb:hover {
  background: var(--color4); /* Color del thumb en hover */
}

/* Opcional: Cambiar el color del thumb cuando es activo */
#table-container::-webkit-scrollbar-thumb:active {
  background: var(--color5); /* Color del thumb cuando es activo */
}
table {
  margin-top: 16px;
}
</style>
