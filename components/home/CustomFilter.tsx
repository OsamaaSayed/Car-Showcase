'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';

import { updateSearchParams } from '@utils';
import { CustomFilterProps, IOption } from '@types';

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);

  const router = useRouter();

  const handleUpdateParams = (option: IOption) => {
    setSelected(option);
    const newPathname = updateSearchParams(title, option.value.toLowerCase());

    router.push(newPathname, { scroll: false });
  };

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={handleUpdateParams}
      >
        <div className='relative w-fit z-10 mt-1'>
          <Listbox.Button className='custom-filter__btn'>
            <span className='block truncate'>{selected.title || title}</span>

            <Image
              src='/images/chevron-up-down.svg'
              alt='chevron-up-down'
              width={20}
              height={20}
              className='ml-4 object-contain'
            />
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='custom-filter__options'>
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-primary-blue text-white' : 'text-gray-900'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
