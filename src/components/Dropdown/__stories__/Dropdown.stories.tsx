import React from 'react';

import Dropdown from '../Dropdown';

export default { title: 'Inputs/Dropdown' };

export const Empty = () => {
  return (
    <div className="w-96">
      <Dropdown
        selected={{ id: '1', label: 'One', value: 'one' }}
        options={[]}
        onChange={(option) => console.log('option', option)}
      />
    </div>
  );
};

export const Default = () => {
  return (
    <div className="w-96">
      <Dropdown
        selected={{ id: '1', label: 'One', value: 'one' }}
        options={[
          { id: '1', label: 'One', value: 'one' },
          { id: '2', label: 'Two', value: 'two' },
          { id: '3', label: 'Three', value: 'three' },
          { id: '4', label: 'Four', value: 'four' },
          { id: '5', label: 'Five', value: 'five' },
          { id: '6', label: 'Six', value: 'six' },
          { id: '7', label: 'Seven', value: 'seven' },
          { id: '8', label: 'Eight', value: 'eight' },
          { id: '9', label: 'Nine', value: 'nine' },
          { id: '10', label: 'Ten', value: 'ten' },
        ]}
        onChange={(option) => console.log('option', option)}
      />
    </div>
  );
};

export const OpenAbove = () => {
  return (
    <div className="w-96 mt-80">
      <Dropdown
        openTop
        selected={{ id: '1', label: 'One', value: 'one' }}
        options={[
          { id: '1', label: 'One', value: 'one' },
          { id: '2', label: 'Two', value: 'two' },
          { id: '3', label: 'Three', value: 'three' },
          { id: '4', label: 'Four', value: 'four' },
          { id: '5', label: 'Five', value: 'five' },
          { id: '6', label: 'Six', value: 'six' },
          { id: '7', label: 'Seven', value: 'seven' },
          { id: '8', label: 'Eight', value: 'eight' },
          { id: '9', label: 'Nine', value: 'nine' },
          { id: '10', label: 'Ten', value: 'ten' },
        ]}
        onChange={(option) => console.log('option', option)}
      />
    </div>
  );
};

export const Groups = () => {
  return (
    <div className="w-96">
      <Dropdown
        selected={{ id: '1', label: 'One', value: 'one' }}
        options={[
          {
            id: '1',
            label: 'Group A',
            options: [
              { id: '1', label: 'One', value: 'one' },
              { id: '2', label: 'Two', value: 'two' },
              { id: '3', label: 'Three', value: 'three' },
              { id: '4', label: 'Four', value: 'four' },
              { id: '5', label: 'Five', value: 'five' },
              { id: '6', label: 'Six', value: 'six' },
            ],
          },
          {
            id: '2',
            label: 'Group B',
            options: [
              { id: '11', label: 'Eleven', value: 'one' },
              { id: '12', label: 'Twelve', value: 'two' },
              { id: '13', label: 'Thirteen', value: 'three' },
              { id: '14', label: 'Fourteen', value: 'four' },
              { id: '15', label: 'Fifteen', value: 'five' },
              { id: '16', label: 'Sixteen', value: 'six' },
            ],
          },
          {
            id: '3',
            label: 'Group C',
            options: [
              { id: '21', label: 'Twenty One', value: 'one' },
              { id: '22', label: 'Twenty Two', value: 'two' },
              { id: '23', label: 'Twenty Three', value: 'three' },
              { id: '24', label: 'Twenty Four', value: 'four' },
              { id: '25', label: 'Twenty Five', value: 'five' },
              { id: '26', label: 'Twenty Six', value: 'six' },
            ],
          },
        ]}
        onChange={(option) => console.log('option', option)}
      />
    </div>
  );
};
