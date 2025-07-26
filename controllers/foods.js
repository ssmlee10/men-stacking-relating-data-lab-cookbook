const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// router logic will go here
// routing to the pantry foods index page
router.get('/', async (req, res) => {
  try {
    // look up user from req.session
    const currentUser = await User.findById(req.session.user._id);
    console.log('pantry:', currentUser.pantry);
    // render index.ejs, passing in all of the current user's foods as data in the context object
    res.render('foods/index.ejs', {
      pantry: currentUser.pantry
    });
  } catch(error) {
    console.log(error);
    res.redirect('/');
  }
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