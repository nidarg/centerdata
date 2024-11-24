
import { validateWithZodSchema } from '@/utils/validateZodSchema';
import * as dotenv from 'dotenv';
import { NextRequest, NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';
import { z } from 'zod';

// import rateLimit from 'express-rate-limit';



dotenv.config();

// Environment variables validation
// const envSchema = z.object({
//   EMAIL_HOST: z.string().trim().min(1, { message: "Required" }),
//   EMAIL_PORT: z.string().trim().min(1, { message: "Required" }),
//   EMAIL_USER: z.string().trim().min(1, { message: "Required" }),
//   EMAIL_PASS: z.string().trim().min(1, { message: "Required" }),
 
// });
// envSchema.parse(process.env); // Will throw an error if any required env variable is missing

const allowedOrigin = process.env.ALLOWED_ORIGIN || 'https://datacompliancecentre.com';

// Zod schema for form data validation
const formParamsSchema = z.object({
  fullname: z.string().min(1, 'Name is required').trim(),
  email: z.string().email('Invalid email address'),
  company: z.string().min(1, 'Company is required').trim(),
  phone: z.string().min(1, 'Phone number is required').trim(),
  message: z.string().min(1, 'Message is required').trim(),
  // period: z.string().min(1, 'Period is required').trim(),
  period: z.string(),
  checked: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
  // recaptchaToken: z.string(), // reCAPTCHA token validation
});

// Type inference for the form data schema
type FormParams = z.infer<typeof formParamsSchema>;

// Rate limiter middleware
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 10, // Limit each IP to 10 requests per `window` (15 minutes)
//   message: 'Too many requests from this IP, please try again later.',
//   // standardHeaders: true, 
//   // legacyHeaders: false,
// });

// Utility to escape HTML to prevent XSS and email injection
const escapeHtml = (unsafe: string): string => {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

// Send email function
const sendEmail = async ({ fullname, email, phone, company, message, period }: FormParams): Promise<string> => {
  const transporter = nodemailer.createTransport({
    secure: true,
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
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
  return 'Form sent successfully';
};

// reCAPTCHA verification


// API route handler with rate limiting
export  async function POST(req: NextRequest ) {
  // await limiter(req, () => {
  //   return new Response('',{status:200})
  // });

  if (req.method !== 'POST') {
    return  NextResponse.json({message:'Method not allowed'},{status:405})
  }
  try {
    const body = await req.json();
   
    const validatedParams = validateWithZodSchema(formParamsSchema, body)
    // Send email
    const responseMessage = await sendEmail({...validatedParams});

    return new NextResponse(JSON.stringify({ message: responseMessage }),{
      status: 200,
      headers:{
        'Access-Control-Allow-Origin': allowedOrigin,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers':'Content-Type, Authorization'
      }
    })
   
  } catch (error) {
    console.error(`Error: ${error}`);
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify({ errors: error.errors }), {
        status: 400,
      });
    }else{
      return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500,
      });
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
