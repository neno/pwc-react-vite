import { FC } from 'react';
import { IFieldWrapProps } from './FieldWrap.types';

export const FieldWrap: FC<IFieldWrapProps> = ({ label, children }) => {
  return (
    <li className='full-w mt-4'>
      <label
        htmlFor={label}
        className='block w-full text-white pb-2 capitalize'
      >
        {label}
      </label>
      {children}
    </li>
  );
};
