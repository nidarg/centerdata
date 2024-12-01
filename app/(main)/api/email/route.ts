import { NextRequest, NextResponse } from 'next/server';
import { validateWithZodSchema } from '@/utils/validateZodSchema';
import { rateLimitMiddleware } from '@/utils/rateLimiter';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const allowedOrigin = process.env.ALLOWED_ORIGIN || 'http://localhost:3000';

// Zod schema for form validation (same as before)
const formParamsSchema = z.object({
  fullname: z.string().min(1, 'Name is required').max(100).trim(),
  email: z.string().email('Invalid email address'),
  company: z.string().min(1).max(100).trim(),
  phone: z.string().min(1).max(20).trim().regex(/^\d+$/, 'Phone must contain only numbers'),
  message: z.string().min(1).max(1000).trim(),
  period: z.string(),
  checked: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
  orderedServices: z
  .array(
    z.object({
      title: z.string(),
      price: z.number(),
    })
  )
  .optional(),
});

type FormParams = z.infer<typeof formParamsSchema>;

const sendEmail = async ({ fullname, email, phone, company, message, period,orderedServices }: FormParams) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailConfig = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: 'New form submission from NDCC',
    html: `
      <h3>New message received!</h3>
      <p><strong>Name:</strong> ${fullname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Period:</strong> ${period}</p>
      <p><strong>Message:</strong><br>${message}</p>
      ${
        orderedServices && orderedServices.length > 0
          ? `<p><strong>Services Ordered:</strong></p>
             <ul>
               ${orderedServices
                 .map(
                   (service) =>
                     `<li>${service.title}</li>`
                 )
                 .join('')}
             </ul>`
          : `<p><strong>Services Ordered:</strong> None</p>`
      }
    `,
  };

  await transporter.sendMail(mailConfig);
  return 'Form sent successfully';
};

// Main handler
const handler = async (req: NextRequest): Promise<NextResponse> => {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  try {
    const body = await req.json();
    const validatedParams = validateWithZodSchema(formParamsSchema, body);

    const responseMessage = await sendEmail(validatedParams);

    return NextResponse.json({ message: responseMessage }, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': allowedOrigin,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (error) {
    console.error('Error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }

    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
};


// Wrap the handler with rate limiter
export const POST = rateLimitMiddleware(handler);
