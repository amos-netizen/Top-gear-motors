import { useState,useEffect } from "react";


function CarList({ searchTerm, filter, sortCriteria }) {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  const filteredCars = cars
    .filter((car) => car.make.toLowerCase().includes(searchTerm))
    .filter((car) => filter === "all" || car.type === filter);

  const sortedCars = filteredCars.sort((a, b) => {
    if (sortCriteria === "make") return a.make.localeCompare(b.make);
    if (sortCriteria === "model") return a.model.localeCompare(b.model);
    if (sortCriteria === "year") return a.year - b.year;
    if (sortCriteria === "price") return a.price - b.price;
    if (sortCriteria === "mileage") return a.mileage - b.mileage;
    return 0;
  });

  return (
    <section className="car-list">
      {sortedCars.length > 0 ? (
        sortedCars.map((car) => (
          <div key={car.id} className="car-item">
            <img src={car["photos"][0]} alt={car.make} className="car-image" />
            <h3>{car.make}</h3>
            <p>Price: {car.price}</p>
            <p>Mileage: {car.mileage}</p>
            <p>Year: {car.year}</p>
            <p>Make: {car.make}</p>
            <p>Model: {car.model}</p>
          </div>
        ))
      ) : (
        <p>No cars found</p>
      )}
    </section>
  );
}

export default CarList