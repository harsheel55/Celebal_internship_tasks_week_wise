# MongoDB CRUD App

A simple full-stack application to **Create, Read, Update, and Delete (CRUD)** user entries in a MongoDB database using **Node.js**, **Express**, **Mongoose**, and a modern responsive frontend.

---

## Features
- Add, view, update, and delete users
- User fields: name, email, age, city
- RESTful API with Express & Mongoose
- Responsive, modern UI (HTML, CSS, JS)
- Error handling and form validation

---

## Tech Stack
- **Backend:** Node.js, Express.js, Mongoose, MongoDB
- **Frontend:** HTML, CSS, JavaScript
- **Other:** dotenv, cors, nodemon (dev)

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

### Installation
1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd mongodb-crud-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   - Create a `.env` file in the root directory:
     ```env
     MONGODB_URI=<your-mongodb-connection-string>
     PORT=3000 # optional, defaults to 3000
     ```
4. **Start the server:**
   - For production:
     ```bash
     npm start
     ```
   - For development (with auto-reload):
     ```bash
     npm run dev
     ```
5. **Open the app:**
   - Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## API Endpoints

All endpoints are prefixed with `/api/users`.

| Method | Endpoint         | Description           |
|--------|------------------|----------------------|
| POST   | `/api/users`     | Create a new user    |
| GET    | `/api/users`     | Get all users        |
| GET    | `/api/users/:id` | Get user by ID       |
| PUT    | `/api/users/:id` | Update user by ID    |
| DELETE | `/api/users/:id` | Delete user by ID    |

### User Schema
```js
{
  name: String,   // required, min 2 chars
  email: String,  // required, unique, valid email
  age: Number,    // required, 1-120
  city: String    // required
}
```

#### Example: Create User
```bash
curl -X POST http://localhost:3000/api/users \
  -H 'Content-Type: application/json' \
  -d '{"name":"John Doe","email":"john@example.com","age":30,"city":"New York"}'
```

---

## Frontend Usage
- The app provides a user-friendly interface to manage users.
- Add a new user using the form.
- Edit or delete users using the buttons next to each user.
- Responsive design for desktop and mobile.

---

## Project Structure
```
.
├── models/         # Mongoose schemas (User.js)
├── public/         # Frontend (index.html, style.css, script.js)
├── routes/         # Express routes (users.js)
├── server.js       # App entry point
├── .env            # Environment variables (not committed)
├── package.json    # Project metadata & scripts
└── README.md       # This file
```

---

## Environment & Security
- **.env** and **node_modules/** are gitignored.
- Never commit your MongoDB credentials.

---

## License
MIT

---

## Author
Your Name

---

## Screenshots
![App Screenshot](screenshot.png)

---

## Contact
For any queries, contact [your.email@example.com](mailto:your.email@example.com) 
