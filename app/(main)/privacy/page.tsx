import React from 'react';
import PDFViewer from '@/components/PdfViewer';
import Head from "next/head";

const Privacy = () => {
    return (
<>
         <Head>
                     <title>Privacy Statement | Data Compliance Centre</title>
        <meta
          name="description"
          content="NORDIC DATA COMPLIANCE CENTRE ApS is strongly committed to protecting your personal data. This privacy statement describes how we process personal data and provides information about your rights."
        />
        <meta name="keywords" content="privacy statement, personal data protection, data privacy, GDPR, compliance" />
        <meta name="author" content="Data Compliance Centre" />
        <link rel="canonical" href="https://www.datacompliancecentre.com/privacy" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content="Privacy Statement | Data Compliance Centre" />
        <meta property="og:description" content="Learn about our commitment to protecting your personal data in our detailed privacy statement." />
        <meta property="og:url" content="https://www.datacompliancecentre.com/privacy" />
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Statement | Data Compliance Centre" />
        <meta name="twitter:description" content="Read our privacy statement to understand how we handle your personal data and your rights." />
        {/* Structured Data (Schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Privacy Statement",
              "url": "https://www.datacompliancecentre.com/privacy",
              "description": "NORDIC DATA COMPLIANCE CENTRE ApS is committed to protecting your personal data. This privacy statement outlines how we process personal data and your rights.",
              "mainEntityOfPage": "https://www.datacompliancecentre.com/privacy",
              "publisher": {
                "@type": "Organization",
                "name": "Data Compliance Centre",
                "url": "https://www.datacompliancecentre.com"
              }
            })
          }}
        />
      </Head>
        <div>
            
            <PDFViewer pdfPath="/docs/PRIVACYSTATEMENT.pdf" />
        </div>
        </>
    );
};

export default Privacy;
