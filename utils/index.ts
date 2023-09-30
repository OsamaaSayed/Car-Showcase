export async function fetchCars() {
    let data;
    try {
        const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '59113d4951mshfc330e1c530aa0dp12cdd8jsnb03e0e52c880',
                'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
            }
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

