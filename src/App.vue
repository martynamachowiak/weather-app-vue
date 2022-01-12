<template>
  <div id="app">
    <location-details :location="location" />
  </div>
</template>

<script>
import LocationDetails from './components/LocationDetails.vue';
import { location } from './data/forecast.json';
console.log(location);

export default {
  name: 'App',
  components: {
    LocationDetails,
  },
  data() {
    return { location };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
