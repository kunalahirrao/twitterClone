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
};
