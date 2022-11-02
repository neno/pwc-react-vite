import { Link } from '@tanstack/react-location';
import { FC } from 'react';
import { IButtonProps } from './Button.types';
import styles from './Button.module.css';
import clsxm from '../../lib/clsxm';

export const Button: FC<IButtonProps> = ({
  children,
  handleClick,
  path,
  hierarchy = 'primary',
  size = 'default'
}) => {
  if (path) {
    return (
      <Link to={path} className={clsxm(styles.btn, styles[hierarchy], styles[size])}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={clsxm(styles.btn, styles[hierarchy], styles)}
    >
      {children}
    </button>
  );
};
