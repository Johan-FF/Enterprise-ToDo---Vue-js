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

<style>
.layout {
  padding-inline: 20%;
  padding-bottom: 10%;
}
</style>
