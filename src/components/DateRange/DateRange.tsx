import {
  isEqual,
  isFirstDayOfMonth,
  isLastDayOfMonth,
  isMonday,
  isSunday,
} from 'date-fns';
import React from 'react';
import DatePicker from 'react-datepicker';

import { classNames } from '../../utils/classnames';
import Icon from '../Icon/Icon';

export type Dates = {
  start: Date | null;
  end: Date | null;
};

export interface DateRangeProps {
  dates: Dates;
  onChange: (dates: Dates) => void;
}

const DateRange = ({ dates, onChange }: DateRangeProps) => (
  <div className="p-4">
    <div className="flex flex-col gap-1 py-2">
      <div className="text-main text-14 font-semibold tracking-1 mb-1.5">
        Date Range
      </div>
      <div className="relative">
        <DatePicker
          className="inline-picker"
          dateFormat="yyyy-MM-dd"
          endDate={dates.end}
          onChange={([start, end]) => onChange({ start, end })}
          placeholderText="YYYY-MM-DD - YYYY-MM-DD"
          popperClassName="hidden"
          selectsRange
          startDate={dates.start}
        />
        <Icon
          className="absolute pointer-events-none right-4 top-3"
          color="grey"
          icon="calendar"
        />
      </div>
    </div>
    <DatePicker
      calendarClassName="inline-picker"
      calendarStartDay={1}
      dateFormat="yyyy-MM-dd"
      endDate={dates.end}
      formatWeekDay={(weekDay) => weekDay.charAt(0)}
      inline
      onChange={([start, end]) => onChange({ start, end })}
      selected={dates.start}
      selectsRange
      startDate={dates.start}
      renderDayContents={(day, date) => (
        <>
          {!isEqual(dates.start ?? 0, dates.end ?? 0) && (
            <span
              className={classNames(
                'in-range',
                isMonday(date ?? 0) && 'week-start',
                isSunday(date ?? 0) && 'week-end',
                isFirstDayOfMonth(date ?? 0) && 'month-start',
                isLastDayOfMonth(date ?? 0) && 'month-end'
              )}
            />
          )}
          <span className="start-end" />
          <span className="pointer-events-none">{day}</span>
        </>
      )}
      renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
        <div className="items-center flex h-12 justify-between py-0 px-4">
          <button
            aria-label="Previous Month"
            className={'group h-4 hover-not-disabled:bg-transparent'}
            onClick={decreaseMonth}
          >
            <Icon color="grey" icon="angle-left" size={10} />
          </button>
          <span className="text-main-l2 text-14 font-semibold">
            {monthDate.toLocaleString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <button
            aria-label="Next Month"
            className="group h-4 hover-not-disabled:bg-transparent"
            onClick={increaseMonth}
          >
            <Icon color="grey" icon="angle-right" size={10} />
          </button>
        </div>
      )}
    />
  </div>
);

export default DateRange;
