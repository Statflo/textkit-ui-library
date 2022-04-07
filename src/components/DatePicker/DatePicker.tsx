import React, { useEffect, useRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import Calendar from '../icons/Calendar';

interface Props {
  format?: string;
  id: string;
  label?: string;
  placeholder?: string;
  selectedDate?: Date;
  shortDays?: boolean;
  showTimeSelect?: boolean;
  onDateChange: (Date: Date | null) => void;
}

export default function DatePicker({
  format = 'yyyy-MM-dd h:mm aa',
  id,
  label,
  placeholder = 'YYYY-MM-DD 00:00',
  selectedDate,
  shortDays = false,
  showTimeSelect = true,
  onDateChange,
}: Props) {
  const [date, setDate] = useState<Date | null>(null);
  const pickerInput = useRef<ReactDatePicker>(null);

  useEffect(() => {
    if (onDateChange) {
      onDateChange(date);
    }
  }, [date, onDateChange]);

  return (
    <div className="tk-relative tk-w-full tk-border tk-border-gray-spacer tk-rounded-md tk-flex tk-items-center tk-px-3 tk-h-10 focus-within:tk-border-primary-default">
      <ReactDatePicker
        ref={pickerInput}
        id={id}
        className="tk-w-full"
        aria-label={label}
        showTimeSelect={showTimeSelect}
        useWeekdaysShort={shortDays}
        onChange={(date: Date) => setDate(date)}
        selected={selectedDate || date}
        autoComplete="off"
        placeholderText={placeholder ? placeholder : 'YYYY-MM-DD --:--'}
        dateFormat={format ? format : 'yyyy-MM-dd h:mm aa'}
      />
      <div className="tk-absolute tk-cursor-pointer tk-right-3 tk-top-[10px] tk-z-10 tk-w-4 tk-h-4 tk-pointer-events-none">
        <Calendar className="tk-text-main-l2" />
      </div>
    </div>
  );
}
