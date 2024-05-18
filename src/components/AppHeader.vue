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
        fontWeight: 1000,
      },
      compStyle: {
        color: "white",
        fontWeight: 1000,
      },
    };
  },
};
</script>

<style scoped>
.app-header {
  background-color: var(--skin-color);
  font-family: var(--font-comfortaa);
  padding: 5px;
  text-align: center;
  font-size: 20px;
  border-radius: 30px;
  height: min-content;
}
</style>
