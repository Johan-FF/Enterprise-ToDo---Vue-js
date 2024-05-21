<!-- src\views\HomeView.vue -->
<template>
  <div class="home-view">
    <AppHeader />
    <section id="presentation">
      <div id="card" class="card">
        <div class="content">
          <span
            >En OrgComp, entendemos que la gestión efectiva de proyectos, tareas
            y reuniones es fundamental para el éxito y la eficiencia de
            cualquier organización.</span
          >
        </div>
      </div>
      <div id="card" class="card">
        <div class="content">
          <span
            >Nos dedicamos apasionadamente a simplificar y optimizar estos
            procesos para empresas de todos los tamaños y sectores.</span
          >
        </div>
      </div>
      <div id="card" class="card">
        <div class="content">
          <span
            >Con nuestro enfoque centrado en el cliente y nuestra amplia
            experiencia en gestión de proyectos, ofrecemos soluciones
            personalizadas que permiten a nuestros clientes maximizar su
            productividad, reducir los tiempos de entrega y mejorar la
            colaboración entre equipos.</span
          >
        </div>
      </div>
    </section>
    <div>
      <button @click="navigate(`register`)" class="button">Regístrate</button>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "HomeView",
  components: {
    AppHeader,
  },
  methods: {
    navigate(page) {
      this.$router.push({ name: page });
    },
  },
};
</script>

<style scoped>
.home-view {
  background-color: var(--color6);
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 15% 65% 20%;
}

#presentation {
  display: flex;
  justify-content: space-evenly;
  padding-block: 8%;
}

.button {
  border-radius: 16px;
  font-family: var(--font-comfortaa);
  background-color: var(--color1);
  color: var(--color7);
  font-size: var(--subtitle-font-size);
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  margin-inline: 5%;
}

.button:active {
  background-color: var(--color4);
}

.card {
  background: var(--color5);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 3px 1px #00000088;
}

.card .content {
  border-radius: 5px;
  background: var(--color5);
  width: 186px;
  height: 250px;
  z-index: 1;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content::before {
  opacity: 0;
  transition: opacity 300ms;
  content: " ";
  display: block;
  background: white;
  width: 50px;
  height: 50px;
  position: absolute;
  filter: blur(50px);
}

.card:hover .content::before {
  opacity: 1;
}

.card::before {
  opacity: 0;
  content: " ";
  position: absolute;
  display: block;
  width: 120px;
  height: 360px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--color4),
    var(--color1),
    transparent
  );
  transition: opacity 300ms;
  animation: rotation_9018 3000ms infinite linear;
  animation-play-state: paused;
}

.card:hover::before {
  opacity: 1;
  animation-play-state: running;
}

.card::after {
  position: absolute;
  content: " ";
  display: block;
  width: 190px;
  height: 254px;
  background: var(--color5) 33;
  backdrop-filter: blur(50px);
}

@keyframes rotation_9018 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
