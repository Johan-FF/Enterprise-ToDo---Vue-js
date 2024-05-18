<template>
  <div class="app-header">
    <h1>
      <span :style="orgStyle">Org</span>
      <span :style="compStyle">Comp</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      orgStyle: {
        color: "black",
        fontFamily: "Comfortaa, cursive",
        fontWeight: 1000,
      },
      compStyle: {
        color: "white",
        fontFamily: "Comfortaa, cursive",
        fontWeight: 1000,
      },
    };
  },
};
</script>

<style scoped>
.app-header {
  background-color: #ff8e8f;
  padding: 5px;
  text-align: center;
  font-size: 20px;
  border-radius: 30px;
  height: min-content;
}
</style>
