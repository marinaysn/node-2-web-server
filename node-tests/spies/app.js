let db = require('./db.js');

module.exports.handleSignup = (email, password) => {
    //Check if email exist
    db.saveUser({ email, password });
}