const constants = require("../utils/constants");
const Notification = require("../model/notification.model");

// controller to create new Notification
exports.createNewNotification = async (req, res) => {
  // create new notificationObj for req.body provided
  const notificationObj = {
    subject: req.body.subject,
    content: req.body.content,
    recipientsEmailId: req.body.recipientsEmailId,
    requester: req.body.requester,
  };

  // save notification request
  let newNotification;
  try {
    newNotification = await Notification.create(notificationObj);
    console.log(newNotification);
    let response = {
      subject: newNotification.subject,
      content: newNotification.content,
      _id: newNotification._id,
    };
    res.status(200).send({
      message: "Your ticket has been accepted",
      subject: response.subject,
      content: response.content,
      trackingId: response._id,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send(constants.DbErrorMessage);
  }
  // send confirmation and tracking id based on _id
};
// controller to fetch notification based on id
exports.findById = async (req, res) => {
  console.log(true);
  const emailStatusID = req.params.id;
  try {
    notificationDetails = await Notification.findOne({ _id: emailStatusID });
    return res.status(200).send(notificationDetails);
  } catch (err) {
    console.log(err);
    return res.status(500).send(constants.DbErrorMessage);
  }
};
