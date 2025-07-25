// if user exists, move on to the next function in the chain
// middleware/is-signed-in.js
const isSignedIn = (req, res, next) => {
    if (req.session.user) return next();
    res.redirect('/auth/sign-in');
};

module.exports = isSignedIn;