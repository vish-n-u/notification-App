const notification = require("../model/notification.model");
exports.createNotification = (req, res, next) => {
  if (!req.body.subject)
    return res.status(400).send("You have to provide Subject");
  if (!req.body.content)
    return res.status(400).send("You have to provide content");
  if (!req.body.recipientsEmailId)
    return res.status(400).send("You have to provide recievers email id");
  if (!req.body.requester)
    return res.status(400).send("You have to provide requesters email id");
  next();
};

exports.findById = (req, res, next) => {
  // id validity check
  const validId = notification.findOne({ _id: req.params.id });
  if (!validId) return res.status(400).send("You have to provide valid id");
  next();
};
