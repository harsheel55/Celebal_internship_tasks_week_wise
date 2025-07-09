const axios = require('axios');
const logger = require('../utils/logger');

class WeatherService {
  constructor() {
    this.baseURL = process.env.WEATHER_API_URL;
    this.apiKey = process.env.WEATHER_API_KEY;
  }

  async getCurrentWeather(city, country = '') {
    try {
      const query = country ? `${city},${country}` : city;
      const response = await axios.get(`${this.baseURL}/weather`, {
        params: {
          q: query,
          appid: this.apiKey,
          units: 'metric'
        },
        timeout: 5000
      });

      return {
        city: response.data.name,
        country: response.data.sys.country,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        windSpeed: response.data.wind.speed
      };
    } catch (error) {
      logger.error('Weather API error:', error.message);
      
      if (error.response?.status === 404) {
        throw new Error('City not found');
      }
      
      if (error.response?.status === 401) {
        throw new Error('Invalid API key');
      }
      
      throw new Error('Weather service unavailable');
    }
  }

  async getForecast(city, country = '') {
    try {
      const query = country ? `${city},${country}` : city;
      const response = await axios.get(`${this.baseURL}/forecast`, {
        params: {
          q: query,
          appid: this.apiKey,
          units: 'metric'
        },
        timeout: 5000
      });

      return response.data.list.slice(0, 5).map(item => ({
        datetime: item.dt_txt,
        temperature: item.main.temp,
        description: item.weather[0].description
      }));
    } catch (error) {
      logger.error('Weather forecast API error:', error.message);
      throw new Error('Weather forecast service unavailable');
    }
  }
}

module.exports = new WeatherService();