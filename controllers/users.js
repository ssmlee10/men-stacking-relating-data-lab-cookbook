const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// GET the users index page
router.get('/', async (req, res) => {
    const allUsers = await User.find({});
    res.render('users/index.ejs', {
        users: allUsers,
    });
});

// GET to individual users' pantries
router.get('/', async (req, res) => {
    
});

module.exports = router;