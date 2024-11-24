

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer'


const escapeHtml = (unsafe: string): string => {
    return unsafe
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

export async function POST(request:NextRequest) {
    try {
        const { fullname, email, phone, company, message, period,  } = await request.json();

        const transporter = nodemailer.createTransport({
            // secure: true,
            // host: process.env.EMAIL_HOST,
            // port: Number(process.env.EMAIL_PORT),
            service:'gmail',
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
          });

          const mailConfig = {
            from: 'hello@datacompliancecentre.com',
            to: 'hello@datacompliancecentre.com',
            subject: 'New form submission from NDCC',
            html: `
              <h3>Great news! You got a new message! Below is the summary:</h3>
              <p>User full name: <strong>${escapeHtml(fullname)}</strong></p>
              <p>Business email: <strong>${escapeHtml(email)}</strong></p>
              <p>Phone number: <strong>${escapeHtml(phone)}</strong></p>
              <p>Company name: <strong>${escapeHtml(company)}</strong></p>
              <p>Wants an appointment?: <strong>${period}</strong></p>
              <p style="border-left:10px solid #795ECB;padding-left:8px;border-radius:8px">${escapeHtml(message)}</p>
              <p>Best Regards, <strong>${escapeHtml(fullname)}</strong></p>
            `,
          };
        
          await transporter.sendMail(mailConfig);

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}