'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useCartContext } from '@/utils/context/CartContext';
import { IntProductPayload } from '@/utils/types';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { Check } from 'lucide-react';
import Head from "next/head";
import { useTranslations } from 'next-intl';

// Zod schema for form data validation
const formSchema = z.object({
  fullname: z
    .string()
    .min(1, 'Name is required')
    .max(100)
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')
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
    .trim().optional(),
    vat: z.string().min(1).max(1000).trim().optional(),
  period: z.string().optional(),
  checked: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function Checkout() {
  const t = useTranslations('common.checkout');
  const { toast } = useToast();
  const { cart, removeAllFromCart } = useCartContext();
  const [selectedServices, setSelectedServices] = useState<IntProductPayload[]>(
    []
  );
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    setSelectedServices(cart); // Populate selected services from cart context
  }, [cart]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
    // watch,
    reset,
    clearErrors,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  // Captcha verification function
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      setIsVerified(false);
    }
  }

  const onSubmit = async (data: FormSchemaType) => {
    try {
      // Add selected services to the form data before submitting
      const formData = { ...data, services: selectedServices };

      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // Send the form data including services
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
      removeAllFromCart();
      reset(); // Reset the form
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was an error sending your message.',
      });
      console.log(error);
    }
  };

  return (
    <>

    <Head>
         <meta
          name="description"
          content={t('meta.description')}
        />
        <meta
          name="robots"
          content="index, follow"
        />
        <meta
          name="keywords"
          content={t('meta.keywords')}
        />
        <title>{t('meta.title')}</title>
        <link
          rel="canonical"
          href="https://www.datacompliancecentre.com/checkout"
        />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "contactType": "Customer Support",
              "name": "Nordic Data Compliance Centre",
              "telephone": "+45 44251434",
              "email": t('address.email'),
              "address": {
                "@type": "PostalAddress",
                "streetAddress": t('address.street'),
                "addressLocality": t('address.city'),
                "postalCode": "2800",
                "addressCountry": t('address.country'),
              },
            }),
          }}
        />
      </Head>

    <div className='max-w-screen-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-gray-800 grid grid-cols-1 md:grid-cols-2 gap-4 mt-20'>
      <div className='bg-teal flex flex-col items-center justify-center text-neutral-200'>
        <h2 className='font-bold text-xl lg:text-2xl pt-10 lg:pt-0 leading-tight'>
          {t('contact.title')}
        </h2>
        <p className='text-base lg:text-lg mt-4 max-w-md text-center leading-relaxed'>
          {t('contact.description')}
        </p>
        <ul className='text-neutral-200 mt-6 text-sm lg:text-base space-y-2'>
          <li>{t('address.street')}</li>
          <li>{t('address.city')}</li>
          <li>{t('address.country')}</li>
          <li>{t('address.vat')}</li>
          <li>{t('address.email')}</li>
        </ul>
      </div>

      <form className='my-8' onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='fullname'>{t('form.fullname')}</Label>
          <Input id='fullname' type='text' {...register('fullname')} />
          {errors.fullname && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.fullname.message}
            </span>
          )}
        </LabelInputContainer>
        {/* Email */}
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='email'>{t('form.email')}</Label>
          <Input id='email' type='email' {...register('email')} />
          {errors.email && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.email.message}
            </span>
          )}
        </LabelInputContainer>
        {/* Phone */}
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='phone'>{t('form.phone')}</Label>
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
        <LabelInputContainer className='mb-8'>
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
        {/* Display Ordered Services */}
        {selectedServices.length > 0 && (
          <div className='mb-8'>
            <h3 className='text-lg font-bold text-neutral-200'>
              Requested Services
            </h3>
            <ul className='text-neutral-200'>
              {selectedServices.map((service, index) => (
                <li key={index}>
                  <span>
                    {service.title} - {service.type}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}{' '}
        <div className='flex gap-3'>
          <Check />{' '}
          <span className='text-sm text-neutral-200 mb-4'>
            {t('form.freeNote')}
          </span>
        </div>
        {/* Message */}
        <LabelInputContainer className='mb-8'>
          <Label htmlFor='message'>{t('form.message')}</Label>
          <Input id='message' type='text' {...register('message')} />
          {errors.message && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.message.message}
            </span>
          )}
        </LabelInputContainer>
        {/* Terms and Conditions */}
        <LabelInputContainer className='mb-8'>
          <div className='items-top flex space-x-2'>
            <input
              className={'text-primary'}
              type='checkbox'
              id='checked'
              {...register('checked')}
              onChange={(e) => {
                if (e.target.checked) {
                  clearErrors('checked'); // Clear error if checkbox is checked
                }
              }}
            />
            <div className='grid gap-1.5 leading-none'>
              <label
                htmlFor='checked'
                className='text-sm text-neutral-200 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                I've read Terms of Use and Privacy Statement. 
              </label>
              <p className='text-sm text-neutral-200'>
               
                <span>
                  <Link className='text-primary' href='/terms-and-conditions'>
                    Terms of Use
                  </Link>
                </span>{' '}
                and{' '}
                <span>
                  <Link className='text-primary' href='/privacy'>
                    Privacy Statement.
                  </Link>
                </span>
              </p>
            </div>
          </div>
          {errors.checked && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.checked.message}
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
          className='bg-gradient-to-br relative group/btn from-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
          type='submit'
          disabled={isSubmitting || !isVerified}
        >
          {t('form.submit')}
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
