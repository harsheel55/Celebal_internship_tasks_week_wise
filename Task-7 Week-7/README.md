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


