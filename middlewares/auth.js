const auth = (req, res, next) => {
  if (!req.user) {
    return res.status(201).json({ msg: 'Permission denied, Login first' });
  } else {
    next();
  }
};

module.exports = auth;
