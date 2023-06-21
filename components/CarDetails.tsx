import { CarProps } from '@Types';

interface CarDetailsProps {
  isOpen: Boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return <div>CarDetails</div>;
};

export default CarDetails;
