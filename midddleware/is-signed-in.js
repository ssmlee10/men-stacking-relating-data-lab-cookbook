const isSignedIn = (req, res, next) => {
    // if user is logged in, proceed to next function
    if (req.session.user) return next();
    // if not, redirect user to sign in
    res.redirect('/auth/sign-in');
};

// exports the function so it can be used in server.js
module.exports = isSignedIn;