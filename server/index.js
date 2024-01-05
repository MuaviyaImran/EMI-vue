import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/send-email", async (req, res) => {
  const { template } = req.body;
  console.log(req.body);
  const testAccount = await nodemailer.createTestAccount();
  console.log(testAccount);
  const transporter = nodemailer.createTransport({
    host: process.env.HOST || "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  const options = {
    from: testAccount.user,
    to: "muaviya.imran@datumbrain.com",
    subject: "hello world",
    html: template,
  };
  console.log(options);
  try {
    const resp = await transporter.sendMail(options);
    console.log("Message sent: %s", resp.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(resp));
    return res.json({ message: "Email sent" });
  } catch (error) {
    console.error("Error sending email:", error.message);
    return res.status(500).json({ error: "Error sending email" });
  }
});

app.listen(3001, () => {
  console.log("Running on Port 3001");
});
