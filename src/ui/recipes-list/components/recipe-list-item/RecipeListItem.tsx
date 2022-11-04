import { Link } from '@tanstack/react-location';
import { FC } from 'react';
import { Button } from '../../..';
import { IRecipeListItemProps } from './RecipeListItem.types';

export const RecipeListItem: FC<IRecipeListItemProps> = ({
  recipe: { id, name, description, image },
  onDelete
}) => {
  return (
    <li className=' border-b-2 border-white'>
      <div className='flex flex-row gap-4 py-8'>
        <div className='relative base-[150px] flex-0'>
          <Link to={`/recipes/${id}`}>
            <img
              src={image}
              width={150}
              height={150}
              className='max-w-full max-h-full object-cover'
              loading='lazy'
            />
          </Link>
        </div>
        <div className='flex-1 text-white overflow-hidden'>
          <Link to={`/recipes/${id}`}>
            <h3 className='mb-3 leading-none text-xl font-medium text-sky-500'>
              {name}
            </h3>
          </Link>
          <p className='truncate text-ellipsis overflow-hidden ...'>
            {description}
          </p>
          <div className='flex gap-4 mt-4'>
            <Button path={`/recipes/${id}/edit`} size='small'>
              Edit
            </Button>
            <Button
              hierarchy='secondary'
              size='small'
              handleClick={() => onDelete(id as string)}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};
