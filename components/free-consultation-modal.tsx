// 'use client';

// import React, { useEffect, useState} from 'react';
// import { motion } from 'framer-motion';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';

// import Link from 'next/link';
// import { useToast } from '@/hooks/use-toast';
// import { cn } from '@/lib/utils';

// // Zod schema for validation
// const formSchema = z.object({
//   fullname: z.string().min(1, 'Name is required').max(100).regex(/^[a-zA-Z\s]+$/, 'Only letters and spaces allowed').trim(),
//   email: z.string().email('Invalid email address'),
//   company: z.string().min(1, 'Company is required').max(100, "Max 100 characters").trim(),
  
// });

// type FormSchemaType = z.infer<typeof formSchema>;

// const ConsultationModal = () => {
//   const [isOpen, setIsOpen] = useState(false);
  

//   const { toast } = useToast();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsOpen(true);
//     }, 3000); // Show modal after 10 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitted }, reset } = useForm<FormSchemaType>({
//     resolver: zodResolver(formSchema),
//   });


//   const onSubmit = async (data: FormSchemaType) => {
   
   
//     try {
//       const response = await fetch('../api/free-consultation', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
        
//         body: JSON.stringify({...data, message:'Free consultation'}),
//       });

//       if (!response.ok) {
//         toast({ title: 'Error', description: 'Something went wrong.' });
//       } else {
//         toast({ description: 'Your message was sent successfully.' });
//         reset({ fullname: '', email: '', company: ''});
//       }
//     } catch {
//       toast({ title: 'Error', description: 'Something went wrong.' });
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 50, y: 50 }}
//       animate={{ opacity: 1, x: 0, y: 0 }}
//       exit={{ opacity: 0, x: 50, y: 50 }}
//       transition={{ duration: 0.5, ease: 'easeOut' }}
//       className='fixed sm:right-10 md:right-8 bottom-5 right-2 w-80 bg-teal p-4 rounded-lg shadow-lg border border-gray-200'
//     >
//       <h2 className='text-lg font-bold text-primary mb-4 mt-2 uppercase text-center'>want a <br /> free consultation?</h2>

//       <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
//         {/* Full Name */}
//         <LabelInputContainer>
//           <Label htmlFor='fullname'>Full Name</Label>
//           <Input id='fullname' type='text' {...register('fullname')} />
//           {errors.fullname && isSubmitted && <span className='text-red-500 text-sm'>{errors.fullname.message}</span>}
//         </LabelInputContainer>

//         {/* Email */}
//         <LabelInputContainer>
//           <Label htmlFor='email'>Email</Label>
//           <Input id='email' type='email' {...register('email')} />
//           {errors.email && isSubmitted && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
//         </LabelInputContainer>

//         {/* Company */}
//         <LabelInputContainer>
//           <Label htmlFor='company'>Company</Label>
//           <Input id='company' type='text' {...register('company')} />
//           {errors.company && isSubmitted && <span className='text-red-500 text-sm'>{errors.company.message}</span>}
//         </LabelInputContainer>

//         {/* Terms and Conditions */}

//         <LabelInputContainer className='flex items-start space-x-2'>
        
//           <div className='text-sm'>
          
//             <p className='text-sm text-neutral-200'>
//               The above personal data are processed according to our 
//               <Link className='text-primary' href='/privacy'> Privacy Statement</Link>
//             </p>
//           </div>
//         </LabelInputContainer>
      

//         {/* Submit Button */}
//         <button
//           type='submit'
//           disabled={isSubmitting}
//           className='bg-gradient-to-br relative group/btn from-zinc-900  to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
//         >
//             Contact us &rarr;
//           <BottomGradient />
//         </button>
//       </form>

//       {/* Close Button */}
//       <button
//         onClick={() => setIsOpen(false)}
//         className='absolute top-2 right-2 text-primary  text-2xl'
//       >
//         ×
//       </button>
//     </motion.div>
//   );
// };

// export default ConsultationModal;

// const BottomGradient = () => {
//   return (
//     <>
//       <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
//       <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
//     </>
//   );
// };

// const LabelInputContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div className={cn('flex flex-col space-y-2 w-full', className)}>
//       {children}
//     </div>
//   );
// };


'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

// Zod schema for validation
const formSchema = z.object({
  fullname: z.string()
    .min(1, 'Name is required')
    .max(100)
    .regex(/^[a-zA-Z\s]+$/, 'Only letters and spaces allowed')
    .trim(),
  email: z.string().email('Invalid email address'),
  company: z.string()
    .min(1, 'Company is required')
    .max(100, 'Max 100 characters')
    .trim(),
});

type FormSchemaType = z.infer<typeof formSchema>;

const ConsultationModal = () => {
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
        toast({ title: 'Error', description: 'Something went wrong.' });
      } else {
        toast({ description: 'Your message was sent successfully.' });
        reset({ fullname: '', email: '', company: '' });
      }
    } catch {
      toast({ title: 'Error', description: 'Something went wrong.' });
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
        want a <br /> free consultation?
      </h2>
      <p className='text-white text-sm mb-4'>Fill out the form bellow to schedule  <span className='text-primary font-bold'> a free consultation</span> with our data protection specialists</p>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
        <LabelInputContainer>
          <Label htmlFor='fullname'>Full Name</Label>
          <Input id='fullname' type='text' {...register('fullname')} />
          {errors.fullname && isSubmitted && (
            <span className='text-red-500 text-sm'>{errors.fullname.message}</span>
          )}
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' type='email' {...register('email')} />
          {errors.email && isSubmitted && (
            <span className='text-red-500 text-sm'>{errors.email.message}</span>
          )}
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor='company'>Company</Label>
          <Input id='company' type='text' {...register('company')} />
          {errors.company && isSubmitted && (
            <span className='text-red-500 text-sm'>{errors.company.message}</span>
          )}
        </LabelInputContainer>

        <LabelInputContainer className='flex items-start space-x-2'>
          <p className='text-sm text-neutral-200'>
            The above personal data are processed according to our
            <Link className='text-primary' href='/privacy'> Privacy Statement</Link>
          </p>
        </LabelInputContainer>

        <button
          type='submit'
          disabled={isSubmitting}
          className='relative group/btn bg-gradient-to-br from-zinc-900 to-neutral-600 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
        >
          Contact us &rarr;
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

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn('flex flex-col space-y-2 w-full', className)}>{children}</div>
);

