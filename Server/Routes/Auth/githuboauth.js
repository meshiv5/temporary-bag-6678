const passport = require("passport");
const User = require("../../Models/user.model.js");
const { v4: uuidv4 } = require("uuid");
const GitHubStrategy = require('passport-github').Strategy;
const GITHUB_CLIENT_ID="73a96b3eb7fbc3444b85"
const GITHUB_CLIENT_SECRET="4be60d9d2626050c8fdf7bfd022eac7c40c3cdd3"
passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "https://zee5.cyclic.app/auth/github/callback",
    profileFields: ['email']
  },
 async function(accessToken, refreshToken, profile, cb) {
   const user = profile._json;
   const {email,name,avatar_url} = user;
   console.log(user);
   const existingUser = await User.findOne({ email });
      if (existingUser) {
        const payload = {
          _id: existingUser._id,
          email: existingUser.email,
          password: existingUser.password,
          name: existingUser.name,
          pic: existingUser.pic,
          user: existingUser.user
        };
        console.log(payload);
        return cb(null, payload);
      } else {
        const data = await User.create({
          name,
          email,
          pic: avatar_url,
          password: uuidv4(),
        });
        const { _id, password } = data;
        const payload = {
          email,
          name,
          _id,
          password,
          pic: avatar_url,
          user:"user"
        };
        console.log(data);
        console.log("payload" + payload);
        return cb(null, payload);
      }
  }
));

module.exports = passport;