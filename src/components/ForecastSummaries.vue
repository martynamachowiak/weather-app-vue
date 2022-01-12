<template>
  <ul>
    <li
      v-for="forecastSummary in forecastSummaries"
      :key="forecastSummary.date"
    >
      {{ forecastSummary.date }}
      {{ forecastSummary.icon }}
      {{ forecastSummary.temperature.max }}&deg;C
      {{ forecastSummary.description }}
      <button @click="showDetails(forecastSummary.date)">More details</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ForecastSummaries',
  props: {
    forecastSummaries: Array,
  },
  methods: {
    showDetails(date) {
      this.$emit('showDetails', date);
    },
  },
};
</script>

<style></style>
