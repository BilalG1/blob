<template>
  <!--img alt="Vue logo" src="./assets/logo.png"-->
  <Game/>
</template>

<script>
import Game from './GamePane/Game.vue'

export default {
  name: 'App',
  components: {
    Game
  }
}
</script>

<style>
:root {
  --primary-color: #4285F4;
  --primary-color-light: #5C9FFF; 
  --white-gray: #F0F2F4;
  --lightest-gray: #D0D0D0;
  --light-gray: #777777;
  --dark-gray: #3a3d4a;
  --dark-gray-two: #2e2e2e;
  --light-black: #171717;
  --navbar-height: 60px;
  --mobile-width: 600px;
  --medium-width: 1200px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  background: lightgray;
  height: calc(100vh - 60px);
}
body{
  margin: 0;
}
</style>
