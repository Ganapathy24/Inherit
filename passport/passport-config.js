const LocalStrategy = require('passport-local');
const loginController = require('./loginController');

function configurePassport(passport) {
    passport.use(new LocalStrategy(
        {
            usernameField: 'name',
            passwordField: 'password'
        },
        function(username, password, done) {
            let result = loginController(username, password);
            if(result.status === "UNSUCCESSFUL")
                return done(null, false, { message: result.message })
            else if(result.status === "DENIED")
                return done(null, false, { message: result.message })
            else
                return done(null, result.data);
        }
        ));

        passport.serializeUser(function(user, done) {
            done(null, user.id);
        });
          
        passport.deserializeUser(function(id, done) {
            User.findById(id, function(err, user) {
                done(err, user);
            });
        });
}

module.exports = configurePassport