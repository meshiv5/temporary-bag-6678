const passport = require("passport");
const User = require("../../Models/user.model.js");
const { v4: uuidv4 } = require("uuid");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GOOGLE_CLIENT_ID =
  "592041502906-soi11274l2t7sm9boa9lk83kg1kaldqo.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
require("dotenv").config();
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      const user = profile._json;
      const { email, picture, name } = user;
      // console.log(user)
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        const payload = {
          _id: existingUser._id,
          email: existingUser.email,
          password: existingUser.password,
          name: existingUser.name,
          pic: existingUser.pic,
        };
        console.log(payload);
        return cb(null, payload);
      } else {
        const data = await User.create({
          name,
          email,
          pic: picture,
          password: uuidv4(),
        });
        const { _id, password } = data;
        const payload = {
          email,
          name,
          _id,
          password,
          pic: picture,
        };
        console.log(data);
        console.log("payload" + payload);
        return cb(null, payload);
      }
    }
  )
);

module.exports = passport;
