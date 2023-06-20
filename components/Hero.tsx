import image from 'next/image';

import { CustomButton } from '@components';

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Find | Book | Rent - Quick and easy</h1>
        <p className="hero__subtitle">streamline your car rental experience</p>
        <CustomButton />
      </div>
    </div>
  );
};

export default Hero;
