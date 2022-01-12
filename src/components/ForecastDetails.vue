<template>
  <div class="forecast-summary">
    <div class="forecast-summary__date">
      {{ forecast.date }}
    </div>
    <div class="forecast-summary__description">
      {{ forecast.description }}
    </div>
    <div class="forecast-summary__temperature">
      {{ forecast.temperature.min }} - {{ forecast.temperature.max }}&deg;C
    </div>
    <div class="forecast-summary__icon">
      {{ forecast.icon }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForcastSummary',
  props: {
    forecast: {
      date: String,
      description: String,
      temperature: {
        min: Number,
        max: Number,
      },
      icon: String,
    },
  },
};
</script>
