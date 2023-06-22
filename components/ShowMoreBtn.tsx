'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ShowMoreBtnProps } from '@Types';
import { CustomButton } from './';
import { UpdateSearchParams } from '@utils';

const ShowMoreBtn = ({ pageNumber, isNext }: ShowMoreBtnProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    const newPathName = UpdateSearchParams('limit', newLimit.toString());

    router.push(newPathName);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMoreBtn;
