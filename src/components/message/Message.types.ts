import { ReactNode } from 'react';

export interface IMessageProps {
  children: ReactNode;
  kind?: 'info' | 'success' | 'error'
}
