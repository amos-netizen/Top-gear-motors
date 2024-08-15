import React, { useState, useEffect } from 'react';
import './App.css'; 

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [showBuySection, setShowBuySection] = useState(false);
  const [showSellSection, setShowSellSection] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [showCommentsSection, setShowCommentsSection] = useState(true);
  const [sortCriteria, setSortCriteria] = useState('');

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  const handleViewCarsClick = () => {
    setCurrentPage('cars');
  };

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
    <div className="App">
      <NavBar onNavClick={handleNavClick} />
      {currentPage === 'home' && (
        <>
          <HeroSection 
            onViewCarsClick={handleViewCarsClick} 
            onBuyClick={handleBuyClick}
            onSellClick={handleSellClick}
            onSortClick={handleSortClick}
            onCommentsClick={handleCommentsClick}
          />
          <CarBrands />
          <CarList searchTerm={searchTerm} filter="all" sortCriteria={sortCriteria} />
          {showBuySection && <BuySection sortCriteria={sortCriteria} />}
          {showSellSection && <SellSection sortCriteria={sortCriteria} />}
          {showSortOptions && <SortOptions onSortChange={handleSortChange} />}
          {showCommentsSection && <CommentsSection />}
        </>
      )}
      {currentPage === 'about' && <About />}
      {currentPage === 'contact' && <Contact />}
      {currentPage === 'cars' && (
        <>
          <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
          <CarList searchTerm={searchTerm} filter="all" sortCriteria={sortCriteria} />
        </>
      )}
    </div>
  );
}

function NavBar({ onNavClick }) {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item" onClick={() => onNavClick('home')}>Home</li>
        <li className="nav-item" onClick={() => onNavClick('about')}>About</li>
        <li className="nav-item" onClick={() => onNavClick('cars')}>Cars</li>
        <li className="nav-item" onClick={() => onNavClick('contact')}>Contact</li>
      </ul>
    </nav>
  );
}

function HeroSection({ onViewCarsClick, onBuyClick, onSellClick, onSortClick, onCommentsClick }) {
  return (
    <section className="hero">
      <h1>Welcome To Top Gear, Your Trusted Automotive Dealership In Luxurious Cars</h1>
      <p>
        At Top Gear, We don’t just sell cars; we provide an experience of luxury and performance.
        Step into a world where every vehicle is a masterpiece, and every drive is an adventure.
        Whether you are seeking elegance, power, or innovation, Top Gear is your gateway to
        automotive excellence. Discover your dream car today with Top Gear.
      </p>
      <button className="view-cars-btn" onClick={onViewCarsClick}>View Cars</button>
      <button className="buy-btn" onClick={onBuyClick}>Buy</button>
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

function CarBrands() {
  const brands = [
    { name: "HYUNDAI", logo: "https://tinyurl.com/mpk2cmt4" },
    { name: "ISUZU", logo: "https://tinyurl.com/mv2trf2s" },
  ];

  return (
    <section className="car-brands">
      {brands.map(brand => (
        <img key={brand.name} src={brand.logo} alt={`${brand.name} logo`} className="brand-logo" />
      ))}
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

function CarList({ searchTerm, filter,sortCriteria }) {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/cars')
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
            <img src={car['photos'][0]} alt={car.make} className="car-image" />
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

function About() {
  return (
    <section className="about">
      <h2>About Us</h2>
      <p>
        Top Gear is a premier automotive Why Choose us?

Extensive Selection: Whether you're in the market for a luxury sedan, a rugged SUV, or a fuel-efficient compact car, our diverse inventory caters to all preferences and needs. Each vehicle is carefully vetted to ensure quality and reliability.

User-Friendly Experience: Our intuitive platform allows you to browse, search, and filter cars with ease. With advanced sorting options and a streamlined process for buying and selling, we make car transactions straightforward and hassle-free.

Transparent Pricing: We believe in clear and honest pricing. Our detailed listings provide all the information you need to make an informed decision, including price, mileage, year, and condition.

Exceptional Service: Our dedicated team is here to assist you every step of the way. From answering questions to providing expert advice, we are committed to delivering an outstanding customer experience.

Innovative Features: AutoTrack is not just a marketplace; it's a community. Leave feedback, read reviews, and interact with fellow car enthusiasts to enhance your buying and selling experience. dealership specializing in luxury and high-performance vehicles. Our mission is to offer an unparalleled experience in buying and owning a car, combining top-notch customer service with a diverse inventory of premium cars.

      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>
        Reach out to us for inquiries or assistance. We're heHave questions or need assistance? We're here to help!

Email: info@topgear.com
Phone: +1 (555) 987-6543

Reach out to us through email or phone for any inquiries or support. Our team is dedicated to ensuring you have the best experience possible with TopGear.re Extensive Selection: Whether you're in the market for a luxury sedan, a rugged SUV, or a fuel-efficient compact car, our diverse inventory caters to all preferences and needs. Each vehicle is carefully vetted to ensure quality and reliability.

      </p>
    </section>
  );
}

export default App;
