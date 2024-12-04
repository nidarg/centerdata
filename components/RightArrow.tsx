import React from 'react';
import { ArrowRight } from 'lucide-react';

type RightArrowProps = {
  className?: string;
  height?: string | number; // Accept height as string or number
  width?: string | number;  // Accept width as string or number
};

export function RightArrow({ className, height = 24, width = 24 }: RightArrowProps) {
  return (
    <ArrowRight
      className={`text-primary mr-2 ${className}`} // Add className dynamically
      height={height} // Pass height to ArrowRight
      width={width}   // Pass width to ArrowRight
    />
  );
}
