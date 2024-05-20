<template>
  <div class="layout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AppLayout",
};
</script>

<style scoped>
.layout {
  padding-inline: 10%;
  width: 80%;
  height: 70%;
}
</style>
