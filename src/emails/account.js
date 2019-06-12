const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGIRD_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "vlad.bicu7@gmail.com",
    subject: `Welcome ${name}`,
    text: `Hello ${name}! We are happy to have you as one of our customers.`
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "vlad.bicu7@gmail.com",
    subject: `Goodbye ${name}`,
    text: `${name}, we are sorry to see you leave. Hope we can see you soon`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
};
