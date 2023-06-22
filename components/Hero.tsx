'use client';
import Image from 'next/image';
import { CustomButton } from '@components';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();
  const handleScroll = (e: any) => {
    e.preventDefault();
    router.push('#explore');
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Find. Inspect. Decide.</h1>
        <p className="hero__subtitle">Find information on your car</p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-purple-500 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/exploded-car.png"
            alt="hero car"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay hue-rotate-30 relative">
          <a
            href="https://www.researchgate.net/figure/With-its-powerful-engine-and-advanced-electronics-the-GLC-offers-a-remarkably-refined_fig3_313794801"
            className="text-white font-light text-sm cursor-pointer rotate-90 z-[20]"
            target="_blank"
          >
            Exploded Image from: researchgate.net
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
