function CarListed({ cars }) {
  return (
    <section className="car-list">
      {cars.length > 0 ? (
        cars.map((car) => (
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

export default CarListed;
