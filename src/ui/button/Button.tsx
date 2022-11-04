import { Link } from '@tanstack/react-location';
import { FC } from 'react';
import { IButtonProps } from './Button.types';
import styles from './Button.module.css';
import clsxm from '@/lib/clsxm';


export const Button: FC<IButtonProps> = ({
  children,
  handleClick,
  path,
  hierarchy = 'primary',
  size = 'default',
  hint,
}) => {
  if (path) {
    return (
      <Link
        to={path}
        className={clsxm(styles.btn, styles[hierarchy], styles[size])}
        aria-label={hint}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={clsxm(styles.btn, styles[hierarchy], styles)}
      aria-label={hint}
    >
      {children}
    </button>
  );
};
