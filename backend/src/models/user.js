const db = require("../../config");

const createUser = (payload) => {
  return db
    .promise()
    .query("INSERT INTO user SET ?", [payload])
    .then(([res]) => res);
};

const findUserByEmail = (email) => {
  return db
    .promise()
    .query("SELECT * FROM user where email = ?", [email])
    .then(([res]) => res);
};

const findUserById = (id) => {
  return db
    .promise()
    .query("SELECT firstname, lastname, email FROM user where id = ?", [
      Number(id),
    ])
    .then(([res]) => res);
};
const findRoleByUser = (id) => {
  return db
    .promise()
    .query(
      "SELECT role.id FROM role INNER JOIN user ON role.id = user.role_id where user.id = ?",
      [Number(id)]
    )
    .then(([res]) => res);
};

module.exports = { createUser, findUserByEmail, findUserById, findRoleByUser };
