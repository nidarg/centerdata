'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRouter, useParams } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { useCartContext } from '@/utils/context/CartContext';
import { Check } from 'lucide-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import Head from 'next/head';

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
  vat: z.string().min(1).max(1000).trim().optional(),
  period: z.string().optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function CheckoutForm() {
  const t = useTranslations('common.checkout');
  const cartT = useTranslations('common.cart');
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const { toast } = useToast();
  const { cart } = useCartContext();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const handleCaptchaSubmission = async (token: string | null) => {
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
  };

  const onSubmit = async (data: FormSchemaType) => {
    try {
      setIsSubmitting(true);
      const formData = { ...data, services: cart };
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "contactType": "Customer Support",
              "name": "Nordic Data Compliance Centre",
              "telephone": "+45 44251434",
              "email": "hello@datacompliancecentre.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Maglebjergvej 6",
                "addressLocality": "Kongens Lyngby",
                "postalCode": "2800",
                "addressCountry": "Denmark",
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
            <li>{t('contact.address.street')}</li>
            <li>{t('contact.address.city')}</li>
            <li>{t('contact.address.country')}</li>
            <li>{t('contact.address.vat')}</li>
            <li>{t('contact.address.email')}</li>
          </ul>
        </div>

        <form className='my-8' onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <LabelInputContainer className='mb-4'>
            <Label htmlFor='fullName'>{t('form.fullname')}</Label>
            <Input id='fullName' type='text' {...register('fullName')} />
            {errors.fullName && isSubmitted && (
              <span className='text-destructive text-sm'>
                {errors.fullName.message}
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
            <Label htmlFor='company'>{t('form.company')}</Label>
            <Input id='company' type='text' {...register('company')} />
            {errors.company && isSubmitted && (
              <span className='text-destructive text-sm'>
                {errors.company.message}
              </span>
            )}
          </LabelInputContainer>

          {/* Company VAT */}
          <LabelInputContainer className='mb-8'>
            <Label htmlFor='vat'>{t('form.vat')}</Label>
            <Input id='vat' type='text' {...register('vat')} />
            {errors.vat && isSubmitted && (
              <span className='text-destructive text-sm'>
                {errors.vat.message}
              </span>
            )}
          </LabelInputContainer>

          {/* Requested Services */}
          {isHydrated && cart.length > 0 && (
            <div className='mb-8'>
              <h3 className='text-lg font-bold text-neutral-200'>
                {t('form.requestedServices')}
              </h3>
              <ul className='text-neutral-200'>
                {cart.map((service, index) => (
                  <li key={index}>
                    <span>
                      {cartT(`${service.id}.title`)} - {service.type}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Free of Charge Message */}
          <div className='flex gap-3'>
            <Check />
            <span className='text-sm text-neutral-200 mb-4'>
              {t('form.freeNote')}
            </span>
          </div>

          {/* Terms and Conditions */}
          <LabelInputContainer className='mb-8'>
            <div className='items-top flex space-x-2'>
              <Checkbox
                id='terms'
                {...register('terms')}
                className='border-neutral-200'
              />
              <div className='grid gap-1.5 leading-none'>
                <label
                  htmlFor='terms'
                  className='text-sm text-neutral-200 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                >
                  {t('form.terms.text')}
                </label>
                <p className='text-sm text-neutral-200'>
                  <Link href={`/${locale}/terms-and-conditions`} className="text-teal-500 hover:text-teal-400">
                    {t('form.terms.terms')}
                  </Link>{' '}
                  {t('form.terms.and')}{' '}
                  <Link href={`/${locale}/privacy`} className="text-teal-500 hover:text-teal-400">
                    {t('form.terms.privacy')}
                  </Link>
                </p>
              </div>
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
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
              onChange={handleCaptchaSubmission}
              onExpired={() => setIsVerified(false)}
            />
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            disabled={!isVerified || isSubmitting}
            className={cn(
              'bg-gradient-to-br relative group/btn from-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium',
              (!isVerified || isSubmitting) && 'opacity-50 cursor-not-allowed'
            )}
          >
            {isSubmitting ? t('form.submitting') : t('form.submit')}
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