import { FC } from 'react';
import { IMessageProps } from './Message.types';

export const Message: FC<IMessageProps> = ({ children }) => {
  return <p className='my-4 p-4 bg-sky-100 text-sky-900'>{children}</p>;
};
