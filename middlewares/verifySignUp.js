const users = require("../models/").users;

checkEmailOrUsernameExist = (req, res, next) => {
  users
    .findOne({
      where: {
        username: req.body.username,
      },
    })
    .then((user) => {
      if (user) {
        res.status(400).send({
          message: "Username Exist",
        });
        return;
      }
      next();
    });
};
const verifyUserAccount = {
  checkEmailOrUsernameExist: checkEmailOrUsernameExist,
};
module.exports = verifyUserAccount;
