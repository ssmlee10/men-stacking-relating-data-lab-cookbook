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


module.exports = router;