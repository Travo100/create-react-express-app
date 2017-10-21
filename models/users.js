const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  token: {
    type: String,
  },
  password: {
    type: String,
    minlength: 8,
  },
  email: {
    type: String,
    // TODO compare against a regext for email validation
    required: true,
    unique: true,
  },
  firstName: String,
  lastName: String,
  createdAt: {
    // TODO prevent created at from being changed after account is first created
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
    default: Date.now,
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
