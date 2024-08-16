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
      <a href="#comments">
        <button className="comments-btn">Comments</button>
      </a>
      <img
        src="https://tinyurl.com/8m4jsrw4"
        alt="Car"
        className="hero-image"
      />
    </section>
  );
}

export default HeroSection;
