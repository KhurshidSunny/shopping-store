import { useProduct } from "../context/ProductContext";
import "./Filters.css";
function Filters() {
  const { sort, dispatch, byStock } = useProduct();
  console.log(byStock);
  return (
    <div className="sidebar">
      <div className="sidebar-title">Filter Products</div>
      <div className="filter-option">
        <input
          type="radio"
          id="ascending"
          name="sort"
          value="ascending"
          onChange={() =>
            dispatch({
              type: "sort-by-Acscending",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
        <label htmlFor="ascending">Ascending</label>
      </div>
      <div className="filter-option">
        <input
          type="radio"
          id="descending"
          name="sort"
          value="descending"
          onChange={() =>
            dispatch({ type: "sort-by-Descending", payload: "highToLow" })
          }
        />
        <label htmlFor="descending">Descending</label>
      </div>
      <div className="filter-option">
        <input
          type="checkbox"
          id="outOfStock"
          onChange={() => dispatch({ type: "by-stock", payload: !byStock })}
          checked={byStock}
        />
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
