'use client';
import React, { useState, useRef } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { DateInput } from '@/components/ui/date-input';
import { cn } from '@/lib/utils';
import { IconBrandLinkedin } from '@tabler/icons-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useCart } from '@/utils/context/CartContext';
import { useToast } from '@/components/ui/use-toast';
import Head from "next/head";

export default function ContactPage() {
  const t = useTranslations('common.contact');
  const router = useRouter();
  const { toast } = useToast();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = z.object({
    fullname: z.string()
      .min(1, { message: t('form.errors.nameRequired') })
      .regex(/^[a-zA-ZæøåÆØÅ\s-]+$/, { message: t('form.errors.nameFormat') }),
    email: z.string()
      .email({ message: t('form.errors.emailInvalid') }),
    phone: z.string()
      .min(1, { message: t('form.errors.phoneRequired') })
      .regex(/^\d+$/, { message: t('form.errors.phoneFormat') })
      .max(20, { message: t('form.errors.phoneLength') }),
    company: z.string()
      .min(1, { message: t('form.errors.companyRequired') })
      .max(100, { message: t('form.errors.companyLength') }),
    vat: z.string().optional(),
    message: z.string()
      .max(1000, { message: t('form.errors.messageLength') }),
    terms: z.boolean()
      .refine((val) => val === true, { message: t('form.errors.termsRequired') })
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    watch,
    reset,
    setValue,
    clearErrors,
  } = useForm<typeof formSchema>({ resolver: zodResolver(formSchema) });

  watch();

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
          console.error('reCAPTCHA verification failed.');
          setIsVerified(false);
        }
      }
    } catch (e) {
      console.error('Error during reCAPTCHA submission:', e);
      setIsVerified(false);
    }
  }

  const handleChange = (token: string | null) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }

  const onSubmit = async (data: typeof formSchema) => {
    try {
      console.log('Data ',data);
      
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
        });
      }

      toast({
        description: 'Your message was sent successfully.',
      });
      reset({
        fullname: '',
        email: '',
        company: '',
        vat:'',
        phone: '',
        message: '',
        terms: false,
      });
      setValue('terms', false);
    } catch (error) {
      console.log(error);
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
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='fullname'>{t('form.fullname')}</Label>
          <Input id='fullname' type='text' {...register('fullname')} />
          {errors.fullname && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.fullname.message}
            </span>
          )}
        </LabelInputContainer>

        <LabelInputContainer className='mb-4'>
          <Label htmlFor='email'>{t('form.email')}</Label>
          <Input id='email' type='email' {...register('email')} />
          {errors.email && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.email.message}
            </span>
          )}
        </LabelInputContainer>
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='phone'>{t('form.phone')}</Label>
          <Input id='phone' type='tel' {...register('phone')} />
          {errors.phone && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.phone.message}
            </span>
          )}
        </LabelInputContainer>
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
                </LabelInputContainer>

        <LabelInputContainer className='mb-8'>
          <Label htmlFor='message'>{t('form.message')}</Label>
          <Textarea id='message' {...register('message')} rows={4} />
          {errors.message && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.message.message}
            </span>
          )}
        </LabelInputContainer>

        <LabelInputContainer className='mb-8'>
          <div className='items-top flex space-x-2'>
            <Checkbox
              id='terms'
              {...register('terms')}
              onChange={(e) => {
                if (e.target.checked) {
                  clearErrors('terms');
                }
              }}
            />
            <div className='grid gap-1.5 leading-none'>
              <label
                htmlFor='terms'
                className='text-sm text-neutral-200 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                {t('form.terms')}
              </label>
            </div>
          </div>
          {errors.terms && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.terms.message}
            </span>
          )}
        </LabelInputContainer>

        <div className=' mb-10'>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
            ref={recaptchaRef}
            onChange={handleChange}
            onExpired={handleExpired}
          />
        </div>

        <Button
          type='submit'
          disabled={isSubmitting || !isVerified}
          className='bg-gradient-to-br relative group/btn from-zinc-900  to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
        >
          {t('form.submit')}
          <BottomGradient />
        </Button>

        <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />

        <div className='flex flex-col space-y-4'>
          <Link
            className=' relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-zinc-800 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
            href='https://linkedin.com/company/nordic-data-compliance-centre'
          >
            <IconBrandLinkedin className='h-4 w-4  text-neutral-300' />
            <span className='text-neutral-300 text-sm'>Linkedin</span>
            <BottomGradient />
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
}) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};
