const credentialsCheck = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .send({ error: "Please specify email and password." });
  }
  return next();
};

module.exports = credentialsCheck;
