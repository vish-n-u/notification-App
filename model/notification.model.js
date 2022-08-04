const mongoose = require("mongoose");
const constants = require("../utils/constants");

const notificationSchema = new mongoose.Schema({
  recipientsEmailId: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  requester: {
    type: String,
  },
  status: {
    type: String,
    default: constants.emailStatus.notSent,
    enum: [constants.emailStatus.sent, constants.emailStatus.notSent],
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
  updatedAt: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
});

module.exports = mongoose.model("notification", notificationSchema);
