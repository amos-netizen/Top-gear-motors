import CarList from "./CarList";


function SellSection({ sortCriteria }) {
  return (
    <section className="sell-section">
      <h2>Sell Your Car</h2>
      <p>List your car for sale with us.</p>
      <CarList filter="sell" sortCriteria={sortCriteria} />
    </section>
  );
}



export default SellSection;