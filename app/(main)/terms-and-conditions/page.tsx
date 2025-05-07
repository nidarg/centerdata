import React from 'react';
import PDFViewer from '@/components/PdfViewer';
import Head from "next/head";

const TermsAndConditions = () => {
    return (
        <>
         <Head>
   <meta property="og:title" content="Terms and Conditions - Nordic Data Compliance Centre" />
  <meta property="og:description" content="The Terms and Conditions for using the services and content of Nordic Data Compliance Centre ApS. Learn about our policies for B2B services." />
 
  <meta property="og:url" content="https://www.datacompliancecentre.com/terms-and-conditions" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Terms and Conditions - Nordic Data Compliance Centre" />
  <meta name="twitter:description" content="Read the Terms and Conditions for accessing B2B services from Nordic Data Compliance Centre ApS." />
 
  
        <link rel="canonical" href="https://www.datacompliancecentre.com/terms-and-conditions" />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Terms and Conditions",
        "url": "https://www.datacompliancecentre.com/terms-and-conditions",
        "description": "This page outlines the Terms and Conditions for using the services and content of Nordic Data Compliance Centre ApS.",
        "publisher": {
          "@type": "Organization",
          "name": "Nordic Data Compliance Centre ApS",
          "url": "https://www.datacompliancecentre.com",
        },
      }),
    }}
  />
      </Head>
        <div>
            
            <PDFViewer pdfPath="/docs/TERMSOFUSE.pdf" />
        </div>
        </>
    );
};

export default TermsAndConditions;
