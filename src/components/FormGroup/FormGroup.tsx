import React from 'react';

import InputError from '../InputError/InputError';
import Label from '../Label/Label';

export interface FormGroupProps {
  children: React.ReactNode;
  error?: string;
  label: string;
  required?: boolean;
}

export default function FormGroup({
  children,
  error,
  label,
  required = false,
}: FormGroupProps) {
  return (
    <div className="w-full space-y-1">
      <Label required={required}>{label}</Label>
      {children}
      {error && <InputError>{error}</InputError>}
    </div>
  );
}
