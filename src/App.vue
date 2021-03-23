<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
ul,ol{
  list-style: none;
}
img{
  width: 100%;
  height: 100%;
}
body{
  height: 100vh;
}
button{
  border: none;
}
html{
  font-size: calc(100vw / 750);
}
</style>
