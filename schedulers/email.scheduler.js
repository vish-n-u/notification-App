const cron = require("node-cron");
const Notification = require("../model/notification.model");
const constants = require("../utils/constants");
const nodemailer = require("../notfiers/emailService");

const emailScheduler = cron.schedule("* 30  * * * *", async () => {
  let unsentEmails = await Notification.find({
    status: constants.emailStatus.notSent,
  });
  if (unsentEmails) {
    console.log("UNSENT EMAILS ARE:", unsentEmails.length);
    unsentEmails.forEach(async (n) => {
      console.log(n.recipientsEmailId);
      const emailObj = {
        to: n.recipientsEmailId,
        subject: n.subject,
        body: n.content,
      };
      nodemailer.sendMail(emailObj, (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log("sent Mail for ", n.requester);
        }
      });
      n.status = constants.emailStatus.sent;
      await n.save();
    });
  }
});
