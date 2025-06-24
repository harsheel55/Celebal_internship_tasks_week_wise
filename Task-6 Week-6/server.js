// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// CORS Middleware - Add this to allow frontend to communicate with backend
app.use((req, res, next) => {
  // Allow requests from any origin (for development)
  res.header('Access-Control-Allow-Origin', '*');
  
  // Allow these HTTP methods
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  
  // Allow these headers
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  // Handle preflight OPTIONS requests
  if (req.method === 'OPTIONS') {
    res.status(200).json({
      success: true,
      message: 'CORS preflight successful'
    });
  } else {
    next();
  }
});

// Request logging middleware (optional - for debugging)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// In-memory data store (in production, you'd use a database)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 35 }
];

let nextId = 4; // For generating new user IDs

// Helper function to find user by ID
const findUserById = (id) => {
  return users.find(user => user.id === parseInt(id));
};

// Helper function to validate user data
const validateUser = (userData) => {
  const { name, email, age } = userData;
  const errors = [];

  if (!name || name.trim().length === 0) {
    errors.push('Name is required');
  }
  if (!email || !email.includes('@')) {
    errors.push('Valid email is required');
  }
  if (!age || age < 0 || age > 150) {
    errors.push('Valid age is required (0-150)');
  }

  return errors;
};

// Routes

// GET /api/users - Get all users
app.get('/api/users', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET /api/users/:id - Get a specific user by ID
app.get('/api/users/:id', (req, res) => {
  try {
    const user = findUserById(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// POST /api/users - Create a new user
app.post('/api/users', (req, res) => {
  try {
    const { name, email, age } = req.body;
    
    // Validate input data
    const validationErrors = validateUser(req.body);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      });
    }

    // Check if email already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'User with this email already exists'
      });
    }

    // Create new user
    const newUser = {
      id: nextId++,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      age: parseInt(age)
    };

    users.push(newUser);

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: newUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// PUT /api/users/:id - Update a user completely
app.put('/api/users/:id', (req, res) => {
  try {
    const user = findUserById(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Validate input data
    const validationErrors = validateUser(req.body);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      });
    }

    const { name, email, age } = req.body;

    // Check if email already exists (excluding current user)
    const existingUser = users.find(u => u.email === email && u.id !== user.id);
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'User with this email already exists'
      });
    }

    // Update user
    user.name = name.trim();
    user.email = email.trim().toLowerCase();
    user.age = parseInt(age);

    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// PATCH /api/users/:id - Update a user partially
app.patch('/api/users/:id', (req, res) => {
  try {
    const user = findUserById(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    const { name, email, age } = req.body;
    const updates = {};

    // Only validate and update provided fields
    if (name !== undefined) {
      if (!name || name.trim().length === 0) {
        return res.status(400).json({
          success: false,
          message: 'Name cannot be empty'
        });
      }
      updates.name = name.trim();
    }

    if (email !== undefined) {
      if (!email || !email.includes('@')) {
        return res.status(400).json({
          success: false,
          message: 'Valid email is required'
        });
      }
      
      // Check if email already exists (excluding current user)
      const existingUser = users.find(u => u.email === email && u.id !== user.id);
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: 'User with this email already exists'
        });
      }
      
      updates.email = email.trim().toLowerCase();
    }

    if (age !== undefined) {
      if (age < 0 || age > 150) {
        return res.status(400).json({
          success: false,
          message: 'Valid age is required (0-150)'
        });
      }
      updates.age = parseInt(age);
    }

    // Apply updates
    Object.assign(user, updates);

    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// DELETE /api/users/:id - Delete a user
app.delete('/api/users/:id', (req, res) => {
  try {
    const userIndex = users.findIndex(user => user.id === parseInt(req.params.id));
    
    if (userIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    const deletedUser = users.splice(userIndex, 1)[0];

    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      data: deletedUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running successfully',
    timestamp: new Date().toISOString()
  });
});

// Handle 404 for undefined routes
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📍 API endpoints available at http://localhost:${PORT}/api/users`);
  console.log(`🔍 Health check at http://localhost:${PORT}/health`);
});

module.exports = app;