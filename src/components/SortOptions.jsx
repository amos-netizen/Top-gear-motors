function SortOptions({ onSortChange }) {
  return (
    <section className="sort-options">
      <h2>Sort Cars</h2>
      <select onChange={(e) => onSortChange(e.target.value)}>
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


export default SortOptions;