const moment = require('moment');
const logger = (req, res, next) => {
  console.log(
    `request - ${req.protocol}://${req.get('host')}${
      req.originalUrl
    } time - ${moment().format()}`
  );
  next();
};

module.exports = logger;