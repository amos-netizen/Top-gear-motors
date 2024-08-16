import React, { useState, useEffect } from "react";
import CarListed from "./CarsListed";
import NavBar from "./NavBar";

function Cars() {
  const [cars, setCars] = useState("");


  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);



  return (
    <>
      <NavBar />
      <div className="cars-page">
        <h2 style={{
          textAlign:'center'
        }}>Find Your Perfect Car</h2>
       
        <CarListed cars={cars} />
      </div>
    </>
  );
}

export default Cars;
