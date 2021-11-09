const mongoose = require("mongoose");
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
      const ownTweets = await User.findById(userId).populate({
        path: "tweets",
        populate: [{ path: "userId" }],
      });
      const tweets = [...followersTweets, ...ownTweets.tweets];
      return tweets.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    } catch (err) {
      throw new QueryExecutionError();
    }
  },
  getBookmarks: async function (userId) {
    try {
      const user = await User.findById(userId).populate("bookmarks").lean();      
      const bookmarks = user.bookmarks.map((bookmark)=>{
        return {
          ...bookmark,
          userName:user.name
        }
      })        
      return bookmarks;
    } catch (err) {
      throw new QueryExecutionError();
    }
  },
  likeTweet: async function (userId, tweetId) {
    try {
      const tweet = await Tweet.findByIdAndUpdate(
        { _id: tweetId },
        { $inc: { like: 1 } },
        { new: true }
      );
      return tweet;
    } catch (err) {
      throw new QueryExecutionError();
    }
  },
  bookMarkTweet: async function (userId, tweetId) {
    try {
      await User.findByIdAndUpdate(
        { _id: userId },
        {
          $push: { bookmarks: tweetId },
        }
      );
    } catch (err) {
      console.log(err);
      throw new QueryExecutionError();
    }
  },
};
