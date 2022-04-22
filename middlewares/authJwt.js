const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

verifyToken = (req, res, next) => {
  var token = req.headers["x-access-token"];
  if (!token) {
    res.status(403).send({
      message: "No Token Provided",
    });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      res.status(401).send({
        message: "Unauthorized",
      });
    }
    req.id = decoded.id;
    next();
  });
};

const authJwt = {
  verifyToken: verifyToken,
};
module.exports = authJwt;
