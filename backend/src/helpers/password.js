const argon2 = require("argon2");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const passwordHash = async (password) => {
  return argon2.hash(password, hashingOptions);
};

const passwordVerify = async (hashedPassword, plainPassword) => {
  return argon2.verify(hashedPassword, plainPassword, hashingOptions);
};

module.exports = { passwordHash, passwordVerify };
