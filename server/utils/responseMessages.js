module.exports = {
  tweet: {
    createTweet: {
      statusCode: 201,
      msg: "Tweet created successfully",
      isShown: "0",
    },
    getTweets: {
      statusCode: 201,
      msg: "Tweets",
      isShown: "1",
    },
    likeTweet: {
      statusCode: 200,
      msg: "Liked",
      isShown: "0",
    },
  },
  user: {
    createUser: {
      statusCode: 201,
      msg: "User created successfully",
      isShown: "0",
    },
    login: {
      statusCode: 200,
      msg: "User loggedin successfully",
      isShown: "0",
    },
    logout: {
      statusCode: 200,
      msg: "User loggedOut successfully",
      isShown: "0",
    },
    addFollower: {
      statusCode: 201,
      msg: "Follower Added successfully",
      isShown: "0",
    },
  },
};
