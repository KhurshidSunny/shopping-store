import { createContext, useContext, useReducer } from "react";

const ProductContext = createContext();

const initialState = {};

function reducer(state, action) {
  switch (action.type) {
  }
}

function ProductProvider({ children }) {
  const [{ products }, dispatch] = useReducer(reducer, initialState);

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
