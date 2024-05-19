<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap");
:root {
  --skin-color: #ff8e8f; /*4 */
  --pink-color: #e178c5; /*6 */
  --yellow-color: #ffff80; /*7 */
  --light-pink-color: #f3d0d7; /*9 */
  --light-yellow-color: #f6f5f2; /*11 */
  --dark-blue-color: #2c3e50; /*12 */
  --green-color: #42b983; /*13 */
  --font-comfortaa: "Comfortaa", cursive;
}
body {
  background-color: var(--light-yellow-color);
  font-family: var(--font-comfortaa);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark-blue-color);
  font-weight: 300;
  margin: 0px;
}
#app {
  font-family: var(--font-comfortaa);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark-blue-color);
  font-weight: 300;
  background-color: var(--light-yellow-color);
}
</style>
