const mongo = require("./database/mongo");
const responseGenerator = require("../../utils/responseGenerator");
const responseMessages = require("../../utils/responseMessages");
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
module.exports = {
  createUser: async (req, res, next) => {
    const { user } = req.body;
    console.log(user)
    try {
      await mongo.createUser(user);
      const { statusCode, msg, isShown } = responseMessages.user.createUser;
      res
        .status(statusCode)
        .send(responseGenerator.getResponse(statusCode, msg, isShown));
    } catch (err) {
      next(err);
    }
  },
  loginUser: async (req, res, next) => {
    const { email, password } = req.body;
    try {
      //findByCredentials defined in signup model
      const user = await mongo.findByCredentials(email, password);
      //Creating a method on user instance -- specific to user
      const token = await user.generateAuthToken();
      const { statusCode, msg, isShown } = responseMessages.user.login;
      res.status(statusCode).send(
        responseGenerator.getResponse(statusCode, msg, isShown, {
          user,
          token,
        })
      );
    } catch (err) {
      next(err);
    }
  },
  logoutUser: async (req, res, next) => {
    try {
      req.user.tokens = req.user.tokens.filter((token) => {
        return token.token !== req.token;
      });
      await req.user.save();
      const { statusCode, msg, isShown } = responseMessages.user.logout;
      res
        .status(statusCode)
        .send(responseGenerator.getResponse(statusCode, msg, isShown));
    } catch (err) {
      next(err);
    }
  },
  addFollower: async (req, res, next) => {
    const { _id } = req.user;
    const { followerId } = req.body;
    try {
      await mongo.addFollower(followerId, _id);
      const { statusCode, msg, isShown } = responseMessages.user.addFollower;
      res
        .status(statusCode)
        .send(responseGenerator.getResponse(statusCode, msg, isShown));
    } catch (err) {
      next(err);
    }
  },
  whomToFollow: async (req, res, next) => {
    const { _id } = req.user;
    try {
      const users = await mongo.getWhomToFollow(_id);
      const { statusCode, msg, isShown } = responseMessages.user.addFollower;
      res
        .status(statusCode)
        .send(responseGenerator.getResponse(statusCode, msg, isShown, users));
    } catch (err) {
      next(err);
    }
  },
  updateUser: async (req, res, next) => {
    const { _id } = req.user;
    const { name, email, password, mobileNo } = req.body;
    try {
      const user = await mongo.updateUser(_id, name, email, password, mobileNo);
      const { statusCode, msg, isShown } = responseMessages.user.addFollower;
      res
        .status(statusCode)
        .send(responseGenerator.getResponse(statusCode, msg, isShown, user));
    } catch (err) {
      next(err);
    }
  },
  getUser: async (req, res, next) => {
    const { _id } = req.user;
    try {
      const user = await mongo.getUserDetails(_id);
      const { statusCode, msg, isShown } = responseMessages.user.addFollower;
      res
        .status(statusCode)
        .send(responseGenerator.getResponse(statusCode, msg, isShown, user));
    } catch (err) {
      next(err);
    }
  },
};
