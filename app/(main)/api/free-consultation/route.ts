

import { NextRequest, NextResponse } from 'next/server';
import { validateWithZodSchema } from '@/utils/validateZodSchema';
import { rateLimitMiddleware } from '@/utils/rateLimiter';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';
import dotenv from 'dotenv';
import escapeHtml from 'escape-html';

dotenv.config();

const allowedOrigin = process.env.ALLOWED_ORIGIN || 'http://localhost:3000';

const safe = (str: string) => escapeHtml(str);

const corsHeaders = {
  'Access-Control-Allow-Origin': allowedOrigin,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};
const cspHeaders = {
  'Content-Security-Policy':
    "default-src 'self'; script-src 'none'; style-src 'self';",
};

// Zod schema for form validation (same as before)
const formParamsSchema = z.object({
  fullname: z
    .string()
    .min(1, 'Name is required')
    .max(100)
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')
    .trim(),
  email: z.string().email('Invalid email address'),
  company: z.string().min(1).max(100).trim(),
   message: z.string().min(1).max(1000).trim().optional(),
 
});

type FormParams = z.infer<typeof formParamsSchema>;

const sendEmail = async ({
  fullname,
  email,
 message,
  company,
 
}: FormParams) => {
  const transporter:Transporter = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_SMTP_SERVER as string,
  port: parseInt(process.env.NEXT_PUBLIC_SMTP_PORT as string, 10),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL as string,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD as string,
  },
});

  const mailConfig = {
    from: process.env.NEXT_PUBLIC_EMAIL,
    to: process.env.NEXT_PUBLIC_EMAIL,
    subject: 'New form submission from NDCC',
    html: `
       <h3>New message received!</h3>
      <p><strong>Name:</strong> ${safe(fullname)}</p>
      <p><strong>Email:</strong> ${safe(email)}</p>
      
      <p><strong>Company:</strong> ${safe(company)}</p>
      
      
      <p><strong>Message:</strong><br>${message && safe(message)}</p>
     
    `,
  };

  // Confirmation email to the client
  const clientMailConfig = {
    from: process.env.NEXT_PUBLIC_EMAIL,
    to: email,
    subject: 'Thank you for your request',
    html: `
      <h3>Thank you for your request</h3>
      <p>Dear ${safe(fullname)},</p>
     
      
       <p>We have received your request.</p>
      
      <p>Our team will get back to you as soon as possible.</p>
      <br/>
      <p>All the best,</p>
      <p>Nordic Data Compliance Centre</p>
      <p>Maglebjergvej 6</p>
      <p>2800 Kongens Lyngby</p>
      <p>VAT DK 44251434</p>
      <p><a href="mailto:hello@datacompliancecentre.com">hello@datacompliancecentre.com</a></p>
      <p>
        <a href="${
          process.env.TERMS_URL || 'https://www.datacompliancecentre.com/terms-and-conditions'
        }">Terms of Use</a> | 
        <a href="${process.env.PRIVACY_URL || 'https://www.datacompliancecentre.com/privacy'}">Privacy Statement</a>
      </p>
    `,
  };

  // Send both emails
  await transporter.sendMail(mailConfig);
  await transporter.sendMail(clientMailConfig);
  return 'Form sent successfully';
};

// Main handler
const handler = async (req: NextRequest): Promise<NextResponse> => {
  if (req.method !== 'POST') {
    return NextResponse.json(
      { message: 'Method not allowed' },
      { status: 405 }
    );
  }

  try {
    const body = await req.json();
    const validatedParams = validateWithZodSchema(formParamsSchema, body);

    const responseMessage = await sendEmail(validatedParams);

    return NextResponse.json(
      { message: responseMessage },
      {
        status: 200,
        headers: {
          ...corsHeaders,
          ...cspHeaders,
        },
      }
    );
  } catch (error) {
    console.error('Error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }

    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

// Wrap the handler with rate limiter
export const POST = rateLimitMiddleware(handler);
