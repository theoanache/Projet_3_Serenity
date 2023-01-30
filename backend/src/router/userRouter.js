const express = require("express");

const userRouter = express.Router();

const {
  addUser,
  getOneUser,
  userLogin,
  userLogout,
  getRoleByUser,
} = require("../controllers/userController");
const credentialsCheck = require("../middleware/credentialsCheck");
const authorization = require("../helpers/authentication");

userRouter.post("/new", credentialsCheck, addUser);
userRouter.get("/authCheck", authorization, (req, res) => {
  const email = req.userEmail;
  res.status(200).send(email);
});

userRouter.get("/roleCheck", authorization, getRoleByUser);
userRouter.get("/", authorization, getOneUser);
userRouter.post("/login", credentialsCheck, userLogin);
userRouter.get("/logout", authorization, userLogout);
userRouter.get("/roleCheck", authorization, getRoleByUser);

module.exports = userRouter;
