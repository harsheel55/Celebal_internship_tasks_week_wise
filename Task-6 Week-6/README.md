# 🚀 RESTful API with Frontend UI

A complete full-stack application featuring a RESTful API built with Node.js/Express and a modern frontend interface for user management with full CRUD operations.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Frontend Features](#-frontend-features)
- [Screenshots](#-screenshots)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### Backend API
- **Full CRUD Operations**: Create, Read, Update, Delete users
- **RESTful Design**: Following REST API conventions
- **Input Validation**: Server-side validation for all user data
- **Error Handling**: Comprehensive error handling with proper HTTP status codes
- **CORS Support**: Cross-origin resource sharing enabled
- **Request Logging**: Built-in request logging for debugging
- **Health Check**: API health monitoring endpoint

### Frontend UI
- **Modern Interface**: Beautiful, responsive design with glassmorphism effects
- **Real-time Status**: Live API connection status indicator
- **Form Validation**: Client-side validation before API calls
- **User Feedback**: Success/error alerts for all operations
- **Mobile Friendly**: Fully responsive design for all devices
- **Interactive Cards**: Dynamic user cards with hover effects
- **Loading States**: Smooth loading animations and spinners

## 🛠 Tech Stack

**Backend:**
- Node.js
- Express.js
- JavaScript (ES6+)

**Frontend:**
- HTML5
- CSS3 (with modern features like Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)

**Development:**
- Nodemon (for development auto-restart)

## 📁 Project Structure

```
restful-api-project/
├── server.js          # Main API server file
├── package.json       # Node.js dependencies and scripts
├── index.html         # Frontend UI file
└── README.md          # Project documentation
```

## 🔧 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- Modern web browser

### Step 1: Clone/Download the Project
```bash
# Create project directory
mkdir restful-api-project
cd restful-api-project
```

### Step 2: Setup Backend
```bash
# Initialize npm project
npm init -y

# Install dependencies
npm install express

# Install development dependencies
npm install --save-dev nodemon
```

### Step 3: Create Files
- Copy the `server.js` code into your project
- Copy the `package.json` configuration
- Copy the `index.html` frontend code

### Step 4: Update package.json Scripts
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

## 🚀 Usage

### Starting the Backend API

```bash
# For development (auto-restart on changes)
npm run dev

# For production
npm start
```

The API server will start on: `http://localhost:3000`

### Opening the Frontend

1. Open `index.html` in your web browser
   - **Option 1**: Double-click the file
   - **Option 2**: Use Live Server extension in VS Code
   - **Option 3**: Use any local development server

2. The frontend will automatically connect to your API

### Verification

- ✅ API Status indicator shows "🟢 API Online"
- ✅ Users list loads (may be empty initially)
- ✅ Forms work without CORS errors

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Endpoints

#### Get All Users
```http
GET /api/users
```
**Response:**
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "age": 30
    }
  ]
}
```

#### Get User by ID
```http
GET /api/users/:id
```

#### Create New User
```http
POST /api/users
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "age": 25
}
```

#### Update User (Complete)
```http
PUT /api/users/:id
Content-Type: application/json

{
  "name": "Jane Updated",
  "email": "jane.updated@example.com",
  "age": 26
}
```

#### Update User (Partial)
```http
PATCH /api/users/:id
Content-Type: application/json

{
  "age": 27
}
```

#### Delete User
```http
DELETE /api/users/:id
```

#### Health Check
```http
GET /health
```

### HTTP Status Codes

- `200` - Success (GET, PUT, PATCH, DELETE)
- `201` - Created (POST)
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `409` - Conflict (duplicate email)
- `500` - Internal Server Error

### Testing with cURL

```bash
# Get all users
curl -X GET http://localhost:3000/api/users

# Create a user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","age":25}'

# Update a user
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated User","email":"updated@example.com","age":30}'

# Delete a user
curl -X DELETE http://localhost:3000/api/users/1
```

## 🎨 Frontend Features

### Dashboard Overview
- **Header**: Gradient header with project title
- **Form Section**: User creation/editing form with validation
- **Users Grid**: Responsive card layout for user display
- **Status Indicator**: Real-time API connection status

### User Operations
- **Add User**: Fill form and submit to create new users
- **Edit User**: Click edit button to modify existing users
- **Delete User**: Remove users with confirmation dialog
- **View Users**: All users displayed in beautiful cards

### UI/UX Features
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Loading States**: Spinners and loading messages
- **Error Handling**: User-friendly error messages
- **Success Feedback**: Confirmation messages for successful operations
- **Empty States**: Helpful messages when no data exists

## 📱 Screenshots

### Desktop View
- Modern dashboard with gradient backgrounds
- Card-based user layout
- Intuitive form interface

### Mobile View
- Fully responsive design
- Touch-friendly buttons
- Optimized for mobile screens

## 🐛 Troubleshooting

### Common Issues

#### CORS Errors
**Problem**: `Access-Control-Allow-Origin` errors in browser console
**Solution**: Make sure the CORS middleware is properly added to `server.js`

#### API Not Responding
**Problem**: Frontend shows "🔴 API Offline"
**Solution**: 
1. Check if Node.js server is running: `npm run dev`
2. Verify server is on port 3000: `http://localhost:3000/health`
3. Check for any error messages in terminal

#### Port Already in Use
**Problem**: `EADDRINUSE: address already in use :::3000`
**Solution**:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

#### Form Validation Errors
**Problem**: Cannot create/update users
**Solution**: Ensure all required fields are filled:
- Name (non-empty string)
- Email (valid email format)
- Age (number between 0-150)

### Debug Mode

Enable request logging by checking your terminal when the server is running. You should see:
```
2024-06-24T10:30:45.123Z - GET /health
2024-06-24T10:30:45.456Z - GET /api/users
2024-06-24T10:30:47.789Z - POST /api/users
```

### Environment Variables
For production, set:
```bash
PORT=3000
NODE_ENV=production
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@harsheel55](https://github.com/harsheel55)
- LinkedIn: [harsheel kasodariya](https://www.linkedin.com/in/harsheel-kasodariya-22a31b253/)
- Email: harsheelkasodariya2005@gmail.com
## 🙏 Acknowledgments

- Express.js team for the excellent web framework
- MDN Web Docs for frontend development resources
- Node.js community for comprehensive documentation

---

⭐ **Star this repository if you found it helpful!**

## 📞 Support

If you have any questions or run into issues:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Open an issue on GitHub
3. Contact the author via email

**Happy Coding! 🎉**
