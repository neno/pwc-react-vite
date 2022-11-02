import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { FieldWrap } from '../field-wrap';
import { IFormFieldProps } from '../FormField.types';

export const TextareaField: FC<IFormFieldProps> = ({ label, required }) => {
  const methods = useFormContext();

  return (
    <FieldWrap label={label}>
      <textarea
        {...methods.register(label, { required })}
        id={label}
        rows={5}
        className='inline-block w-full p-2'
      />
    </FieldWrap>
  );
};
