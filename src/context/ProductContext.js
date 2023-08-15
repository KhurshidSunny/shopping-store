import { createContext, useContext, useEffect, useReducer } from "react";
// import cartReducer from "./reducers";

const ProductContext = createContext();
const BASE_URL = "http://localhost:3000";

const cartInitialState = {
  products: [],
  cart: [],
  isShowModal: false,
  currentItem: {},
  sort: "",
  byStock: false,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "products/loaded":
      return {
        ...state,
        products: action.payload,
      };
    case "add-to-card/loaded":
      const updatedProducts = state.products.map((item) =>
        item.id === action.payload.id ? { ...item, add: true } : item
      );

      return {
        ...state,
        cart: [...state.cart, action.payload],
        products: updatedProducts,
        currentItem: action.payload,
      };
    case "remove-from-cart":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        products: state.products.map((item) =>
          item.id === action.payload.id ? { ...item, add: false } : item
        ),
      };
    case "show-add-to-cart-modal":
      return {
        ...state,
        isShowModal: !state.isShowModal,
      };

    case "sort-by-Acscending":
      return {
        ...state,
        sort: action.payload,
      };
    case "sort-by-Descending":
      return {
        ...state,
        sort: action.payload,
      };
    case "by-stock":
      return {
        ...state,
        byStock: action.payload,
      };
    default:
      throw new Error("unknown Action");
  }
}

function ProductProvider({ children }) {
  const [
    { products, isShowModal, cart, currentItem, isAdded, sort, byStock },
    dispatch,
  ] = useReducer(cartReducer, cartInitialState);

  useEffect(function () {
    async function getProducts() {
      const res = await fetch(`${BASE_URL}/products`);
      const data = await res.json();
      dispatch({ type: "products/loaded", payload: data });
    }
    getProducts();
  }, []);

  function addToCart(id) {
    const currentItem = products.find((item) => item.id === id);

    dispatch({
      type: "add-to-card/loaded",
      payload: currentItem,
    });
  }

  function removeFromCart(id) {
    const newCart = cart.find((item) => item.id === id);
    dispatch({ type: "remove-from-cart", payload: newCart });
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        dispatch,

        isShowModal,
        isAdded,
        addToCart,
        cart,
        currentItem,
        removeFromCart,
        sort,
        byStock,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function useProduct() {
  const context = useContext(ProductContext);
  if (context === undefined)
    throw new Error("the Product Context is used outside the Product Provider");
  return context;
}

export { ProductProvider, useProduct };
