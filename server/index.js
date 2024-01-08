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
    from: "Zolvat LTD <devlearn41@gmail.com>",
    to: "muaviyaimran1122@gmail.com",
    subject: "options.subject",
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
        .socialIcon {
          cursor: pointer;
        }
        .main {
          width: 100%;
          background-color: white;
          padding: 40px 80px;
          border: 1px solid #B6B6B6;
          margin: 0 auto;
          margin: 0 auto;
          max-width: 1200px;
        }
        .logo {
          margin: 0 auto;
        }
        .container {
          font-family: var(--font-stack);
          width: 100%;
        }
        
        .bottombar {
          margin: 0 auto;
        }
        .nameStyle {
          color: #333;
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: 41px;
        }
        .welcome {
          color: #5b5b5b;
          display: block;
          text-align: center;
          font-size: 100px;
          font-style: normal;
          font-weight: 200;
          line-height: normal;
          letter-spacing: 15px;
        }
        
        .button {
          padding: 10px 24px;
          border-radius: 8px;
          background: #ffcf25;
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          letter-spacing: 0.4px;
          color: #333;
          margin-top: 18px;
        }
        .signature {
          margin: 16px 0;
        }
        .note {
          color: #808080;
          font-size: 24px;
          font-style: italic;
          font-weight: 400;
          line-height: 30px;
          margin-top: 16px;
        }
        .hr {
          border-color: "#B6B6B6";
          margin: 20px 0;
        }
        .paragraph {
          color: #333;
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: 41px;
          margin-top: 16px;
        }
        
        .designation {
          color: #808080;
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: 41px;
        }
        .underline {
          color: #2136f3;
          font-weight: 500;
          font-size: 24px;
          font-style: normal;
          line-height: 41px;
          text-decoration-line: underline;
        }
        
        .footerNoticeHeading {
          color: #808080;
          font-size: 18px;
          font-style: italic;
          font-weight: 600;
        }
        .footerNoticeDescription {
          font-size: 18px;
          font-weight: 400;
        }
        .socialMediaIconsTable {
          display: flex;
          justify-content: center;
          gap: 36px;
          margin: 20px 0;
        }
        
        .footerAboutUsTable {
          width: 100%;
        }
        .footerAboutUs {
          display: flex;
          font-size: 18px;
          color: #808080;
          justify-content: space-between;
          align-items: center;
          text-decoration-color: #808080;
          text-decoration-line: underline;
        }
        .footerAboutUsLinks {
          display: flex;
          gap: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 22px;
        }
      </style>
    </head>
    <body>
    ${template}
       
    </body>
    
    </html>
  `,
    attachments: [
      {
        filename: "logo.png",
        path: "public/icons/logo.png",
        cid: "logo",
      },
      {
        filename: "twitter.png",
        path: "public/icons/twitter.png",
        cid: "twitter",
      },
      {
        filename: "instagram.png",
        path: "public/icons/instagram.png",
        cid: "instagram",
      },
      {
        filename: "facebook.png",
        path: "public/icons/facebook.png",
        cid: "facebook",
      },
      {
        filename: "linkedin.png",
        path: "public/icons/linkedin.png",
        cid: "linkedin",
      },
      {
        filename: "signature.png",
        path: "public/icons/signature.png",
        cid: "signature",
      },
      {
        filename: "email-welcome-bottombar.png",
        path: "public/icons/email-welcome-bottombar.png",
        cid: "bottombar",
      },
    ],
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
