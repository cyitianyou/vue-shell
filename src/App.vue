<template>
    <router-view/>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Home from './views/Home.vue';
import Intro from './views/Intro.vue';
import About from './views/About.vue';
@Component({
  components: {
    Home,
    Intro,
    About,
  },
})
export default class App extends Vue {
  private created(): void {
  }
}
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
