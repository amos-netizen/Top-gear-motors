import React from 'react';

function CarList({ searchTerm, filter, sortCriteria }) {
  // Example data
  const cars = [
    { id: 1, name: 'Car 1', price: 30000, year: 2022 },
    { id: 2, name: 'Car 2', price: 25000, year: 2021 },
    { id: 3, name: 'Car 3', price: 20000, year: 2020 },
    // Add more car objects as needed
  ];

  // Filter and sort cars
  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchTerm)
  );

  const sortedCars = filteredCars.sort((a, b) => {
    if (sortCriteria === 'price-asc') return a.price - b.price;
    if (sortCriteria === 'price-desc') return b.price - a.price;
    if (sortCriteria === 'year-asc') return a.year - b.year;
    if (sortCriteria === 'year-desc') return b.year - a.year;
    return 0;
  });

  return (
    <div className="car-list">
      <h2>Available Cars</h2>
      <ul>
        {sortedCars.map(car => (
          <li key={car.id}>
            {car.name} - ${car.price} - {car.year}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
