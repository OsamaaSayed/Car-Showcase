import Link from 'next/link';
import Image from 'next/image';

import CustomButton from '@components/shared/CustomButton';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-width flex justify-between items-center padding-x py-4'>
        <Link href='/'>
          <Image
            src='/images/logo.svg'
            alt='Car Hub Logo'
            width={118}
            height={18}
            className='object-contain'
          />
        </Link>

        <CustomButton
          title='Sign In'
          containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
          btnType='button'
        />
      </nav>
    </header>
  );
};

export default Navbar;
