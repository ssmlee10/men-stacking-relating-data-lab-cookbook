const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// GET to the pantry index page
router.get('/', async (req, res) => {
  try {
    // look up user from req.session
    const currentUser = await User.findById(req.session.user._id);
    // render index.ejs, passing in all of the current user's foods as data in the context object
    res.render('foods/index.ejs', {
      pantry: currentUser.pantry
    });
  } catch(error) {
    console.log(error);
    res.redirect('/');
  }
});

// GET to the new foods form page
router.get('/new', (req, res) => {
  res.render('foods/new.ejs');
});

// POST a new food to the db
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

// GET to the individual food pages
router.get('/:foodId', async (req, res) => {
  try {
    // look up the user from req.session
    const currentUser = await User.findById(req.session.user._id);
    // find the food by the foodID supplied from req.params
    const food = currentUser.pantry.id(req.params.foodId);
    // render the show view, passing the food data into the context object
    res.render('foods/show.ejs', {
      food: food,
    });
  } catch(error) {
    console.log(error);
    res.redirect('/');
  }
});

module.exports = router;