const express = require("express");
const User = require("../../Models/user.model.js");
const jwt = require("jsonwebtoken");
const server = express.Router();
const bcrypt = require("bcrypt");
require("dotenv").config();
server.post("/signup", async (req, res) => {
  let { name, email, password, pic } = req.body;

  try {
    let existinguser = await User.findOne({ email });
    if (existinguser) {
      res.status(404).send('we can"t able to create email alreay in use');
    } else {
      const salt = await bcrypt.genSalt(10);
      const crypted = await bcrypt.hash(password, salt);
      console.log(crypted);
      if (pic) {
        let user = await User.create({
          name,
          email,
          password: crypted,
          pic,
        });
      } else {
        let user = await User.create({
          name,
          email,
          password: crypted,
        });
      }
      return res.status(201).send("User created successfully");
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});

server.post("/signin", async (req, res) => {
  let { password, email } = req.body;
  try {
    let user = await User.findOne({ email });
    console.log(user);
    if (user.password) {
      console.log(user);
      let verifyed = await bcrypt.compare(password, user.password);
      if (verifyed) {
        if (user.pic) {
          let data = {
            name: user.name,
            email,
            pic: user.pic,
          };

          const token = await jwt.sign(data, process.env.JWT_SECRET);
          console.log(token);
          res.cookie("karthik",token)
          return res.send(token);
        }
        let data = {
          name: user.name,
          email,
        };

        const token = await jwt.sign(data, process.env.JWT_SECRET);
        console.log(token);
        res.cookie("TOKEN", token);
        return res.send(token);
      }
    } else {
      return res.send("flase");
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = server;
