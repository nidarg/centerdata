import { validateWithZodSchema } from '@/utils/validateZodSchema';
import * as dotenv from 'dotenv';
import { NextRequest, NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';
import { z } from 'zod';

import rateLimit from 'express-rate-limit';

dotenv.config();

// Validate environment variables to ensure required configurations are present
const envSchema = z.object({
  GMAIL_USER: z.string().email('GMAIL_USER is required'),
  GMAIL_PASS: z.string().min(6, 'GMAIL_PASS is required'),
  ALLOWED_ORIGIN: z.string().url().min(2, 'ALLOWED_ORIGIN is required'),
});
const env = envSchema.parse(process.env); // Throws an error if validation fails

const allowedOrigin = process.env.ALLOWED_ORIGIN || 'http://localhost:3000';

// Zod schema for form data validation
const formParamsSchema = z.object({
  fullname: z
    .string()
    .min(1, 'Name is required')
    .max(100, "Name can't be long than 100 characters")
    .trim(),
  email: z.string().email('Invalid email address'),
  company: z
    .string()
    .min(1, 'Company is required')
    .max(100, "Company name can't be long than 100 characters")
    .trim(),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .max(20, "Phone Number can't be long than 20 characters")
    .trim()
    .regex(/^\d+$/, 'Phone number must contain only numbers'),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(1000, "Message can't be long than 1000 characters")
    .trim(),
  // period: z.string().min(1, 'Period is required').trim(),
  period: z.string(),
  checked: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
  // recaptchaToken: z.string(), // reCAPTCHA token validation
});

// Type inference for the form data schema
type FormParams = z.infer<typeof formParamsSchema>;

// Utility to escape HTML to prevent XSS and email injection
const escapeHtml = (unsafe: string): string => {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

// Rate limiter middleware to prevent brute force and DoS attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per window
  message: 'Too many requests, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Send email function
const sendEmail = async ({
  fullname,
  email,
  phone,
  company,
  message,
  period,
}: FormParams): Promise<string> => {
  // const transporter = nodemailer.createTransport({
  //   secure: true,
  //   host: process.env.EMAIL_HOST,
  //   port: Number(process.env.EMAIL_PORT),
  //   service:'gmail',
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.EMAIL_PASS,
  //   },
  // });
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address from the .env file
      pass: process.env.GMAIL_PASS, // Your Gmail app password from the .env file
    },
  });

  const mailConfig = {
    from: env.GMAIL_USER,
    to: env.GMAIL_USER, // Send emails to the same Gmail account
    // from: 'hello@datacompliancecentre.com',
    // to: 'hello@datacompliancecentre.com',
    subject: 'New form submission from NDCC',
    html: `
      <h3>Great news! You got a new message! Below is the summary:</h3>
      <p>User full name: <strong>${escapeHtml(fullname)}</strong></p>
      <p>Business email: <strong>${escapeHtml(email)}</strong></p>
      <p>Phone number: <strong>${escapeHtml(phone)}</strong></p>
      <p>Company name: <strong>${escapeHtml(company)}</strong></p>
      <p>Wants an appointment?: <strong>${period}</strong></p>
      <p style="border-left:10px solid #795ECB;padding-left:8px;border-radius:8px">${escapeHtml(
        message
      )}</p>
      <p>Best Regards, <strong>${escapeHtml(fullname)}</strong></p>
    `,
  };

  await transporter.sendMail(mailConfig);
  return 'Form sent successfully';
};

// reCAPTCHA verification

// API route handler with rate limiting
export async function POST(req: NextRequest) {
  // Rate limiting middleware
  await new Promise((resolve, reject) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    limiter(req as any, {} as any, (err?: any) =>
      err ? reject(err) : resolve(true)
    )
  );

  if (req.method !== 'POST') {
    return NextResponse.json(
      { message: 'Method not allowed' },
      { status: 405 }
    );
  }
  try {
    const body = await req.json();

    const validatedParams = validateWithZodSchema(formParamsSchema, body);
    // Send email
    const responseMessage = await sendEmail({ ...validatedParams });

    return new NextResponse(JSON.stringify({ message: responseMessage }), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': allowedOrigin,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (error) {
    console.error(`Error: ${error}`);
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify({ errors: error.errors }), {
        status: 400,
      });
    } else {
      return new NextResponse(
        JSON.stringify({ error: 'Internal Server Error' }),
        {
          status: 500,
        }
      );
    }
  }
}

// (Optional) Enforce HTTPS in production
// Uncomment the following code block if deployed on a server that allows redirects
/*
if (process.env.NODE_ENV === 'production') {
  export const config = {
    matcher: '/api/(.*)',
    async redirects() {
      return [
        {
          source: '/(.*)',
          destination: 'https://datacompliancecentre.com/$1',
          permanent: true,
        },
      ];
    },
  };
}
*/
