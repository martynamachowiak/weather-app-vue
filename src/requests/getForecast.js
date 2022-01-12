import axios from 'axios';

export const getForecast = () =>
  axios
    .get('https://mcr-codes-weather-app.herokuapp.com/forecast')
    .then((response) => {
      return response.data;
    });
