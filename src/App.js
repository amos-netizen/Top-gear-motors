
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showBuySection, setShowBuySection] = useState(false);
  const [showSellSection, setShowSellSection] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [showCommentsSection, setShowCommentsSection] = useState(true);
  const [sortCriteria, setSortCriteria] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleBuyClick = () => {
    setShowBuySection(!showBuySection);
    setShowSellSection(false);
  };

  const handleSellClick = () => {
    setShowSellSection(!showSellSection);
    setShowBuySection(false);
  };

  const handleSortClick = () => {
    setShowSortOptions(!showSortOptions);
  };

  const handleCommentsClick = () => {
    setShowCommentsSection(!showCommentsSection);
  };

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
    setShowSortOptions(false);
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection 
                  onBuyClick={handleBuyClick}
                  onSellClick={handleSellClick}
                  onSortClick={handleSortClick}
                  onCommentsClick={handleCommentsClick}
                />
                <CarList searchTerm={searchTerm} filter="all" sortCriteria={sortCriteria} />
                {showBuySection && <BuySection sortCriteria={sortCriteria} />}
                {showSellSection && <SellSection sortCriteria={sortCriteria} />}
                {showSortOptions && <SortOptions onSortChange={handleSortChange} />}
                {showCommentsSection && <CommentsSection />}
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cars"
            element={
              <>
                <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
                <CarList searchTerm={searchTerm} filter="all" sortCriteria={sortCriteria} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Home</a></li>
        <li className="nav-item"><a href="/about">About</a></li>
        <li className="nav-item"><a href="/cars">Cars</a></li>
        <li className="nav-item"><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function HeroSection({ onBuyClick, onSellClick, onSortClick, onCommentsClick }) {
  return (
    <section className="hero">
      <h1>Welcome To Top Gear, Your Trusted Automotive Dealership In Luxurious Cars</h1>
      <p>
        At Top Gear, We don’t just sell cars; we provide an experience of luxury and performance.
        Step into a world where every vehicle is a masterpiece, and every drive is an adventure.
        Whether you are seeking elegance, power, or innovation, Top Gear is your gateway to
        automotive excellence. Discover your dream car today with Top Gear.
      </p>
      <button className="view-cars-btn" onClick={onBuyClick}>Buy</button>
      <button className="sell-btn" onClick={onSellClick}>Sell</button>
      <button className="sort-btn" onClick={onSortClick}>Sort</button>
      <button className="comments-btn" onClick={onCommentsClick}>Comments</button>
      <img src="https://tinyurl.com/8m4jsrw4" alt="Car" className="hero-image" />
    </section>
  );
}

function BuySection({ sortCriteria }) {
  return (
    <section className="buy-section">
      <h2>Buy a Car</h2>
      <p>Browse our selection of cars available for purchase.</p>
      <CarList filter="buy" sortCriteria={sortCriteria} />
    </section>
  );
}

function SellSection({ sortCriteria }) {
  return (
    <section className="sell-section">
      <h2>Sell Your Car</h2>
      <p>List your car for sale with us.</p>
      <CarList filter="sell" sortCriteria={sortCriteria} />
    </section>
  );
}

function SortOptions({ onSortChange }) {
  return (
    <section className="sort-options">
      <h2>Sort Cars</h2>
      <select onChange={e => onSortChange(e.target.value)}>
        <option value="">Select criteria</option>
        <option value="make">Make</option>
        <option value="model">Model</option>
        <option value="year">Year</option>
        <option value="price">Price</option>
        <option value="mileage">Mileage</option>
      </select>
    </section>
  );
}

function CommentsSection() {
  return (
    <section className="comments-section">
      <h2>Comments</h2>
      <p>Leave your feedback or read others' comments.</p>
      {/* Add functionality for comments here */}
    </section>
  );
}

function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search for cars..." 
        value={searchTerm}
        onChange={onSearch}
      />
    </div>
  );
}

function CarList({ searchTerm, filter, sortCriteria }) {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cars')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error fetching cars:', error));
  }, []);

  const filteredCars = cars
    .filter(car => car.make.toLowerCase().includes(searchTerm))
    .filter(car => filter === 'all' || car.type === filter);
  
  const sortedCars = filteredCars.sort((a, b) => {
    if (sortCriteria === 'make') return a.make.localeCompare(b.make);
    if (sortCriteria === 'model') return a.model.localeCompare(b.model);
    if (sortCriteria === 'year') return a.year - b.year;
    if (sortCriteria === 'price') return a.price - b.price;
    if (sortCriteria === 'mileage') return a.mileage - b.mileage;
    return 0;
  });

  return (
    <section className="car-list">
      {sortedCars.length > 0 ? (
        sortedCars.map(car => (
          <div key={car.id} className="car-item">
            <img src={car.photos[0]} alt={car.make} className="car-image" />
            <h3>{car.make}</h3>
            <p>Price: ${car.price}</p>
            <p>Mileage: {car.mileage} miles</p>
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

function About() {
  return (
    <section className="about">
      <h2>About Us</h2>
      <p>
        Top Gear is a premier automotive dealership specializing in luxury and high-performance vehicles. Our mission is to offer an unparalleled experience in buying and owning a car, combining top-notch customer service with a diverse inventory of premium cars.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>
        Reach out to us for inquiries or assistance. We're here to help!
      </p>
      <p>Email: info@topgear.com</p>
      <p>Phone: +1 (555) 987-6543</p>
    </section>
  );
}

export default App;
