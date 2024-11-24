import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';



type DateTimeProps = {
  onChange: (date: Date) => void;
};

export default function DateTime({ onChange }: DateTimeProps) {
  const [value, setValue] = useState<Date | null>(new Date());

  const handleChange = (newValue: Date | null) => {
    if (newValue) {
      setValue(newValue);
      onChange(newValue);
    }
  };

  return(
        <div className='max-w-sm'>
         <DateTimePicker minDate={new Date()} onChange={handleChange} value={value} />
        </div>
   

  ) 
}
