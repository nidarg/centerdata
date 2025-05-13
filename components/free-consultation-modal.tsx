'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

// Zod schema for validation
const formSchema = z.object({
  fullname: z
    .string()
    .min(1, 'Name is required')
    .max(100)
    .regex(/^[a-zA-Z\s]+$/, 'Only letters and spaces allowed')
    .trim(),
  email: z.string().email('Invalid email address'),
  company: z
    .string()
    .min(1, 'Company is required')
    .max(100, 'Max 100 characters')
    .trim(),
});

type FormSchemaType = z.infer<typeof formSchema>;

const ConsultationModal = () => {
  const t = useTranslations('common.consultation');
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
    reset,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormSchemaType) => {
    try {
      const response = await fetch('../api/free-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, message: 'Free consultation' }),
      });

      if (!response.ok) {
        toast({ title: t('error'), description: t('errorMessage') });
      } else {
        toast({ description: t('successMessage') });
        reset({ fullname: '', email: '', company: '' });
      }
    } catch {
      toast({ title: t('error'), description: t('errorMessage') });
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50, y: 50 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 50, y: 50 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='fixed bottom-5 sm:left-1/2 sm:-translate-x-1/2 md:right-4 md:left-auto w-80 bg-teal p-4 rounded-lg shadow-lg border border-gray-200'
    >
      <h2 className='text-lg font-bold text-primary mb-4 mt-2 uppercase text-center'>
        {t('title')}
      </h2>
      <p className='text-white text-sm mb-4'>
        {t('description')}{' '}
        <span className='text-primary font-bold'>{t('highlight')}</span>
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
        <LabelInputContainer>
          <Label htmlFor='fullname'>{t('form.fullname')}</Label>
          <Input id='fullname' type='text' {...register('fullname')} />
          {errors.fullname && isSubmitted && (
            <span className='text-red-500 text-sm'>
              {errors.fullname.message}
            </span>
          )}
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor='email'>{t('form.email')}</Label>
          <Input id='email' type='email' {...register('email')} />
          {errors.email && isSubmitted && (
            <span className='text-red-500 text-sm'>{errors.email.message}</span>
          )}
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor='company'>{t('form.company')}</Label>
          <Input id='company' type='text' {...register('company')} />
          {errors.company && isSubmitted && (
            <span className='text-red-500 text-sm'>
              {errors.company.message}
            </span>
          )}
        </LabelInputContainer>

        <LabelInputContainer className='flex items-start space-x-2'>
          <p className='text-sm text-neutral-200'>
            {t('privacy.text')}
            <Link className='text-primary' href='/privacy'>
              {t('privacy.link')}
            </Link>
          </p>
        </LabelInputContainer>

        <button
          type='submit'
          disabled={isSubmitting}
          className='relative group/btn bg-gradient-to-br from-zinc-900 to-neutral-600 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
        >
          {t('form.submit')} &rarr;
          <BottomGradient />
        </button>
      </form>

      <button
        onClick={() => setIsOpen(false)}
        className='absolute top-2 right-2 text-primary text-2xl'
      >
        ×
      </button>
    </motion.div>
  );
};

export default ConsultationModal;

const BottomGradient = () => (
  <>
    <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
    <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
  </>
);

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
