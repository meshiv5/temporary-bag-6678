const express = require("express");
require("dotenv").config();
const server = express();
const jwt = require("jsonwebtoken");
const connect = require("./Utils/dbconnect.js");
const cors = require("cors");
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

//google
const passport = require("./Routes/Auth/googleOauth2");
// github
const github = require("./Routes/Auth/githuboauth");
const cookieParser = require("cookie-parser");
server.use(cookieParser());
const userRouter = require("./Routes/Auth/user.routes.js");

//search Router
const app = require("./Routes/search.route.js");
server.use("/",app)

server.use("/user", userRouter);
const PORT = process.env.PORT || 8080;
server.get("/", (req, res) => {
  res.send("Hello world!");
});

// Google

server.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

server.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/signin",
    session: false,
  }),
  async function (req, res) {
    if (req.user) {
      try {
        const token = await jwt.sign(req.user, "KARTHIK");
        console.log(token);
        res.cookie("TOKEN", token);
      } catch (e) {
        console.log(e);
      }
    }

    // Successful authentication, redirect home.
    res.redirect(`http://localhost:3000?token=${token}`);
  }
);

// Github

server.get(
  "/auth/github",
  github.authenticate("github", { scope: ["user:email"] })
);

server.get(
  "/auth/github/callback",
  github.authenticate("github", { failureRedirect: "/signin", session: false }),
  async function (req, res) {
    if (req.user) {
      try {
        const token = await jwt.sign(req.user, "KARTHIK");
        console.log(token);
        res.cookie("TOKEN", token);
      } catch (e) {
        console.log(e);
      }
    }

    // Successful authentication, redirect home.
    res.redirect(`http://localhost:3000?token=${token}`);
  }
);



server.listen(PORT, async () => {
  try {
    await connect();
    console.log("DB Connected Successfully");
  } catch (e) {
    console.log("MongoDB Connection failed");
  }
  console.log(`server listening on ${PORT}`);
});
