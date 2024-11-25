// 'use client';

// import React from 'react';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { DateInput } from '@/components/ui/date-input';
// import { cn } from '@/lib/utils';
// import { IconBrandLinkedin } from '@tabler/icons-react';
// import { translate } from '@/utils/translate';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import Link from 'next/link';
// import { useCartContext } from '@/utils/context/CartContext';

// const formSchema = z.object({
//   fullname: z.string().min(1, 'Name is required'),
//   email: z.string().email('Invalid email address'),
//   company: z.string().min(1, 'Company is required'),
//   phone: z.string().min(1, 'Phone number is required'),
//   message: z.string().min(1, 'Message is required'),
//   period: z.string(),
//   checked: z.boolean().refine((val) => val === true, {
//     message: 'You must accept the terms and conditions',
//   }),
//   orderedServices: z
//     .array(
//       z.object({
//         title: z.string(),
//         price: z.number(),
//       })
//     )
//     .optional(), // Optional to avoid errors when the cart is empty
// });
// type FormSchemaType = z.infer<typeof formSchema>;

// export default function Checkout() {
//   const { cart } = useCartContext();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting, isSubmitted },
//     reset,
//   } = useForm<FormSchemaType>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       orderedServices: cart, // Pre-fill form with cart data
//     },
//   });

//   const onSubmit = async (data: FormSchemaType) => {
//     try {
//       console.log(data);
//       const response = await fetch('/api/email', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });
//       console.log(await response.json());
//       if (!response.ok) {
//         throw new Error('Failed to send message');
//       }

//       reset();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className='max-w-screen-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black grid grid-cols-1 md:grid-cols-2 gap-4'>
//       <div className='bg-cyan flex flex-col items-center justify-center text-neutral-200'>
//         <h2 className='font-bold text-xl lg:text-2xl pt-10 lg:pt-0 leading-tight'>
//           {translate('section_form_contact_title')}
//         </h2>
//         <p className='text-base lg:text-lg mt-4 max-w-md text-center leading-relaxed'>
//           {translate('section_form_contact_text')}
//         </p>
//         <ul className='text-neutral-200 mt-6 text-sm lg:text-base space-y-2'>
//           <li>Maglebjergvej 6</li>
//           <li>2800 Kongens Lyngby</li>
//           <li>Danmark, DK 🇩🇰</li>
//           <li>VAT DK 44251434</li>
//         </ul>
//       </div>

//       <form className='my-8' onSubmit={handleSubmit(onSubmit)}>
//         <LabelInputContainer className='mb-4'>
//           <Label htmlFor='fullname'>Full name</Label>
//           <Input id='fullname' type='text' {...register('fullname')} />
//           {errors.fullname && isSubmitted && (
//             <span className='text-red-500 text-sm'>
//               {errors.fullname.message}
//             </span>
//           )}
//         </LabelInputContainer>

//         <LabelInputContainer className='mb-4'>
//           <Label htmlFor='email'>Business email</Label>
//           <Input id='email' type='email' {...register('email')} />
//           {errors.email && isSubmitted && (
//             <span className='text-red-500 text-sm'>{errors.email.message}</span>
//           )}
//         </LabelInputContainer>

//         <LabelInputContainer className='mb-4'>
//           <Label htmlFor='phone'>Phone number</Label>
//           <Input id='phone' type='text' {...register('phone')} />
//           {errors.phone && isSubmitted && (
//             <span className='text-red-500 text-sm'>{errors.phone.message}</span>
//           )}
//         </LabelInputContainer>

//         <LabelInputContainer className='mb-8'>
//           <Label htmlFor='company'>Company name</Label>
//           <Input id='company' type='text' {...register('company')} />
//           {errors.company && isSubmitted && (
//             <span className='text-red-500 text-sm'>
//               {errors.company.message}
//             </span>
//           )}
//         </LabelInputContainer>

//         <LabelInputContainer className='mb-8'>
//           <Label htmlFor='period'>Book an appointment</Label>
//           <DateInput id='period' type='text' {...register('period')} />
//           {errors.period && isSubmitted && (
//             <span className='text-red-500 text-sm'>{errors.period.message}</span>
//           )}
//         </LabelInputContainer>

//         {/* Ordered Services Section */}
//         <LabelInputContainer className='mb-8'>
//           <Label>Ordered services</Label>
//           <ul className='text-sm text-neutral-700 dark:text-white mt-2 space-y-1'>
//             {cart.length > 0 ? (
//               cart.map((product, index) => (
//                 <li key={index} className='border-b pb-1'>
//                   {product.title} - {product.price}
//                 </li>
//               ))
//             ) : (
//               <li>No services selected</li>
//             )}
//           </ul>
//         </LabelInputContainer>

//         <LabelInputContainer className='mb-8'>
//           <div className='items-top flex space-x-2'>
//             <input
//               className={'text-primary'}
//               type='checkbox'
//               id='checked'
//               {...register('checked')}
//             />
//             <div className='grid gap-1.5 leading-none'>
//               <label htmlFor='checked' className='text-sm font-medium'>
//                 Accept terms and conditions
//               </label>
//               <p className='text-sm text-muted-foreground'>
//                 You agree to our Terms of Service and Privacy Policy.
//               </p>
//             </div>
//           </div>
//           {errors.checked && isSubmitted && (
//             <span className='text-red-500 text-sm'>
//               {errors.checked.message}
//             </span>
//           )}
//         </LabelInputContainer>

//         <button
//           className='bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
//           type='submit'
//           disabled={isSubmitting}
//         >
//           Contact us &rarr;
//           <BottomGradient />
//         </button>
//         <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />
//         <div className='flex flex-col space-y-4'>
//           <Link
//             className=' relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
//             href='https://linkedin.com/company/nordic-data-compliance-centre'
//           >
//             <IconBrandLinkedin className='h-4 w-4 text-neutral-800 dark:text-neutral-300' />
//             <span className='text-neutral-700 dark:text-neutral-300 text-sm'>
//               Linkedin
//             </span>
//             <BottomGradient />
//           </Link>
//         </div>

//       </form>
//     </div>
//   );
// }

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
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { DateInput } from '@/components/ui/date-input';
import { cn } from '@/lib/utils';
import { IconBrandLinkedin } from '@tabler/icons-react';
// import ReCAPTCHA from "react-google-recaptcha";
import { translate } from '@/utils/translate';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useCartContext } from '@/utils/context/CartContext';

import Link from 'next/link';
// import { Checkbox } from "@/components/ui/checkbox"

const formSchema = z.object({
  fullname: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(1, 'Company is required'),
  phone: z.string().min(1, 'Phone number is required'),
  message: z.string().min(1, 'Message is required'),
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
    .optional(), // Optional to avoid errors when the cart is empty
});
type FormSchemaType = z.infer<typeof formSchema>;

export default function Checkout() {
  const { cart } = useCartContext();
  // const recaptchaRef = useRef<ReCAPTCHA>(null);

  // const [isVerified, setIsVerified] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
    watch,
    reset,
    // setValue,
    clearErrors,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      orderedServices: cart, // Pre-fill form with cart data
    },
  });

  watch();

  /*
  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        await fetch("/api/recaptcha", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      setIsVerified(false);
    }
  }
    */

  // const handleChange = (token: string | null) => {
  //   handleCaptchaSubmission(token);
  // };

  // function handleExpired() {
  //   setIsVerified(false);
  // }

  const onSubmit = async (data: FormSchemaType) => {
    try {
      console.log(data);
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      console.log(await response.json());
      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // toast.success('Your message has been sent!');
      reset();
    } catch (error) {
      // toast.error(error instanceof Error ? error.message : 'Something went wrong');
      console.log(error);
    }
  };

  return (
    <div className='max-w-screen-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-gray-800 grid grid-cols-1 md:grid-cols-2  gap-4'>
      <div className='bg-accent flex flex-col items-center justify-center text-neutral-200'>
        <h2 className='font-bold text-xl lg:text-2xl pt-10 lg:pt-0 leading-tight'>
          {translate('section_form_contact_title')}
        </h2>
        <p className='text-base lg:text-lg mt-4 max-w-md text-center leading-relaxed'>
          {translate('section_form_contact_text')}
        </p>
        <ul className='text-neutral-200 mt-6 text-sm lg:text-base space-y-2'>
          <li>Maglebjergvej 6</li>
          <li>2800 Kongens Lyngby</li>
          <li>Danmark, DK 🇩🇰</li>
          <li>VAT DK 44251434</li>
        </ul>
      </div>

      <form className='my-8' onSubmit={handleSubmit(onSubmit)}>
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='fullname'>Full name</Label>

          <Input id='fullname' type='text' {...register('fullname')} />
          {errors.fullname && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.fullname.message}
            </span>
          )}
        </LabelInputContainer>

        <LabelInputContainer className='mb-4'>
          <Label htmlFor='email'>Business email</Label>
          <Input id='email' type='email' {...register('email')} />
          {errors.email && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.email.message}
            </span>
          )}
        </LabelInputContainer>
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='phone'>Phone number</Label>
          <Input id='phone' type='text' {...register('phone')} />
          {errors.phone && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.phone.message}
            </span>
          )}
        </LabelInputContainer>
        <LabelInputContainer className='mb-8'>
          <Label htmlFor='company'>Company name</Label>
          <Input id='company' type='text' {...register('company')} />
          {errors.company && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.company.message}
            </span>
          )}
        </LabelInputContainer>

        <LabelInputContainer className='mb-8'>
          <Label htmlFor='period'>Book an appointment</Label>
          <DateInput id='period' type='text' {...register('period')} />
          {errors.period && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.period.message}
            </span>
          )}
        </LabelInputContainer>
        {/* Ordered Services Section */}
        <LabelInputContainer className='mb-8'>
          <Label className='text-destructive font-semibold'>
            Ordered services
          </Label>
          <ul className='text-sm text-primary mt-2 space-y-1'>
            {cart.length > 0 ? (
              cart.map((product, index) => (
                <li key={index} className='border-b pb-1'>
                  {product.title} - {product.price}
                </li>
              ))
            ) : (
              <li>No services selected</li>
            )}
          </ul>
        </LabelInputContainer>

        <LabelInputContainer className='mb-8'>
          <Label htmlFor='message'>How can we help you?</Label>
          <Input id='message' type='text' {...register('message')} />
          {errors.message && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.message.message}
            </span>
          )}
        </LabelInputContainer>

        <LabelInputContainer className='mb-8'>
          <div className='items-top flex space-x-2'>
            <input
              className={'text-primary'}
              type='checkbox'
              id='checked'
              {...register('checked')}
              onChange={(e) => {
                // setValue('checked', e.target.checked);
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
                Accept terms and conditions
              </label>
              <p className='text-sm text-neutral-200'>
                You agree to our{' '}
                <span>
                  <Link className='text-primary' href='/terms-and-conditions'>
                    Terms of Service
                  </Link>
                </span>{' '}
                and{' '}
                <span>
                  <Link className='text-primary' href='/privacy'>
                    Privacy Policy.
                  </Link>
                </span>
              </p>
            </div>
          </div>
          {errors.checked && isSubmitted && (
            <span className='text-red-500 text-sm'>
              {errors.checked.message}
            </span>
          )}
        </LabelInputContainer>

        {/* <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
        ref={recaptchaRef}
        onChange={handleChange}
        onExpired={handleExpired}
      /> */}

        {/* <button  disabled={!isVerified} */}
        <button
          className='bg-gradient-to-br relative group/btn from-zinc-900  to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
          type='submit'
          disabled={isSubmitting}
        >
          Contact us &rarr;
          <BottomGradient />
        </button>

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
