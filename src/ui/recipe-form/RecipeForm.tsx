import { IRecipe } from '@/recipes/Recipes.types';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { InputField, TextareaField } from '..';
import { IRecipeFormProps } from './RecipeForm.types';

export const RecipeForm: FC<IRecipeFormProps> = ({
  children,
  onSubmit,
  values,
}) => {
  const methods = useForm<IRecipe>({ mode: 'onBlur', defaultValues: values });
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = methods;
  const imageUrl = !!watch('image') ? watch('image') : '/placeholder.png';

  //   function testImage(URL) {
  //     var tester=new Image();
  //     tester.onload=imageFound;
  //     tester.onerror=imageNotFound;
  //     tester.src=URL;
  // }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='xl:grid grid-cols-12 gap-4 bg-zinc-700'>
          <div className='col-span-7 px-8 py-4 xl:py-8 mt-[-2rem]'>
            <ol>
              <InputField name='name' label='Name' required />
              <InputField name='image' label='Image' required />
              <TextareaField name='description' label='description' required />
            </ol>
          </div>
          <div className='w-[20rem] xl:w-full col-span-5 flex flex-col items-center justify-end px-8 py-4 xl:py-8 relative'>
            <img
              src={imageUrl}
              width={864}
              height={648}
              className='max-w-full max-h-full object-cover'
              loading='lazy'
            />
          </div>
        </div>
        <div>{children}</div>
      </form>
    </FormProvider>
  );
};
