<template>
  <div id="app">
    <location-details :location="location" />
    <forecast-summaries
      :forecastSummaries="forecasts"
      @showDetails="selectForecast"
    />
    <forecast-details :forecast="currentForecast" />
  </div>
</template>

<script>
import LocationDetails from './components/LocationDetails.vue';
import ForecastDetails from './components/ForecastDetails.vue';
import ForecastSummaries from './components/ForecastSummaries.vue';
import { location, forecasts } from './data/forecast.json';

export default {
  name: 'App',
  components: {
    LocationDetails,
    ForecastSummaries,
    ForecastDetails,
  },
  methods: {
    selectForecast(selectedDate) {
      const currentForecast = forecasts.find(
        (forecast) => forecast.date === selectedDate
      );
      this.currentForecast = currentForecast;
    },
  },
  data() {
    return {
      location,
      forecasts,
      currentForecast: forecasts[0],
      handleSelectForecast: this.selectForecast,
    };
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
