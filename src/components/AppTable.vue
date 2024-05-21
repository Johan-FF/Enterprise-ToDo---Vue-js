<template>
  <div id="table-container">
    <template v-if="typeOfContent === 'table'">
      <div id="search-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.5rem"
          viewBox="0 0 512 512"
        >
          <path
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
          />
        </svg>
        <input
          v-model="search"
          type="search"
          name="search"
          id="search"
          placeholder="Buscar..."
        />
      </div>
    </template>
    <table>
      <thead>
        <tr>
          <th v-for="(header, index) of headers" :key="`${header} - ${index}`">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(element, i) of filteredItems"
          :key="`element - ${i}`"
          :id="`element - ${i}`"
          @click="handleProjectsClick(element.name)"
        >
          <td
            v-for="(value, j) in Object.values(element)"
            :key="`${value} - ${j}`"
          >
            {{ value }}
          </td>
          <td>
            <template
              v-if="generalRole === 'coordinator' || generalRole === 'admin'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5rem"
                style="margin-right: 10px"
                viewBox="0 0 512 512"
                @click="edit(i)"
                :id="`editable - ${i}`"
              >
                <path
                  d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5rem"
                viewBox="0 0 448 512"
                @click="del(i)"
              >
                <path
                  d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                />
              </svg>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AppTable",
  data() {
    return {
      currentIndexEdit: -1,
      localContent: this.content,
      search: "",
    };
  },
  computed: {
    ...mapState({
      generalRole: (state) => state.user?.generalRole || "",
    }),
    filteredItems() {
      return this.localContent.filter((item) => {
        return Object.values(item).some((value) =>
          String(value).toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
  },
  props: {
    headers: {
      required: true,
    },
    content: {
      required: true,
    },
    itsProjects: {
      default: false,
    },
    typeOfContent: {
      default: "table",
    },
  },
  methods: {
    del(index) {
      this.localContent.splice(index, 1);
    },
    edit(index) {
      if (this.currentIndexEdit === -1) {
        this.currentIndexEdit = index;
        this.editElement(index, true, 2);
      } else {
        this.editElement(this.currentIndexEdit, false, 3);
        this.currentIndexEdit = -1;
      }
    },
    editElement(index, editable, colorNumber) {
      const editButton = document.getElementById(`editable - ${index}`);
      const tr = document.getElementById(`element - ${index}`);
      const tds = tr.getElementsByTagName("td");

      editButton.style.backgroundColor = `var(--color${
        colorNumber == 2 ? 2 : 4
      })`;
      for (var i = 0; i < tds.length - 1; i++) {
        const td = tds[i];
        td.contentEditable = editable;
        if (!editable) td.style.removeProperty("background-color");
        else td.style.backgroundColor = `var(--color${colorNumber})`;
      }
    },
    handleProjectsClick(name) {
      if (!this.itsProjects) return;
      this.$router.push(`/tasks/${name}`);
    },
  },
};
</script>

<style scoped>
#search-container {
  width: 75%;
  height: 100%;
  border-radius: 16px;
  background-color: var(--color3);
  display: flex;
  justify-content: center;
  align-items: center;
}
#search-container svg {
  padding: 2px;
  border-radius: 16px;
  cursor: pointer;
  background-color: var(--color4);
}
#search-container input {
  padding-left: 10%;
  width: 90%;
  border-radius: 16px;
  padding: 8px;
}

#table-container {
  width: 100%;
  max-width: 100%;
  height: 64vh;
  max-height: 64vh;
  overflow: auto;
  display: grid;
  grid-template-rows: 10% 90%;
}
/* Estilo general de la barra de desplazamiento */
#table-container::-webkit-scrollbar {
  width: 12px; /* Ancho de la barra de desplazamiento vertical */
  height: 12px; /* Alto de la barra de desplazamiento horizontal */
}

/* Fondo de la barra de desplazamiento */
#table-container::-webkit-scrollbar-track {
  background: var(--color2); /* Naranja pastel */
}

/* Estilo del thumb (la parte movible) */
#table-container::-webkit-scrollbar-thumb {
  background: var(--color3); /* Rosa pastel */
  border-radius: 6px; /* Bordes redondeados */
}

/* Estilo del thumb cuando se encuentra en estado hover */
#table-container::-webkit-scrollbar-thumb:hover {
  background: var(--color4); /* Rosa salmón */
}

/* Opcional: Cambiar el color del thumb cuando es activo */
#table-container::-webkit-scrollbar-thumb:active {
  background: var(--color5); /* Morado claro */
}
table {
  margin-top: 16px;
  width: 100%;
  max-height: 100%;
  border-collapse: separate;
  border-spacing: 0 4px;
}

tr {
  width: 100%;
  border-radius: 32px;
  box-shadow: 0 0 10px black;
  overflow: hidden;
  cursor: pointer;
}

tr td {
  border: none;
}

tr:hover td {
  background-color: var(--color1);
}

tr:hover td {
  background-color: var(--color1);
}

th {
  background-color: var(--color4); /* Rosa salmón */
  color: var(--color6); /* Blanco */
}

td {
  background-color: var(--color3); /* Rosa pastel */
  color: var(--color7); /* Azul oscuro */
}

th {
  background-color: var(--color4);
}

td {
  background-color: var(--color3);
}

tr td:last-child,
tr th:last-child {
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
  width: 50px;
}

tr td:nth-child(1),
tr th:nth-child(1) {
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
}

tr td:last-child svg {
  padding: 2px;
  border-radius: 4px;
  cursor: pointer;
  background-color: var(--color4); /* Rosa salmón */
  color: var(--color6); /* Blanco */
}
</style>
