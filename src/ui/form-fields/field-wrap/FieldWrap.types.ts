import { ReactNode } from 'react';
export interface IFieldWrapProps {
  name: 'name' | 'description' | 'image';
  label: string;
  children: ReactNode;
  required?: boolean;
}
