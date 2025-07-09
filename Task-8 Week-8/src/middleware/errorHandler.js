const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  logger.error(err.stack);

  // Default error
  let error = {
    statusCode: err.statusCode || 500,
    message: err.message || 'Internal Server Error'
  };

  // Multer errors
  if (err.code === 'LIMIT_FILE_SIZE') {
    error = {
      statusCode: 400,
      message: 'File too large'
    };
  }

  if (err.code === 'LIMIT_UNEXPECTED_FILE') {
    error = {
      statusCode: 400,
      message: 'Unexpected file field'
    };
  }

  // Validation errors
  if (err.name === 'ValidationError') {
    error = {
      statusCode: 400,
      message: 'Validation Error',
      details: err.details
    };
  }

  // Cast errors
  if (err.name === 'CastError') {
    error = {
      statusCode: 400,
      message: 'Invalid ID format'
    };
  }

  // Duplicate key errors
  if (err.code === 11000) {
    error = {
      statusCode: 400,
      message: 'Duplicate field value'
    };
  }

  res.status(error.statusCode).json({
    success: false,
    error: error.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

module.exports = errorHandler;