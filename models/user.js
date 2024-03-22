const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  chatId: {
    type: Number,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true,
    unique: true
  },
  banned: {
    type: Boolean,
    default: false
  },
  banReason: {
    type: String
  }
});
userSchema.pre('save', function(next) {
  if (!this.userId) {
    this.userId = uuidv4().slice(0, 8);
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
