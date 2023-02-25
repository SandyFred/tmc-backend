const { User } = require("../models/user.model");

const signup = async (user) => {
  const isUsernameTaken = await User.isUsernameTaken(user.username);

  if (isUsernameTaken) {
    throw new Error("Username already taken");
  } else {
    try {
      const newUser = await User.create(user);
      return newUser;
    } catch (error) {
      throw new Error("Failed to create user");
    }
  }
};

const signin = async (username, password) => {
  const user = await User.findOne({ username: username });

  if (user) {
    const isPasswordMatch = await user.isPasswordMatch(password);

    if (isPasswordMatch) {
      return user;
    }
  }

  throw new Error("Incorrect email or password");
};

module.exports = {
  signup,
  signin,
};
