import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

async function validateHuman(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;
  const response = await fetch(verifyUrl, {
    method: 'POST',
  });

  const data = await response.json();
  return data.success;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = req.body.values;
  const { token } = req.body;

  const human = await validateHuman(token);
  if (!human) {
    res.status(400);
    res.json({ errors: ['Invalid Recaptcha!'] });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: `${process.env.SMTP_USER}`,
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong>${email} </p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `,
    });
    return res.status(200).json({ status: 'ok' });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}
