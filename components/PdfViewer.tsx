'use client'

import React from 'react';

interface PDFViewerProps {
    pdfPath: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfPath }) => {
    return (
        <div style={{ height: '750px', border: '1px solid rgba(0, 0, 0, 0.3)' }}>
            <iframe
                src={pdfPath}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="PDF Viewer"
            />
        </div>
    );
};

export default PDFViewer;
