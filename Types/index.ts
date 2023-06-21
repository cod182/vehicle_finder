import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  title: String;
  btnType?: 'button' | 'submit';
  containerStyles?: String;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: String;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: string;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilteredProps {
  manufacturer: string;
  model: string;
  year: number;
  fuel: string;
  limit: number;
}
