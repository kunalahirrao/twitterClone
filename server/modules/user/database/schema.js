const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    mobileNo: {
      type: String,
    },
    password: {
      type: String,
    },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

//Virtual Attribute ----Not actually stored ---Just to estblish relationship
userSchema.virtual("tweets", {
  //Virtual Field---tweets
  ref: "Tweet", //Tweet Model
  localField: "_id", //Local id
  foreignField: "userId", //userId field on  Tweet Model
});

//Schema level -- User
//Hashing the plain text password before Saving---Normal function as binding plays an imp role and arrow function does not provide binding
userSchema.pre("save", async function (next) {
  const user = this;
  //Hashing Password after being modified
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next(); // To indicate end of function
});

//Instance Level -- On individual user
//findByCredentials --- statics methods are available on model
userSchema.statics.findByCredentials = async function (email, password) {
  //Used shorthand instead of {email:email}
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error();
  }
  //Matching  password entered with hashed password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error();
  }
  return user;
};

//Generating authentication token --- instance method

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "thisismyid");
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

//Hiding sensitive information from Logged In user
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};
const User = mongoose.model("User", userSchema);

module.exports = { User };
