import { Bars } from 'svg-loaders-react';

export const Spinner = () => {
  return (
    <div className='w-full p-16 grid grid-cols-1 place-items-center'>
      <Bars />
    </div>
  );
};