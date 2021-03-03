<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
  <div v-if="currentTrack">
    <Audio :track="currentTrack" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Audio from "@/components/Audio.ts.vue";
export default defineComponent({
  components: { Audio },
  computed: {
    currentTrack() {
      return this.$store.getters.getCurrentTrack;
    }
  }
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
