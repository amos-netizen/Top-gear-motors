import React, { useState,  } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import BuySection from "./components/BuySection";
import SellSection from "./components/SellSection";
import SortOptions from "./components/SortOptions"
import CommentsSection from "./components/CommentSetion"
import CarBrands from "./components/CarBrands";
import SearchBar from "./components/Searchbar";
import CarList from "./components/CarList";
import Contact from "./components/Contact";
import About from "./components/About";


function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showBuySection, setShowBuySection] = useState(false);
  const [showSellSection, setShowSellSection] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [showCommentsSection, setShowCommentsSection] = useState(true);
  const [sortCriteria, setSortCriteria] = useState("");
  const [searchTerm, setSearchTerm ] = useState("");

  const navigate = useNavigate()

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  const handleViewCarsClick = () => {
    navigate("/cars");
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
      {currentPage === "home" && (
        <>
          <HeroSection
            onViewCarsClick={handleViewCarsClick}
            onBuyClick={handleBuyClick}
            onSellClick={handleSellClick}
            onSortClick={handleSortClick}
            onCommentsClick={handleCommentsClick}
          />
          <CarBrands />
          <CarList
            searchTerm={searchTerm}
            filter="all"
            sortCriteria={sortCriteria}
          />
          {showBuySection && <BuySection sortCriteria={sortCriteria} />}
          {showSellSection && <SellSection sortCriteria={sortCriteria} />}
          {showSortOptions && <SortOptions onSortChange={handleSortChange} />}
          {showCommentsSection && <CommentsSection />}
        </>
      )}
      {currentPage === "about" && <About />}
      {currentPage === "contact" && <Contact />}
      {currentPage === "cars" && (
        <>
          <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
          <CarList
            searchTerm={searchTerm}
            filter="all"
            sortCriteria={sortCriteria}
          />
        </>
      )}
    </div>
  );
}





export default App;
