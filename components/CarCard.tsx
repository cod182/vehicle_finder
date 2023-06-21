'use client';
import { useState } from 'react';
import Image from 'next/image';
import { CarProps } from '@Types';

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  return <div>CarCard</div>;
};

export default CarCard;
