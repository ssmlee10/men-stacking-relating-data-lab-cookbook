const mongoose = require('mongoose');

// user.js

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: [
      'Spice',
      'Vegetable',
      'Fruit',
      'Meat',
      'Seafood',
      'Dairy',
      'Grain',
      'Baking',
      'Canned',
      'Frozen',
      'Condiment',
      'Beverage',
      'Snack',
      'Other'
    ],
    expiresAt: {
      type: Date,
    },
    notes: {
      type: String,
    }
  }
});


const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pantry: {

  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
