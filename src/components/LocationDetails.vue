<template>
  <div>
    <h2>{{ location.city }}, {{ location.country }}</h2>
  </div>
</template>

<script>
export default {
  name: 'LocationDetails',
  props: {
    location: {},
  },
};
</script>
