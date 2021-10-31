const mongo = require("./database/mongo");
const responseGenerator = require("../../utils/responseGenerator");
const responseMessages = require("../../utils/responseMessages");
module.exports = {
  createTweet: async (req, res, next) => {
    const { _id } = req.user;
    const { tweet } = req.body;
    try {
      await mongo.createTweet({ ...tweet, userId: _id, date: new Date() });
      const { statusCode, msg, isShown } = responseMessages.tweet.createTweet;
      res
        .status(statusCode)
        .send(responseGenerator.getResponse(statusCode, msg, isShown));
    } catch (err) {
      next(err);
    }
  },
  getTweets: async (req, res, next) => {
    const { _id } = req.user;
    try {
      const tweets = await mongo.getAllTweets(_id);
      const { statusCode, msg, isShown } = responseMessages.tweet.getTweets;
      res
        .status(statusCode)
        .send(responseGenerator.getResponse(statusCode, msg, isShown, tweets));
    } catch (error) {
      next(err);
    }
  },
};
