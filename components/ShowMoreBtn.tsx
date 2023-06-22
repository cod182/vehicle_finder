'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ShowMoreBtnProps } from '@Types';
import { CustomButton } from './';

const ShowMoreBtn = ({ pageNumber, isNext }: ShowMoreBtnProps) => {
  const router = useRouter();
  const handleNavigation = () => {};

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
