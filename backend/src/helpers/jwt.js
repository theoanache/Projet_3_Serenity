const jwt = require("jsonwebtoken");

const jwtSign = (payload, options = {}) => {
  return jwt.sign(payload, process.env.JWT_AUTH_SECRET, options);
};

const jwtVerify = (token) => {
  return jwt.verify(token, process.env.JWT_AUTH_SECRET);
};

module.exports = { jwtSign, jwtVerify };
