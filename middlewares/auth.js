const auth = (req, res, next) => {
  if (!req.user) {
    res.send('<h1>You are not authorized</h1>');
  } else {
    next();
  }
};

module.exports = auth;
