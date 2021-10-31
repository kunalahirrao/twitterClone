const express = require("express");
const router = new express.Router();
const api = require("./userController");
const auth = require("../../middlewares/auth");

router.post("/user-management/user", api.createUser);

router.post("/user-management/login/user", api.loginUser);

router.patch("/user-management/add/follower", auth, api.addFollower);

router.get("/user-management/users", auth, api.getAllUsers);

router.post("/logout/user", auth, api.logoutUser);

module.exports = router;
