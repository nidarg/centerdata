'use client';
import React from 'react';
import PDFViewer from '@/components/PdfViewer';
import Head from "next/head";
import { useTranslations } from 'next-intl';

const TermsAndConditions = () => {
    const t = useTranslations('common.termsAndConditions');

    return (
        <>
            <Head>
                <meta property="og:title" content={t('meta.ogTitle')} />
                <meta property="og:description" content={t('meta.ogDescription')} />
                <meta property="og:url" content={t('meta.ogUrl')} />
                <meta property="og:type" content={t('meta.ogType')} />

                <meta name="twitter:card" content={t('meta.twitterCard')} />
                <meta name="twitter:title" content={t('meta.twitterTitle')} />
                <meta name="twitter:description" content={t('meta.twitterDescription')} />

                <link rel="canonical" href={t('meta.canonicalUrl')} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": t('meta.schemaName'),
                            "url": t('meta.canonicalUrl'),
                            "description": t('meta.schemaDescription'),
                            "publisher": {
                                "@type": "Organization",
                                "name": t('meta.schemaPublisherName'),
                                "url": t('meta.schemaPublisherUrl'),
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
