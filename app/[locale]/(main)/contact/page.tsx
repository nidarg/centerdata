'use client';
import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRouter, useParams } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Head from "next/head";
import { IconBrandLinkedin } from '@tabler/icons-react';
import { DateInput } from '@/components/ui/date-input';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('common.contact');
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;
  const { toast } = useToast();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const formSchema = z.object({
    fullName: z
      .string()
      .min(1, 'Name is required')
      .max(100)
      .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')
      .trim(),
    email: z.string().email('Invalid email address'),
    company: z
      .string()
      .min(1, 'Company is required')
      .max(100, "Company name can't be longer than 100 characters")
      .trim(),
    phone: z
      .string()
      .min(1, 'Phone number is required')
      .max(20, "Phone number can't be longer than 20 characters")
      .trim()
      .regex(/^\d+$/, 'Phone number must contain only numbers'),
    message: z
      .string()
      .min(1, 'Message is required')
      .max(1000, "Message can't be longer than 1000 characters")
      .trim(),
    vat: z.string().min(1).max(1000).trim().optional(),
    period: z.string().optional(),
    terms: z.boolean().refine((val) => val === true, {
      message: 'You must accept the terms and conditions',
    }),
  });

  type FormSchemaType = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
    clearErrors,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        const response = await fetch('/api/recaptcha', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });
        if (response.ok) {
          setIsVerified(true);
        } else {
          setIsVerified(false);
        }
      }
    } catch (e) {
      setIsVerified(false);
    }
  }

  const onSubmit = async (data: FormSchemaType) => {
    try {
      setIsSubmitting(true);
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        toast({
          title: t('form.error'),
          description: t('form.errors.submissionError'),
        });
        return;
      }

      toast({
        description: t('form.success'),
      });
      reset();
      setIsVerified(false);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } catch (error) {
      toast({
        title: t('form.error'),
        description: t('form.errors.submissionError'),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    {/* Add the canonical tag using Head */}
      <Head>
               <meta name="description" content="Want to get in touch? Feel free to reach out to us with any inquiries, concerns, or assistance you may require." />
  <meta name="keywords" content="contact, get in touch, inquiry, support, company, help, business inquiries" />
  <meta name="author" content="Data Compliance Centre" />
  <link rel="canonical" href="https://www.datacompliancecentre.com/contact" />
  <meta property="og:title" content="Contact Us | Data Compliance Centre" />
  <meta property="og:description" content="Feel free to reach out to us for any inquiries, assistance, or feedback. Our team is ready to help you." />
  <meta property="og:url" content="https://www.datacompliancecentre.com/contact" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact Us | Data Compliance Centre" />
  <meta name="twitter:description" content="Contact us today for any business inquiries or assistance. We're here to help!" />
  
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Data Compliance Centre",
        "url": "https://www.datacompliancecentre.com/contact",
        "telephone": "+45 44251434",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Maglebjergvej 6",
          "addressLocality": "Kongens Lyngby",
          "postalCode": "2800",
          "addressCountry": "Denmark"
        },
        "email": "mailto:hello@datacompliancecentre.com",
        "sameAs": "https://www.linkedin.com/company/nordic-data-compliance-centre"
      })
    }}
  />
</Head>
  
     <div className='max-w-screen-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-gray-800 grid grid-cols-1 md:grid-cols-2  gap-4 mt-20'>
      <div className='bg-teal flex flex-col items-center justify-center text-neutral-200'>
        <h1 className='font-bold text-xl lg:text-2xl pt-10 lg:pt-0 leading-tight'>
          {t('title')}
        </h1>
        <p className='text-base lg:text-lg mt-4 max-w-md text-center leading-relaxed'>
          {t('description')}
        </p>
        <ul className='text-neutral-200 mt-6 text-sm lg:text-base space-y-2'>
          <li>Maglebjergvej 6</li>
          <li>2800 Kongens Lyngby</li>
          <li>Danmark</li>
          <li>VAT DK 44251434</li>
          <li>hello@datacompliancecentre.com </li>
        </ul>
      </div>

      <form className='my-8' onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='fullName' className='flex flex-col gap-y-2'>
            <span>{t('form.fullname')}</span>
          </Label>
          <Input id='fullName' type='text' {...register('fullName')} />
          {errors.fullName && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.fullName.message}
            </span>
          )}
        </LabelInputContainer>

        {/* Email */}
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='email' className='flex flex-col gap-y-2'>
            <span>{t('form.email')}</span>
          </Label>
          <Input id='email' type='email' {...register('email')} />
          {errors.email && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.email.message}
            </span>
          )}
        </LabelInputContainer>

        {/* Phone */}
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='phone' className='flex flex-col gap-y-2'>
            <span>{t('form.phone')}</span>
          </Label>
          <Input id='phone' type='tel' {...register('phone')} />
          {errors.phone && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.phone.message}
            </span>
          )}
        </LabelInputContainer>

        {/* Company Name */}
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='company' className='flex flex-col gap-y-2'>
            <span>{t('form.company')}</span>
          </Label>
          <Input id='company' type='text' {...register('company')} />
          {errors.company && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.company.message}
            </span>
          )}
        </LabelInputContainer>

        {/* Company VAT */}
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='vat' className='flex flex-col gap-y-2'>
            <span>{t('form.vat')}</span>
          </Label>
          <Input id='vat' type='text' {...register('vat')} />
          {errors.vat && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.vat.message}
            </span>
          )}
        </LabelInputContainer>

        {/* Period */}
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='period' className='flex flex-col gap-y-2'>
            <span>{t('form.period')}</span>
          </Label>
          <DateInput id='period' type='text' {...register('period')} />
          {errors.period && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.period.message}
            </span>
          )}
        </LabelInputContainer>

        {/* Message */}
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='message' className='flex flex-col gap-y-2'>
            <span>{t('form.message')}</span>
          </Label>
          <Textarea id='message' {...register('message')} rows={4} />
          {errors.message && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.message.message}
            </span>
          )}
        </LabelInputContainer>

        {/* Terms and Conditions */}
        <LabelInputContainer className='mb-8'>
          <div className='flex items-center space-x-2'>
            <Checkbox
              id='terms'
              {...register('terms')}
              className='border-neutral-200'
            />
            <label
              htmlFor='terms'
              className='text-sm text-neutral-200 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              {t('form.terms.text')}{' '}
              <Link href={`/${locale}/terms-and-conditions`} className="text-teal-500 hover:text-teal-400">
                {t('form.terms.terms')}
              </Link>{' '}
              {t('form.terms.and')}{' '}
              <Link href={`/${locale}/privacy`} className="text-teal-500 hover:text-teal-400">
                {t('form.terms.privacy')}
              </Link>
            </label>
          </div>
          {errors.terms && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.terms.message}
            </span>
          )}
        </LabelInputContainer>

        {/* reCAPTCHA */}
        <div className='mb-10'>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
            ref={recaptchaRef}
            onChange={(token) => handleCaptchaSubmission(token)}
            onExpired={() => setIsVerified(false)}
          />
        </div>

        {/* Submit Button */}
        <button
          className='bg-gradient-to-br relative group/btn from-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium'
          type='submit'
          disabled={isSubmitting || !isVerified}
        >
          {t('form.submit')} &rarr;
        </button>

        <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />

        {/* LinkedIn Link */}
        <div className='flex flex-col space-y-4'>
          <Link
            className='relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium'
            href='https://linkedin.com/company/nordic-data-compliance-centre'
          >
            <IconBrandLinkedin className='h-4 w-4 text-neutral-300' />
            <span className='text-neutral-300 text-sm'>LinkedIn</span>
          </Link>
        </div>
      </form>
    </div>
    </>
   
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
      <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn('flex flex-col space-y-2 w-full', className)}>
    {children}
  </div>
);
