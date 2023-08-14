import { createContext, useContext, useEffect, useReducer } from "react";

const ProductContext = createContext();
const BASE_URL = "http://localhost:3000";

const initialState = {
  products: [],
  addToCart: [],
  isShowModal: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "products/loaded":
      return {
        ...state,
        products: action.payload,
      };
    case "add-to-card/loaded":
      return {
        ...state,
        addToCart: action.payload,
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
  const [{ products, isShowModal }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    async function getProducts() {
      const res = await fetch(`${BASE_URL}/products`);
      const data = await res.json();
      dispatch({ type: "products/loaded", payload: data });
    }
    getProducts();
  }, []);

  // function addToCart(id) {}

  return (
    <ProductContext.Provider value={{ products, dispatch, isShowModal }}>
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
