import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  title: String;
  btnType?: 'button' | 'submit';
  containerStyles?: String;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
  manufacturer: String;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: Number;
  class: String;
  combination_mpg: Number;
  cylinders: String;
  displacement: Number;
  drive: String;
  fuel_type: String;
  highway_mpg: Number;
  make: String;
  model: String;
  transmission: String;
  year: Number;
}
