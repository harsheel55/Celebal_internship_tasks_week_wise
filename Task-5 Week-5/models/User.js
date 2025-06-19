const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
    min: [1, 'Age must be positive'],
    max: [120, 'Age must be realistic']
  },
  city: {
    type: String,
    required: [true, 'City is required'],
    trim: true
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model('User', userSchema);