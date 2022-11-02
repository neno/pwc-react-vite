import { ReactNode } from 'react';

export interface IButtonProps {
  children: ReactNode;
  handleClick?: () => void;
  path?: string;
  hierarchy?: 'primary' | 'secondary' | 'tertiary';
  size?: 'default' | 'small';
  hint?: string;
}
