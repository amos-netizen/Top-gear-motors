
function CarBrands() {
  const brands = [
    { name: "HYUNDAI", logo: "https://tinyurl.com/mpk2cmt4" },
    { name: "ISUZU", logo: "https://tinyurl.com/mv2trf2s" },
  ];

  return (
    <section className="car-brands">
      {brands.map((brand) => (
        <img
          key={brand.name}
          src={brand.logo}
          alt={`${brand.name} logo`}
          className="brand-logo"
        />
      ))}
    </section>
  );
}

export default CarBrands;
