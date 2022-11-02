import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldWrap } from '../field-wrap';
import { IFormFieldProps } from '../FormField.types';

export const InputField: FC<IFormFieldProps> = ({ label, required }) => {
  const methods = useFormContext();

  return (
    <FieldWrap label={label}>
      <input
        {...methods.register(label, { required })}
        id={label}
        className='inline-block w-full p-2'
      />
    </FieldWrap>
  );
};
