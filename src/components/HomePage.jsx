import React from 'react'
import './HomePage.css'

function HomePage() {
    return (
        <section className="hero">
          <h1>Welcome To Top Gear, Your Trusted Automotive Dealership In Luxurious Cars</h1>
          <p>
            At Top Gear, We don’t just sell cars; we provide an experience of luxury and performance.
            Step into a world where every vehicle is a masterpiece, and every drive is an adventure.
            Whether you are seeking elegance, power, or innovation, Top Gear is your gateway to
            automotive excellence. Discover your dream car today with Top Gear.
          </p>
          <button className="view-cars-btn" onClick={handleViewCarsClick}>View Cars</button>
          <img src="https://images.pexels.com/photos/8737951/pexels-photo-8737951.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  className="hero-image" />
        </section>
      );
    }

export default HomePage