import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.post("/api/send-email", async (req, res) => {
  const { template } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "muaviya.imran@datumbrain.com",
      pass: "devn vcbs yqbr oqvh",
    },
  });
  const mailOptions = {
    from: "Zolvat LTD <zolvatltd@gmail.com>",
    to: "muaviyaimran1122@gmail.com",
    subject: "Welcome To Zolvat",
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        :root {
          --font-stack: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        }
        body{
          font-family: var(--font-stack);
        }
      </style>
    </head>
    <body>
      ${template}
       
    </body>
    
    </html>
  `,
  };
  try {
    const resp = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", resp.messageId);

    return res.json({ message: "Email sent" });
  } catch (error) {
    console.error("Error sending email:", error.message);
    return res.status(500).json({ error: "Error sending email" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
