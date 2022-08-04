const nodemailer = require("nodemailer");
module.exports = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 465,
  service: "gmail",
  // true for 465, false for other ports
  auth: {
    user: "vishnuna26@gmail.com", // generated gmail user
    pass: "suzvxkkvmfubfpbe", // generated gmail password
  },
  secure: true,
});
