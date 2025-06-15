// Import Express.js
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Define the port
const PORT = process.env.PORT || 3000;

// Middleware
// Built-in middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom logging middleware
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();
});

// Serve static files from public directory
app.use(express.static('public'));

// Routes

// Home route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Express.js Server!',
        timestamp: new Date().toISOString(),
        endpoints: [
            'GET / - Home page',
            'GET /about - About page',
            'GET /users - Get all users',
            'POST /users - Create new user',
            'GET /api/status - Server status'
        ]
    });
});

// About route
app.get('/about', (req, res) => {
    res.json({
        message: 'About this server',
        description: 'This is a basic Express.js web server with routing and middleware',
        version: '1.0.0',
        author: 'Intern Developer'
    });
});

// Sample data for users
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Users routes
app.get('/users', (req, res) => {
    res.json({
        message: 'Users retrieved successfully',
        count: users.length,
        users: users
    });
});

// Create new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({
            error: 'Name and email are required'
        });
    }
    
    const newUser = {
        id: users.length + 1,
        name: name,
        email: email
    };
    
    users.push(newUser);
    
    res.status(201).json({
        message: 'User created successfully',
        user: newUser
    });
});

// API status route
app.get('/api/status', (req, res) => {
    res.json({
        status: 'Server is running',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        memory: process.memoryUsage(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// Route with parameters
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    
    if (!user) {
        return res.status(404).json({
            error: 'User not found'
        });
    }
    
    res.json({
        message: 'User found',
        user: user
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        message: err.message
    });
});

// 404 handler - must be last
app.use((req, res) => {
    res.status(404).json({
        error: 'Route not found',
        message: `Cannot ${req.method} ${req.originalUrl}`
    });
});


// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📝 Available endpoints:`);
    console.log(`   GET  http://localhost:${PORT}/`);
    console.log(`   GET  http://localhost:${PORT}/about`);
    console.log(`   GET  http://localhost:${PORT}/users`);
    console.log(`   POST http://localhost:${PORT}/users`);
    console.log(`   GET  http://localhost:${PORT}/api/status`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received. Shutting down gracefully...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('\nSIGINT received. Shutting down gracefully...');
    process.exit(0);
});