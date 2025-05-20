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

export default function CheckoutForm() {
  const t = useTranslations('common.checkout');
  const cartT = useTranslations('common.cart');
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;
  const { toast } = useToast();
  const { cart } = useCartContext();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Handle hydration
  useEffect(() => {
    setIsHydrated(true);
  }, []);

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
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      {/* Full Name */}
      <div className='space-y-2'>
        <Label htmlFor='fullName'>
          <span>{t('form.fullname')}</span>
        </Label>
        <Input id='fullName' type='text' {...register('fullName')} />
        {errors.fullName && isSubmitted && (
          <span className='text-destructive text-sm'>
            {errors.fullName.message}
          </span>
        )}
      </div>

      {/* Email */}
      <div className='space-y-2'>
        <Label htmlFor='email'>
          <span>{t('form.email')}</span>
        </Label>
        <Input id='email' type='email' {...register('email')} />
        {errors.email && isSubmitted && (
          <span className='text-destructive text-sm'>
            {errors.email.message}
          </span>
        )}
      </div>

      {/* Phone */}
      <div className='space-y-2'>
        <Label htmlFor='phone'>
          <span>{t('form.phone')}</span>
        </Label>
        <Input id='phone' type='tel' {...register('phone')} />
        {errors.phone && isSubmitted && (
          <span className='text-destructive text-sm'>
            {errors.phone.message}
          </span>
        )}
      </div>

      {/* Company Name */}
      <div className='space-y-2'>
        <Label htmlFor='company'>
          <span>{t('form.company')}</span>
        </Label>
        <Input id='company' type='text' {...register('company')} />
        {errors.company && isSubmitted && (
          <span className='text-destructive text-sm'>
            {errors.company.message}
          </span>
        )}
      </div>

      {/* Company VAT */}
      <div className='space-y-2'>
        <Label htmlFor='vat'>
          <span>{t('form.vat')}</span>
        </Label>
        <Input id='vat' type='text' {...register('vat')} />
        {errors.vat && isSubmitted && (
          <span className='text-destructive text-sm'>
            {errors.vat.message}
          </span>
        )}
      </div>

      {/* Requested Services */}
      {isHydrated && cart.length > 0 && (
        <div className='space-y-2'>
          <h3 className='text-base font-bold text-neutral-200'>
            Requested Services
          </h3>
          <ul className='space-y-1'>
            {cart.map((service, index) => (
              <li key={index} className='text-sm text-neutral-200'>
                {cartT(`${service.id}.title`)} - {service.type}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Terms and Conditions */}
      <div className='space-y-2'>
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
      </div>

      {/* reCAPTCHA */}
      <div className='space-y-2'>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
          onChange={handleCaptchaSubmission}
        />
      </div>

      {/* Submit Button */}
      <button
        type='submit'
        disabled={!isVerified || isSubmitting}
        className={cn(
          'w-full bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-md py-2 px-4 font-medium transition-all duration-200',
          (!isVerified || isSubmitting) && 'opacity-50 cursor-not-allowed'
        )}
      >
        {isSubmitting ? t('form.submitting') : t('form.submit')}
      </button>
    </form>
  );
} 