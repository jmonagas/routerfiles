<template>
  <div id="app">
    <img alt="Logo" src="./assets/Logo.png" />
    <div id="nav">
      | <router-link to="/">Home</router-link> |
      <router-link to="/game">Game</router-link> |
    </div>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 5vh;
  background-color: rgb(245, 245, 239);
}
#nav {
  padding: 2vh;
}
#nav a {
  font-weight: bold;
}
#nav a.router-link-exact-active {
  color: green;
  text-decoration: green solid 1px;
}
img {
  height: 25vh;
}
</style>
