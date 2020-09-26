const auth = (req, res, next) => {
  if (!req.user) {
    return res.send('Logi first');
  } else {
    next();
  }
};

module.exports = auth;
