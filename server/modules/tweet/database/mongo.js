const { Tweet } = require("./schema");
const { User } = require("../../user/database/schema");
module.exports = {
  createTweet: async function (tweet) {
    try {
      const newTweet = new Tweet(tweet);
      await newTweet.save();
      return newTweet;
    } catch (err) {
      throw new QueryExecutionError();
    }
  },
  getAllTweets: async function (userId) {
    try {
      const { followers } = await User.findById(userId, "followers");
      const tweets = await Tweet.find({ userId: [...followers, userId] });
      return tweets;
    } catch (err) {
      throw new QueryExecutionError();
    }
  },
};
