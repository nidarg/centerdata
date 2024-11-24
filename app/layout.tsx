



import type { Metadata } from 'next';
import './globals.css';



export const metadata: Metadata = {
  title: 'Nordic Data Compliance Center',
  description:
    'Nordic Data Compliance Centre offers data compliance solutions for SMEs. Services include data inventory, security, breach management, training, and governance. Subscription plans & one-time toolkit available.',
  keywords:
    'Data Compliance, SME, GDPR, Information Security, Services, Subscription, Toolkit, Consulting, Audit, Training',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
         
    <html lang='en' suppressHydrationWarning>
      <body className='container'>
                {children}
               
                </body>
                </html>
            
     
  );
}
