const auth = (req, res, next) => {
  if (!req.user) {
    return;
  } else {
    next();
  }
};

module.exports = auth;
