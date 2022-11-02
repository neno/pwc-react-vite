import { Link } from '@tanstack/react-location';
import { FC } from 'react';
import clsxm from '../../../../lib/clsxm';
import { INavLinkProps } from './NavLink.types';

export const NavLink: FC<INavLinkProps> = ({ title, path, auth = false }) => {
  return (
    <Link
      to={path}
      className={clsxm(
        'block p-4 font-medium text-white hover:bg-sky-900',
        {'bg-sky-800 text-white border-l-4 border-zinc-800 px-8': auth}
      )}
    >
      {title}
    </Link>
  );
};
