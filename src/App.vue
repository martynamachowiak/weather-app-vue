<template>
  <div id="app">
    <location-details :location="location" />
    <forecast-details :forecast="forecasts[0]" />
  </div>
</template>

<script>
import LocationDetails from './components/LocationDetails.vue';
import ForecastDetails from './components/ForecastDetails.vue';
import { location, forecasts } from './data/forecast.json';

export default {
  name: 'App',
  components: {
    LocationDetails,
    ForecastDetails,
  },
  data() {
    return { location, forecasts };
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
