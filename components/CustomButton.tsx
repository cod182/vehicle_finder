'use client';

import { CustomButtonProps } from '@Types';
import Image from 'next/image';
import { MouseEventHandler } from 'react';

const CustomButton = ({
  title,
  btnType,
  containerStyles,
  handleClick,
  textStyles,
  rightIcon,
  isDisabled,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn hover:shadow-xl ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt={rightIcon}
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
