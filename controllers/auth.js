const users = require("../models").users;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const config = require("../config/auth.config");

exports.signup = (req, res) => {
  users
    .create({
      names: req.body.names,
      email: req.body.email,
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 8),
      role: req.body.role,
    })
    .then((user) => {
      let token = jwt.sign(
        { id: user.id, names: user.names, email: user.email },
        config.secret,
        {
          expiresIn: 86400, //expire in 24 hours
        }
      );
      res.status(200).send({
        id: user.id,
        email: user.email,
        accessToken: token,
      });
    })
    .catch((error) => res.status(400).send(error.message));
};

exports.signin = (req, res) => {
  users
    .findOne({
      where: {
        username: req.body.username,
      },
    })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User Not Found",
        });
      }
      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(404).send({
          accessToken: null,
          message: "Password Invalid",
        });
      }
      let token = jwt.sign(
        { id: user.id, names: user.names, email: user.email },
        config.secret,
        {
          expiresIn: 86400, //expire in 24 hours
        }
      );
      res.status(200).send({
        id: user.id,
        email: user.email,
        token: token,
      });
    })
    .catch((err) => {
      res.status(400).send({ message: err.message });
    });
};
