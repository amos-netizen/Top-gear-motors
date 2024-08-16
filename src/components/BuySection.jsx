import CarList from "./CarList";


function BuySection({ sortCriteria }) {
  return (
    <section className="buy-section">
      <h2>Buy a Car</h2>
      <p>Browse our selection of cars available for purchase.</p>
      <CarList filter="buy" sortCriteria={sortCriteria} />
    </section>
  );
}


export default BuySection;