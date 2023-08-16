import { useProduct } from "../context/ProductContext";
import "./Filters.css";
import Rating from "./Rating";
function Filters() {
  const { sort, dispatch, byStock, byFastDelivery, byRating } = useProduct();

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
          checked={sort === "highToLow" ? true : false}
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
        <input
          type="checkbox"
          id="fastDelivery"
          onChange={() =>
            dispatch({ type: "filter-by-delivery", payload: byFastDelivery })
          }
          checked={byFastDelivery}
        />
        <label htmlFor="fastDelivery">Fast Delivery only</label>
      </div>
      <span className="rating-label">
        Rating:{" "}
        <Rating
          rating={byRating}
          onHandleClick={(i) =>
            dispatch({
              type: "filter-by-rating",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>

      <button
        className="clear-button"
        onClick={() => dispatch({ type: "clear-filter" })}
      >
        Clear filter
      </button>
    </div>
  );
}

export default Filters;
