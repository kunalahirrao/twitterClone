const express = require("express");
const router = new express.Router();
const auth = require("../../middlewares/auth");
const api = require("./tweetController");
const jwt = require("express-jwt");

router.post("/tweet-management/tweet", auth, api.createTweet);
router.get("/tweet-management/tweets",auth,api.getTweets)

module.exports = router;
