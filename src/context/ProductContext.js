import { createContext, useContext, useEffect, useReducer } from "react";

const ProductContext = createContext();
const BASE_URL = "http://localhost:3000";

const initialState = {
  products: [],
  cart: [],
  isShowModal: false,
  currentItem: {},
};

function reducer(state, action) {
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
    default:
      throw new Error("unknown Action");
  }
}

function ProductProvider({ children }) {
  const [{ products, isShowModal, cart, currentItem, isAdded }, dispatch] =
    useReducer(reducer, initialState);

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
