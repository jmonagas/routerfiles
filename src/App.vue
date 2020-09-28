<template>
  <div id="app">
    <img alt="Logo" src="./assets/logo.png" />
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
  background-color: beige;
}
#nav {
  padding: 2vh;
}
#nav a {
  font-weight: bolder;
}
#nav a.router-link-exact-active {
  color: #139906;
  text-decoration: #139906 solid 1px;
}
img {
  height: 10vh;
}
</style>
