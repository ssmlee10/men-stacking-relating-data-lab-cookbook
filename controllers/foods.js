const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// router logic will go here
// routing to the goods index page
router.get('/', (req, res) => {
    res.render('foods/index.ejs');
});

// routing to new foods page
router.get('/new', (req, res) => {
    res.render('foods/new.ejs');
});

// creating a new food
router.post('/', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.pantry.push(req.body);
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/foods`);
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

module.exports = router;