import nodemailer from 'nodemailer';

export default async function handler(req, res) {


  let transporter = nodemailer.createTransport({
    host: 'smtp.zoho.in',
    port: process.env.SMTP_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: '"Lalshan Enquiry" <info@lalshansolutions.in>',
      to: "sagararoor@gmail.com",
      // to: "sagararoor@gmail.com, arjunchanduvely@gmail.com",
      subject: "From: " + req.body.Name,
      text: req.body.Message,
      html: "<div>Name: <b>" + req.body.Name + "</b></div><div>Email: <b>" + req.body.Email + "</b></div><div>Phone: <b>" + (req.body.Phone || "N/A") + "</b></div><div>Company: <b>" + (req.body.Company || "N/A") + "</b></div><div>Message: <b>" + req.body.Message + "</b></div>"
    });

    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Email failed to send.', error });
  }

}
