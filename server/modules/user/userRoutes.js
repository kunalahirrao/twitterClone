const express = require("express");
const router = new express.Router();
const api = require("./userController");
const auth = require("../../middlewares/auth");

router.get("/user-management/user", auth, api.getUser);

router.post("/user-management/user", api.createUser);

router.post("/user-management/login/user", api.loginUser);

router.patch("/user-management/add/follower", auth, api.addFollower);

router.post("/logout/user", auth, api.logoutUser);

router.get("/user-management/whom-to-follow", auth, api.whomToFollow);

router.patch("/update/user", auth, api.updateUser);

module.exports = router;
