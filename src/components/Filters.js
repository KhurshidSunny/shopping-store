import "./Filters.css";
function Filters() {
  return (
    <div className="sidebar">
      <div className="sidebar-title">Filter Products</div>
      <div className="filter-option">
        <input type="radio" id="ascending" name="sort" value="ascending" />
        <label htmlFor="ascending">Ascending</label>
      </div>
      <div className="filter-option">
        <input type="radio" id="descending" name="sort" value="descending" />
        <label htmlFor="descending">Descending</label>
      </div>
      <div className="filter-option">
        <input type="checkbox" id="outOfStock" />
        <label htmlFor="outOfStock">Include out of stock</label>
      </div>
      <div className="filter-option">
        <input type="checkbox" id="fastDelivery" />
        <label htmlFor="fastDelivery">Fast Delivery only</label>
      </div>
      <div className="rating-label">Rating:</div>
      {/* Add your rating input/slider here */}
      <button className="clear-button">Clear filter</button>
    </div>
  );
}

export default Filters;
