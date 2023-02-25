const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const saltRounds = 10;

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.statics.isUsernameTaken = async function (username) {
  const user = await this.find({ username: username });

  if (user.length !== 0) {
    return true;
  }

  return false;
};

userSchema.methods.isPasswordMatch = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.pre("save", function (next) {
  let user = this;

  bcrypt.hash(user.password, saltRounds, (err, hash) => {
    if (err) {
      return next(err);
    }

    user.password = hash;
    next();
  });
});

const userModel = mongoose.model("User", userSchema);

module.exports.User = userModel;
