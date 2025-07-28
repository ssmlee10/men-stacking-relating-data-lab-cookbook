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

// GET to individual users' pantries on show.ejs
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('pantry');
        res.render('users/show.ejs', { user });
    } catch(error) {
        console.log(error);
        res.redirect('/');
    }
});

module.exports = router;