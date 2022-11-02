import { NavLink } from './components/nav-link';

export const Nav = () => {
  return (
    <nav className='w-full bg-sky-500 color-white'>
      <ul className='flex justify-between no-list'>
        <li>
          <NavLink title='Home' path='/' />
        </li>
        <li>
          <NavLink title='Login' path='/login' auth />
        </li>
      </ul>
    </nav>
  );
};
