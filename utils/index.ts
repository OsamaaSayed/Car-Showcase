import { ICar, IFilter } from "@types";

export async function fetchCars(filter: IFilter) {
    const { manufacturer, model, year, fuel, limit } = filter;

    const url = new URL('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars');

    url.searchParams.append('model', model);
    url.searchParams.append('make', manufacturer);
    url.searchParams.append('fuel_type', fuel);
    url.searchParams.append('year', `${year}`);
    url.searchParams.append('limit', `${limit}`);

    let data;
    try {
        const response = await fetch(`${url}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '59113d4951mshfc330e1c530aa0dp12cdd8jsnb03e0e52c880',
                'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
            },
        });
        data = await response.json();
    } catch (err) {
        console.log("🚀 ~ file: index.ts:15 ~ fetchCars ~ err:", err);
    }

    return data;
}


export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: ICar, angle?: string) => {
    const { make, year, model } = car;

    const url = new URL('https://cdn.imagin.studio/getimage');

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
};

