import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import DateRange, { DateRangeProps, Dates } from '../DateRange';

export default {
  title: 'Inputs/DateRange',
  component: DateRange,
  decorators: [
    (Story) => (
      <div className="w-[350px]">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof DateRange>;

const DefaultTemplate: ComponentStory<typeof DateRange> = (
  args: DateRangeProps
) => {
  const [dateRange, setDateRange] = useState<Dates>({
    start: null,
    end: null,
  });

  return (
    <DateRange
      {...args}
      dates={dateRange}
      onChange={(...props) => {
        args.onChange(...props);
        setDateRange(...props);
      }}
    />
  );
};

export const Default = DefaultTemplate.bind({});
Default.args = {};
