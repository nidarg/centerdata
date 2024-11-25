'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion';
import DateTime from '../date-time-picker/DateTime';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const DateInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, onChange, ...props }, ref) => {
    const [inputValue, setInputValue] = React.useState('');
    const [showDatePicker, setShowDatePicker] = React.useState(false);
    const radius = 200;
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleDateChange = (date: Date) => {
      const formattedDate = date.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });
      setInputValue(formattedDate);
      onChange?.({ target: { value: formattedDate } } as React.ChangeEvent<HTMLInputElement>);
      // setShowDatePicker(false); // Close the modal after selecting a date
    };

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${showDatePicker ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
              var(--zinc-200),
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        className="relative p-[2px] rounded-lg transition duration-300 group/input"
      >
        <input
          onClick={() => setShowDatePicker(true)}
          type={type}
          value={inputValue}
          className={cn(
            `flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm
             file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
             focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400`,
            className
          )}
          ref={ref}
          readOnly
          {...props}
        />

        {/* DateTime Modal */}
        {showDatePicker && (
          <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
            <div className="bg-accent text-primary font-bold shadow-lg rounded-lg p-6 max-w-md w-full flex flex-col items-center justify-center">
              <DateTime onChange={handleDateChange} />
              <button
                onClick={() => setShowDatePicker(false)}
                className="mt-4 w-full bg-destructive text-white py-2 rounded  transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </motion.div>
    );
  }
);
DateInput.displayName = 'DateInput';

export { DateInput };
