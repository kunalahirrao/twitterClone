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
      const followersTweets = await Tweet.find(
        { userId: { $in: followers } },
        null,
        {
          sort: {
            date: -1,
          },
        }
      );
      const ownTweets = await User.findById(userId).populate("tweets");
      const tweets = [...followersTweets, ...ownTweets.tweets];
      return tweets.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    } catch (err) {
      throw new QueryExecutionError();
    }
  },
};
