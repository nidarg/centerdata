// 'use client';
// import React, { useState, useRef } from 'react';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// // import { DateInput } from '@/components/ui/date-input';
// import { cn } from '@/lib/utils';
// import { IconBrandLinkedin } from '@tabler/icons-react';
// import ReCAPTCHA from 'react-google-recaptcha';
// // import { translate } from '@/utils/translate';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { useCartContext } from '@/utils/context/CartContext';

// import Link from 'next/link';

// import { useToast } from '@/hooks/use-toast';
// import { Check } from 'lucide-react';
// // import { IntProductPayload } from '@/utils/types';
// // import { Checkbox } from "@/components/ui/checkbox"

// const formSchema = z.object({
//   fullname: z
//     .string()
//     .min(1, 'Name is required')
//     .max(100)
//     .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')
//     .trim(),
//   email: z.string().email('Invalid email address'),
//   company: z.string().min(1).max(100).trim(),
//   phone: z
//     .string()
//     .min(1)
//     .max(20)
//     .trim()
//     .regex(/^\d+$/, 'Phone must contain only numbers'),
//   message: z.string().min(1).max(1000).trim(),
//   period: z.string(),
//   checked: z.boolean().refine((val) => val === true, {
//     message: 'You must accept the terms and conditions',
//   }),
//   orderedServices: z.array(
//     z.object({
//       title: z.string(),
//       type: z.string(),
//     })
//   ),
// });
// type FormSchemaType = z.infer<typeof formSchema>;

// export default function Checkout() {
//   const { cart, removeAllFromCart } = useCartContext();
//   console.log('cart', cart);

//   const { toast } = useToast();
//   const recaptchaRef = useRef<ReCAPTCHA>(null);

//   const [isVerified, setIsVerified] = useState(false);

//   // const [orderedServices] = useState<IntProductPayload[]>([]);

//   // useEffect(() => {
//   //   setOrderedServices(cart);
//   //   console.log('ordered services ', orderedServices);
//   // }, []);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting, isSubmitted },
//     watch,
//     reset,
//     // setValue,
//     clearErrors,
//   } = useForm<FormSchemaType>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       orderedServices: cart.map((product) => ({
//         title: product.title,
//         type: product.type,
//       })),
//     },
//   });

//   watch();

//   async function handleCaptchaSubmission(token: string | null) {
//     try {
//       if (token) {
//         // console.log("reCAPTCHA token received:", token);
//         const response = await fetch('/api/recaptcha', {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ token }),
//         });
//         if (response.ok) {
//           // console.log("reCAPTCHA verified successfully.");
//           setIsVerified(true);
//         } else {
//           console.error('reCAPTCHA verification failed.');
//           setIsVerified(false);
//         }
//       }
//     } catch (e) {
//       console.error('Error during reCAPTCHA submission:', e);
//       setIsVerified(false);
//     }
//   }

//   const handleChange = (token: string | null) => {
//     handleCaptchaSubmission(token);
//   };

//   function handleExpired() {
//     setIsVerified(false);
//   }

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
//         toast({
//           title: 'Uh oh! Something went wrong.',
//           description: 'There was a problem with your request.',
//         });
//       }

//       toast({
//         description: 'Your message was sent successfully.',
//       });
//       removeAllFromCart(); // Clear the cart after successful form submission
//       reset();
//     } catch (error) {
//       // toast.error(error instanceof Error ? error.message : 'Something went wrong');
//       console.log(error);
//     }
//   };

//   return (
//     <div className='max-w-screen-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-gray-800 grid grid-cols-1 md:grid-cols-2  gap-4 mt-20'>
//       <div className='bg-teal flex flex-col items-center justify-center text-neutral-200'>
//         <h2 className='font-bold text-xl lg:text-2xl pt-10 lg:pt-0 leading-tight'>
//           Want to get in touch?
//         </h2>
//         <p className='text-base lg:text-lg mt-4 max-w-md text-center leading-relaxed'>
//           Feel free to reach out to us with any inquiries, concerns, or
//           assistance you may require. Our team is here to help and eager to hear
//           from you!
//         </p>
//         <ul className='text-neutral-200 mt-6 text-sm lg:text-base space-y-2'>
//           <li>Maglebjergvej 6</li>
//           <li>2800 Kongens Lyngby</li>
//           {/* <li>Danmark, DK 🇩🇰</li> */}
//           <li>VAT DK 44251434</li>
//           <li>hello@datacompliancecentre.com </li>
//         </ul>
//       </div>

//       <form className='my-8' onSubmit={handleSubmit(onSubmit)}>
//         <LabelInputContainer className='mb-4'>
//           <Label htmlFor='fullname'>Full name</Label>

//           <Input id='fullname' type='text' {...register('fullname')} />
//           {errors.fullname && isSubmitted && (
//             <span className='text-destructive text-sm'>
//               {errors.fullname.message}
//             </span>
//           )}
//         </LabelInputContainer>

//         <LabelInputContainer className='mb-4'>
//           <Label htmlFor='email'>Business email</Label>
//           <Input id='email' type='email' {...register('email')} />
//           {errors.email && isSubmitted && (
//             <span className='text-destructive text-sm'>
//               {errors.email.message}
//             </span>
//           )}
//         </LabelInputContainer>
//         <LabelInputContainer className='mb-4'>
//           <Label htmlFor='phone'>Phone number</Label>
//           <Input id='phone' type='text' {...register('phone')} />
//           {errors.phone && isSubmitted && (
//             <span className='text-destructive text-sm'>
//               {errors.phone.message}
//             </span>
//           )}
//         </LabelInputContainer>
//         <LabelInputContainer className='mb-8'>
//           <Label htmlFor='company' className='flex flex-col gap-y-2'>
//             <span>Company name</span>
//             <span>VTA</span>
//           </Label>
//           <Input id='company' type='text' {...register('company')} />
//           {errors.company && isSubmitted && (
//             <span className='text-destructive text-sm'>
//               {errors.company.message}
//             </span>
//           )}
//         </LabelInputContainer>

//         <LabelInputContainer className='mb-8'>
//           <Label htmlFor='orderedServices' className='flex flex-col gap-y-2'>
//             <span>Requested services</span>
//             <span>Services selected from cart</span>
//           </Label>
//           <div id='orderedServices' className='space-y-2'>
//             {cart && cart.length > 0 ? (
//               cart.map((product, index) => (
//                 <div key={index} className='space-y-2'>
//                   {/* Combined Product Title and Type */}
//                   <Label
//                     htmlFor={`product-info-${index}`}
//                     className='text-sm text-neutral-200'
//                   >
//                     Product Info
//                   </Label>
//                   <Input
//                     id={`product-info-${index}`}
//                     type='text'
//                     {...register(`orderedServices.${index}.title`)} // Registering the title field
//                     value={product.title} // Prefill with the product title
//                     readOnly
//                     className='bg-gray-700 text-white p-2 rounded-md'
//                   />
//                   <Input
//                     id={`product-type-${index}`}
//                     type='text'
//                     {...register(`orderedServices.${index}.type`)} // Registering the type field
//                     value={product.type} // Prefill with the product type
//                     readOnly
//                     className='bg-gray-700 text-white p-2 rounded-md'
//                   />
//                 </div>
//               ))
//             ) : (
//               <Input
//                 id='no-services'
//                 type='text'
//                 value='No services selected'
//                 readOnly
//                 className='bg-gray-700 text-white p-2 rounded-md'
//               />
//             )}
//           </div>
//         </LabelInputContainer>

//         <div className='flex gap-3'>
//           <Check />{' '}
//           <span className='text-sm text-neutral-200 mb-4'>
//             Requesting a quotation is free of charge and does not obligate you
//             in any way.
//           </span>
//         </div>
//         <LabelInputContainer className='mb-8'>
//           <div className='items-top flex space-x-2'>
//             <input
//               className={'text-primary'}
//               type='checkbox'
//               id='checked'
//               {...register('checked')}
//               onChange={(e) => {
//                 // setValue('checked', e.target.checked);
//                 if (e.target.checked) {
//                   clearErrors('checked'); // Clear error if checkbox is checked
//                 }
//               }}
//             />
//             <div className='grid gap-1.5 leading-none'>
//               <label
//                 htmlFor='checked'
//                 className='text-sm text-neutral-200 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
//               >
//                 I’ve read terms and conditions and the privacy statement.
//               </label>
//               <p className='text-sm text-neutral-200'>
//                 You agree to our{' '}
//                 <span>
//                   <Link className='text-primary' href='/terms-and-conditions'>
//                     Terms of Service
//                   </Link>
//                 </span>{' '}
//                 and{' '}
//                 <span>
//                   <Link className='text-primary' href='/privacy'>
//                     Privacy Policy.
//                   </Link>
//                 </span>
//               </p>
//             </div>
//           </div>
//           {errors.checked && isSubmitted && (
//             <span className='text-destructive text-sm'>
//               {errors.checked.message}
//             </span>
//           )}
//         </LabelInputContainer>

//         <div className=' mb-10'>
//           <ReCAPTCHA
//             sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
//             ref={recaptchaRef}
//             onChange={handleChange}
//             onExpired={handleExpired}
//           />
//         </div>

//         {/* <button  disabled={!isVerified} */}
//         <button
//           className='bg-gradient-to-br relative group/btn from-zinc-900  to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
//           type='submit'
//           disabled={isSubmitting || !isVerified}
//         >
//           Request a quotation &rarr;
//           <BottomGradient />
//         </button>

//         <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />

//         <div className='flex flex-col space-y-4'>
//           <Link
//             className=' relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-zinc-800 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
//             href='https://linkedin.com/company/nordic-data-compliance-centre'
//           >
//             <IconBrandLinkedin className='h-4 w-4  text-neutral-300' />
//             <span className='text-neutral-300 text-sm'>Linkedin</span>
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
    .trim(),
  period: z.string().optional(),
  checked: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function Checkout() {
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
    <div className='max-w-screen-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-gray-800 grid grid-cols-1 md:grid-cols-2 gap-4 mt-20'>
      <div className='bg-teal flex flex-col items-center justify-center text-neutral-200'>
        <h2 className='font-bold text-xl lg:text-2xl pt-10 lg:pt-0 leading-tight'>
          Want to get in touch?
        </h2>
        <p className='text-base lg:text-lg mt-4 max-w-md text-center leading-relaxed'>
          Feel free to reach out to us with any inquiries, concerns, or
          assistance you may require. Our team is here to help and eager to hear
          from you!
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
          <Label htmlFor='fullname'>Full name</Label>
          <Input id='fullname' type='text' {...register('fullname')} />
          {errors.fullname && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.fullname.message}
            </span>
          )}
        </LabelInputContainer>
        {/* Email */}
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='email'>Business email</Label>
          <Input id='email' type='email' {...register('email')} />
          {errors.email && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.email.message}
            </span>
          )}
        </LabelInputContainer>
        {/* Phone */}
        <LabelInputContainer className='mb-4'>
          <Label htmlFor='phone'>Phone number</Label>
          <Input id='phone' type='tel' {...register('phone')} />
          {errors.phone && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.phone.message}
            </span>
          )}
        </LabelInputContainer>
        {/* Company Name */}
        <LabelInputContainer className='mb-8'>
          <Label htmlFor='company' className='flex flex-col gap-y-2'>
            <span>Company name</span>
            <span>VTA</span>{' '}
          </Label>
          <Input id='company' type='text' {...register('company')} />
          {errors.company && isSubmitted && (
            <span className='text-destructive text-sm'>
              {errors.company.message}
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
            Requesting a quotation is free of charge and does not obligate you
            in any way.{' '}
          </span>{' '}
        </div>
        {/* Message */}
        <LabelInputContainer className='mb-8'>
          <Label htmlFor='message'>How can we help you?</Label>
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
                I’ve read terms and conditions and the privacy statement.
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
          className='bg-gradient-to-br relative group/btn from-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium'
          type='submit'
          disabled={isSubmitting || !isVerified}
        >
          Request a quotation &rarr;
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
