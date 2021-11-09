const { User } = require("./schema");
const { QueryExecutionError } = require("../../../utils/errors");

module.exports = {
  createUser: async function (user) {
    try {
      const newUser = new User(user);
      await newUser.save();
      const token = await newUser.generateAuthToken();
      return { newUser, token };
    } catch (err) {
      throw new QueryExecutionError();
    }
  },
  findByCredentials: async function (email, password) {
    try {
      const user = await User.findByCredentials(email, password);
      return user;
    } catch (err) {
      throw new QueryExecutionError();
    }
  },
  addFollower: async function (followerId, _id) {
    try {
      const user = await User.findByIdAndUpdate(_id, {
        $push: { followers: followerId },
      });
      return user;
    } catch (err) {
      console.log(err);
      throw new QueryExecutionError();
    }
  },
  getWhomToFollow: async function (userId) {
    try {
      const { followers } = await User.findById(userId, "followers");
      const users = await User.find({
        _id: { $nin: [...followers, userId] },
      });
      console.log(followers);
      return users;
    } catch (err) {
      throw new QueryExecutionError();
    }
  },
  updateUser: async function (userId, name, email, password, mobileNo) {
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        { name, email, password, mobileNo },
        { new: true }
      );
      return user;
    } catch (error) {
      throw new QueryExecutionError();
    }
  },
  getUserDetails: async function (userId) {
    try {
      const user = await User.findById(userId)
      return user
    } catch (error) {
      throw new QueryExecutionError();
    }
  },
};
