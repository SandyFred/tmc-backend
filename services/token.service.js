const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (userId, expires, secret) => {
  const payload = {
    sub: userId,
  };
  const token = jwt.sign(payload, secret, { expiresIn: expires });
  return token;
};

const getToken = async (userId) => {
  const expires = "90 days";
  const secret = process.env.JWT_SECRET;
  const token = generateToken(userId, expires, secret);

  return token;
};

module.exports = { getToken };
