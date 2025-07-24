const passUserToView = (req, res, next) => {
    // if someone is logged in, then set res.locals.user to that user, otherwise set res.locals.user to null
    res.locals.user = req.session.user ? req.session.user : null;
    next();
};

// exports the function so you can require it in server.js
module.exports = passUserToView;