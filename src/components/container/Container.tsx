import { FC } from 'react';
import { IContainer } from './Container.types';

export const Container: FC<IContainer> = ({ children }) => {
  return <div className='container mx-auto p-16'>{children}</div>;
};
