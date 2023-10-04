'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import CustomButton from '@components/shared/CustomButton';

import { updateSearchParams } from '@utils';
import { ShowMoreProps } from '@types';

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathname = updateSearchParams('limit', newLimit.toString());

    router.push(newPathname, { scroll: false });
  };

  return (
    <div className='w-full flex justify-center items-center gap-5 mt-10'>
      {!isNext && (
        <CustomButton
          title='Show More'
          btnType='button'
          containerStyles='bg-primary-blue rounded-full text-white'
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
