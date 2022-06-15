import React from 'react';

import DatePicker from '../DatePicker';

export default { title: 'Components/Date Picker' };

export const Default = () => {
  return (
    <div className="w-96">
      <DatePicker id="date-picker" onDateChange={() => null} />
    </div>
  );
};
