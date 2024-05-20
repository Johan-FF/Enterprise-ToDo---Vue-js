<template>
  <h1>
    <span :style="orgStyle">Org</span>
    <span :style="compStyle">Comp</span>
  </h1>
</template>

<script>
import "@/assets/styles.css";

export default {
  name: "AppTitle",
  data() {
    return {
      orgStyle: {
        color: "var(--color7)",
        fontWeight: 1000,
      },
      compStyle: {
        color: "var(--color6)",
        fontWeight: 1000,
      },
    };
  },
};
</script>
