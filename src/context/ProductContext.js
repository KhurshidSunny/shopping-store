import { createContext, useContext, useEffect, useReducer } from "react";

const ProductContext = createContext();
const BASE_URL = "http://localhost:3000";

const initialState = {
  products: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "products/loaded":
      return {
        ...state,
        products: action.payload,
      };
    default:
      throw new Error("unknown Action");
  }
}

function ProductProvider({ children }) {
  const [{ products }, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function getProducts() {
      const res = await fetch(`${BASE_URL}/products`);
      const data = await res.json();
      dispatch({ type: "products/loaded", payload: data });
    }
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
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
