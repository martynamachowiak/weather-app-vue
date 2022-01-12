<template>
  <div id="app">
    <location-details v-if="location" :location="location" />

    <div v-else>Loading location...</div>

    <forecast-summaries
      v-if="forecasts.length > 0"
      :forecastSummaries="forecasts"
      @showDetails="handelSelectForecast"
    />

    <div v-else>Loading forecasts...</div>

    <forecast-details v-if="selectedForecast" :forecast="selectedForecast" />
    <div v-else>Loading detailed forecast...</div>
  </div>
</template>

<script>
import { getForecast } from './requests/getForecast';
import {
  LocationDetails,
  ForecastDetails,
  ForecastSummaries,
} from './components';

export default {
  name: 'App',
  components: {
    LocationDetails,
    ForecastSummaries,
    ForecastDetails,
  },
  data() {
    return {
      response: null,
      selectedForecast: null,
    };
  },
  computed: {
    location() {
      return this.response?.location;
    },
    forecasts() {
      return this.response?.forecasts ?? [];
    },
  },
  mounted() {
    this.fetch();
  },
  methods: {
    handelSelectForecast(selectedDate) {
      this.selectedForecast = this.forecasts.find(
        (forecast) => forecast.date === selectedDate
      );
    },
    fetch() {
      getForecast().then((data) => {
        this.response = data;
        this.selectedForecast =
          data.forecasts.length > 0 ? data.forecasts[0] : null;
      });
    },
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
