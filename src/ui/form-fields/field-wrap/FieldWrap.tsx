import { FC } from 'react';
import { FieldError, useFormContext } from 'react-hook-form';
import { IFieldWrapProps } from './FieldWrap.types';

export const FieldWrap: FC<IFieldWrapProps> = ({ name, label, children, required }) => {
  const methods = useFormContext();
  const {
    register,
    watch,
    formState: { errors },
  } = methods;
  const error = errors[name] as FieldError;
  return (
    <li className='full-w mt-4'>
      <div className='w-full flex gap-2'>
        <label htmlFor={name} className='flex-0 text-white pb-2 capitalize'>
          {label}:
        </label>
        {error && (
          <span className='flex-1 text-orange-500'>{error?.message}</span>
        )}
      </div>
      {children}
    </li>
  );
};
