import clsxm from '@/lib/clsxm';
import { FC } from 'react';
import { FieldError, useFormContext } from 'react-hook-form';
import { FieldWrap } from '../field-wrap';
import { IFormFieldProps } from '../FormField.types';

export const InputField: FC<IFormFieldProps> = ({ name, label, required }) => {
  const methods = useFormContext();
  const {
    register,
    formState: { errors },
  } = methods;
  const error = errors[name] as FieldError;

  return (
    <FieldWrap name={name} label={label} required={required}>
      <input
        id={name}
        {...register(name, { required: 'This field is required' })}
        className={clsxm('inline-block w-full p-2', {
          'bg-orange-200': !!error,
        })}
      />
    </FieldWrap>
  );
};
