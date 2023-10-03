'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import SearchManufacturer from './SearchManufacturer';
import Image from 'next/image';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button
      type='submit'
      className={`z-10 ${otherClasses}`}
    >
      <Image
        src='/images/magnifying-glass.svg'
        alt='magnifying glass'
        width={40}
        height={40}
        className='object-contain'
      />
    </button>
  );
};

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');

  const router = useRouter();

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(location.search);

    if (model) {
      searchParams.set('model', model);
    } else {
      searchParams.delete('model');
    }

    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer);
    } else {
      searchParams.delete('manufacturer');
    }

    const newPathname = `${location.pathname}?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (model === '' && manufacturer === '') {
      return alert('Please fill in the search bar');
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  return (
    <form
      className='searchbar'
      onSubmit={handleSearch}
    >
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />

        <SearchButton otherClasses='sm:hidden' />
      </div>

      <div className='searchbar__item'>
        <Image
          src='/images/model-icon.png'
          alt='car model'
          width={25}
          height={25}
          className='absolute ml-4 object-contain'
        />

        <input
          type='text'
          name='model'
          placeholder='Tiguan'
          className='searchbar__input'
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />

        <SearchButton otherClasses='sm:hidden' />
      </div>

      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;
