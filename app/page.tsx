import Hero from '@components/home/Hero';
import SearchBar from '@components/home/SearchBar';
import CustomFilter from '@components/home/CustomFilter';
import CarCard from '@components/home/CarCard';

import { fetchCars } from '@utils';

export default async function Home() {
  const allCars = await fetchCars();
  console.log('🚀 ~ file: page.tsx:8 ~ Home ~ allCars:', allCars);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div
        className='mt-12 padding-x padding-y max-width'
        id='discover'
      >
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' />
            <CustomFilter title='year' />
          </div>
        </div>

        {isDataEmpty ? (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results!</h2>
            <p>{allCars?.message}</p>
          </div>
        ) : (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car, index) => (
                <CarCard
                  key={index}
                  car={car}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
