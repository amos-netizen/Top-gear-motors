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


  export default SearchBar;