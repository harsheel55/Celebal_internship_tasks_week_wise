# Advanced Express.js Application

A comprehensive Express.js application featuring file upload capabilities, weather API integration, user management, and enterprise-grade middleware for error handling, logging, and security.

## 🚀 Features

- **File Upload & Management**: Secure file upload with validation and storage
- **Weather API Integration**: Real-time weather data and forecasts
- **User Management**: Complete CRUD operations for user management
- **Security Middleware**: Rate limiting, CORS, Helmet protection
- **Comprehensive Logging**: Winston-based logging system
- **Error Handling**: Centralized error handling with detailed responses
- **Input Validation**: Joi-based request validation
- **Environment Configuration**: Flexible environment-based configuration

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key (for weather features)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd advanced-express-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   NODE_ENV=development
   WEATHER_API_KEY=your_openweather_api_key
   WEATHER_API_URL=https://api.openweathermap.org/data/2.5
   MAX_FILE_SIZE=5242880
   UPLOAD_DIR=uploads
   LOG_LEVEL=info
   ```

4. **Get your OpenWeatherMap API key**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   - Get your free API key
   - Replace `your_openweather_api_key` in the `.env` file

## 🚀 Usage

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:3000` (or your specified PORT).

## 📡 API Endpoints

### Health Check
```
GET /health
```
Returns server status and uptime information.

### File Management

#### Upload File
```
POST /api/files/upload
Content-Type: multipart/form-data
```
Upload a file (supports: JPEG, PNG, GIF, PDF, DOC, DOCX, TXT)

#### Get All Files
```
GET /api/files
```
Retrieve list of all uploaded files.

#### Delete File
```
DELETE /api/files/:filename
```
Delete a specific file by filename.

### Weather API

#### Current Weather
```
GET /api/weather/current?city=London&country=UK
```
Get current weather for a specified city.

#### Weather Forecast
```
GET /api/weather/forecast?city=London&country=UK
```
Get 5-day weather forecast for a specified city.

### User Management

#### Create User
```
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

#### Get All Users
```
GET /api/users
```

#### Get User by ID
```
GET /api/users/:id
```

#### Update User
```
PUT /api/users/:id
Content-Type: application/json

{
  "name": "John Updated",
  "email": "john.updated@example.com",
  "age": 31
}
```

#### Delete User
```
DELETE /api/users/:id
```

## 🧪 Testing the API

### Using cURL

**File Upload:**
```bash
curl -X POST -F "file=@/path/to/your/file.jpg" http://localhost:3000/api/files/upload
```

**Weather Data:**
```bash
curl "http://localhost:3000/api/weather/current?city=London"
```

**Create User:**
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","age":30}' \
  http://localhost:3000/api/users
```

### Using Postman

1. Import the API endpoints into Postman
2. Set up environment variables for base URL
3. Test each endpoint with sample data

## 📁 Project Structure

```
advanced-express-app/
├── src/
│   ├── controllers/           # Route handlers
│   │   ├── fileController.js
│   │   ├── weatherController.js
│   │   └── userController.js
│   ├── middleware/           # Custom middleware
│   │   ├── errorHandler.js
│   │   ├── rateLimiter.js
│   │   └── upload.js
│   ├── routes/              # Route definitions
│   │   ├── files.js
│   │   ├── weather.js
│   │   └── users.js
│   ├── services/            # Business logic
│   │   └── weatherService.js
│   └── utils/               # Utility functions
│       ├── logger.js
│       └── validators.js
├── uploads/                 # File storage directory
├── logs/                    # Application logs
├── .env                     # Environment variables
├── .gitignore
├── app.js                   # Express app configuration
├── server.js                # Server entry point
└── package.json
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 3000 |
| `NODE_ENV` | Environment mode | development |
| `WEATHER_API_KEY` | OpenWeatherMap API key | Required |
| `WEATHER_API_URL` | Weather API base URL | https://api.openweathermap.org/data/2.5 |
| `MAX_FILE_SIZE` | Maximum file upload size (bytes) | 5242880 (5MB) |
| `UPLOAD_DIR` | File upload directory | uploads |
| `LOG_LEVEL` | Logging level | info |

### File Upload Limits

- **Maximum file size**: 5MB (configurable)
- **Allowed file types**: JPEG, PNG, GIF, PDF, DOC, DOCX, TXT
- **Storage**: Local filesystem (configurable to cloud storage)

### Rate Limiting

- **Window**: 15 minutes
- **Max requests**: 100 per IP
- **Response**: 429 Too Many Requests

## 📊 Logging

The application uses Winston for logging with the following features:

- **File Logging**: Separate files for errors and combined logs
- **Console Logging**: Development mode only
- **Log Levels**: Error, warn, info, debug
- **Structured Logging**: JSON format for easy parsing

Logs are stored in the `logs/` directory:
- `error.log`: Error-level logs only
- `combined.log`: All log levels

## 🔒 Security Features

- **Helmet**: Sets various HTTP headers for security
- **CORS**: Configurable Cross-Origin Resource Sharing
- **Rate Limiting**: Prevents abuse and DDoS attacks
- **Input Validation**: Joi-based request validation
- **File Upload Security**: Type and size validation
- **Error Handling**: Prevents information leakage

## 🚀 Deployment

### Production Checklist

1. **Environment Setup**
   - Set `NODE_ENV=production`
   - Configure production database
   - Set up SSL certificates

2. **Process Management**
   ```bash
   npm install -g pm2
   pm2 start server.js --name "express-app"
   pm2 startup
   pm2 save
   ```

3. **Reverse Proxy**
   Configure Nginx or Apache as reverse proxy

4. **Monitoring**
   - Set up application monitoring
   - Configure log aggregation
   - Health check endpoints

### Docker Deployment

```dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

## 🧪 Testing

### Running Tests
```bash
npm test
```

### Test Coverage
```bash
npm run test:coverage
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Known Issues

- User data is stored in memory (replace with database for production)
- File storage is local filesystem (consider cloud storage for scalability)

## 🛣️ Roadmap

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] JWT authentication
- [ ] API documentation with Swagger
- [ ] Unit and integration tests
- [ ] Docker containerization
- [ ] CI/CD pipeline
- [ ] Cloud storage integration
- [ ] Real-time features with WebSockets

## 💬 Support

For support, please open an issue in the GitHub repository or contact the development team.

## 🙏 Acknowledgments

- Express.js team for the excellent framework
- OpenWeatherMap for weather data API
- All contributors and maintainers

---

**Happy coding!** 🎉