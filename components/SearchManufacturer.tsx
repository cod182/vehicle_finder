'use client';

import { SearchManufacturerProps } from '@Types';
import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useState, Fragment } from 'react';

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </Combobox>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        afterLeave={() => setQuery('')}
      >
        <Combobox.Options>
          {}
        </Combobox.Options>
      </Transition>
    </div>
  );
};

export default SearchManufacturer;
