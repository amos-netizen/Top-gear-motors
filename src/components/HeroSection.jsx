function HeroSection({
    onViewCarsClick,
    onBuyClick,
    onSellClick,
    onSortClick,
    onCommentsClick,
  }) {
    return (
      <section className="hero">
        <h1>
          Welcome To Top Gear, Your Trusted Automotive Dealership In Luxurious
          Cars
        </h1>
        <p>
          At Top Gear, We don’t just sell cars; we provide an experience of luxury
          and performance. Step into a world where every vehicle is a masterpiece,
          and every drive is an adventure. Whether you are seeking elegance,
          power, or innovation, Top Gear is your gateway to automotive excellence.
          Discover your dream car today with Top Gear.
        </p>
        <button className="view-cars-btn" onClick={onViewCarsClick}>
          View Cars
        </button>
        <button className="buy-btn" onClick={onBuyClick}>
          Buy
        </button>
        <button className="sell-btn" onClick={onSellClick}>
          Sell
        </button>
        <button className="sort-btn" onClick={onSortClick}>
          Sort
        </button>
        <button className="comments-btn" onClick={onCommentsClick}>
          Comments
        </button>
        <img
          src="https://tinyurl.com/8m4jsrw4"
          alt="Car"
          className="hero-image"
        />
      </section>
    );
  }

  

  export default HeroSection;