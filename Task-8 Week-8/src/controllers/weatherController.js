const weatherService = require('../services/weatherService');
const { weatherSchema } = require('../utils/validators');

const getCurrentWeather = async (req, res, next) => {
  try {
    const { error, value } = weatherSchema.validate(req.query);
    
    if (error) {
      return res.status(400).json({
        success: false,
        error: error.details[0].message
      });
    }

    const { city, country } = value;
    const weather = await weatherService.getCurrentWeather(city, country);

    res.json({
      success: true,
      data: weather
    });
  } catch (error) {
    next(error);
  }
};

const getForecast = async (req, res, next) => {
  try {
    const { error, value } = weatherSchema.validate(req.query);
    
    if (error) {
      return res.status(400).json({
        success: false,
        error: error.details[0].message
      });
    }

    const { city, country } = value;
    const forecast = await weatherService.getForecast(city, country);

    res.json({
      success: true,
      data: forecast
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCurrentWeather,
  getForecast
};