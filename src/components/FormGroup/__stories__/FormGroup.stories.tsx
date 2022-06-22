import React from 'react';

import TextInput from '../../TextInput/TextInput';
import FormGroup from '../FormGroup';

export default { title: 'Inputs/Form Group' };

const Template = (args: any) => (
  <FormGroup label={args.label} error={args.error} required={args.required}>
    <TextInput placeholder={args.placeholder} error={args.inputError} />
  </FormGroup>
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  label: 'Form label',
  placeholder: 'Form placeholder',
  error: '',
  inputError: false,
  required: false,
};

export const WithError = () => {
  return (
    <FormGroup label="My form label" error="My error message">
      <TextInput error placeholder="Your name" />
    </FormGroup>
  );
};

export const WithRequired = () => {
  return (
    <FormGroup label="My form label" required>
      <TextInput placeholder="Your name" />
    </FormGroup>
  );
};
