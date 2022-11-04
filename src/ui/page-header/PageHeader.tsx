import { FC } from 'react';
import { IPageHeaderProps } from './PageHeader.types';

export const PageHeader: FC<IPageHeaderProps> = ({ title, children }) => {
  return (
    <header className='flex items-center justify-between border-b-2 border-sky-500'>
      <h1 className='text-4xl leading-relaxed font-bold text-sky-500'>
        {title}
      </h1>
      {children}
    </header>
  );
};
