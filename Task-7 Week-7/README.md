project-root/
│
├── controllers/
│   └── authController.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── middleware/
│   └── auth.js
├── utils/
│   └── generateToken.js
├── .env
├── server.js
└── README.md

# 🔐 Node.js REST API with JWT Authentication

This project implements a secure, token-based authentication system using **JWT (JSON Web Tokens)** in a Node.js + Express + MongoDB REST API. Users can register, log in, update profiles, change passwords, and access protected routes.

---

## 🚀 Features

- 🔒 User registration and login  
- 🔑 JWT-based authentication (secure and stateless)  
- 🔐 Protected routes using middleware  
- 👤 Profile and password management  
- 🧪 Postman-ready API endpoints  

---

## 🔐 JWT-Based Authentication

We use JWT for user authentication and session management. Here’s how it works:

1. **User logs in or registers** — receives a **JWT** token.  
2. Token is stored on client (frontend / Postman) and sent via headers:

1. post : http://localhost:5000/api/auth/register:
   ![My Image](register.png)

3. post :http://localhost:5000/api/auth/login:
   ![My Image](login.png)
4. Get: http://localhost:5000/api/auth/profile:
   ![My Image](get-profile.png)
5. Put: http://localhost:5000/api/auth/profile:
   ![My Image](put-profile.png)
6. Put : http://localhost:5000/api/auth/change-password:
   ![My Image](change-password.png)

📌 Environment Variables (.env)
.env:
PORT=5000
MONGO_URI=mongodb://localhost:27017/authdb
JWT_SECRET=jwt-token-secret
JWT_EXPIRE=7d
NODE_ENV=development


---

### 🛠 Next Step:
- Save this content into your project as `README.md`
- Create the `images/` folder and save your Postman screenshots in it
- Replace any placeholder with your actual project name or links

---

Would you like me to generate this `README.md` file and export it for download? I can also help create the sample Postman collection if needed.



# 🔐 Node.js REST API with JWT Authentication

This project implements a secure, token-based authentication system using **JWT (JSON Web Tokens)** in a Node.js + Express + MongoDB REST API. Users can register, log in, update profiles, change passwords, and access protected routes.

---

## 📁 Project Structure

project-root/
│
├── controllers/
│   └── authController.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── middleware/
│   └── auth.js
├── utils/
│   └── generateToken.js
├── .env
├── server.js
└── README.md


---

## 🚀 Features

- 🔒 User registration and login  
- 🔑 JWT-based authentication (secure and stateless)  
- 🔐 Protected routes using middleware  
- 👤 Profile and password management  
- 🧪 Postman-ready API endpoints  

---

## 🔐 JWT-Based Authentication

We use JWT for user authentication and session management. Here’s how it works:

1. **User logs in or registers** — receives a **JWT** token.  
2. Token is stored on the client (frontend / Postman) and sent via headers.  
3. Protected routes validate the token using middleware.

---

## 📮 API Endpoints with Postman Screenshots

> 💡 Make sure the screenshots (`register.png`, `login.png`, etc.) are in the same directory as `README.md`, or use an `images/` folder and update the paths.

### 📌 1. Register User

**POST:** `http://localhost:5000/api/auth/register`

![Register](register.png)

---

### 📌 2. Login User

**POST:** `http://localhost:5000/api/auth/login`

![Login](login.png)

---

### 📌 3. Get User Profile

**GET:** `http://localhost:5000/api/auth/profile`

![Get Profile](get-profile.png)

---

### 📌 4. Update User Profile

**PUT:** `http://localhost:5000/api/auth/profile`

![Update Profile](put-profile.png)

---

### 📌 5. Change Password

**PUT:** `http://localhost:5000/api/auth/change-password`

![Change Password](change-password.png)

---

## 🔧 Environment Variables

Create a `.env` file in the root directory and add:

PORT=5000
MONGO_URI=mongodb://localhost:27017/authdb
JWT_SECRET=jwt-token-secret
JWT_EXPIRE=7d
NODE_ENV=development


---

## ✅ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo


2. Install dependencies
npm install

3. Run the server
npm start

👨‍💻 Author
Your Name – GitHub

📄 License
This project is licensed under the MIT License.

---

Let me know if you want it:
- Downloaded as a `.md` file  
- Automatically adjust for image folder like `images/register.png`  
- With a clickable link to your GitHub profile and repo
