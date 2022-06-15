import { format, isToday, isYesterday } from 'date-fns';
import React from 'react';

export interface DateLabelProps {
  date: Date;
  isLong?: boolean;
}

const DateLabel = ({ date, isLong = true }: DateLabelProps) => (
  <div className="items-center bg-background-spacer rounded-lg flex text-main-l2 text-12 font-semibold h-4 justify-center w-24">
    {isToday(date)
      ? 'Today'
      : isYesterday(date)
      ? 'Yesterday'
      : format(date, isLong ? 'MMMM dd, yyyy' : 'MMMM dd')}
  </div>
);

export default DateLabel;
