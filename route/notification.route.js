const notificationController = require("../controller/notification.controller");
const notificationValidation = require("../middleware/notification.validation");
module.exports = (app) => {
  app.post(
    "/notifcationServ/api/v1/createNotification",
    [notificationValidation.createNotification],
    notificationController.createNewNotification
  );
  app.get(
    "/notifcationServ/api/v1/find/:id",
    [notificationValidation.findById],
    notificationController.findById
  );
};
