// function cartReducer(state, action) {
//   switch (action.type) {
//     case "products/loaded":
//       return {
//         ...state,
//         products: action.payload,
//       };
//     case "add-to-card/loaded":
//       const updatedProducts = state.products.map((item) =>
//         item.id === action.payload.id ? { ...item, add: true } : item
//       );

//       return {
//         ...state,
//         cart: [...state.cart, action.payload],
//         products: updatedProducts,
//         currentItem: action.payload,
//       };
//     case "remove-from-cart":
//       return {
//         ...state,
//         cart: state.cart.filter((item) => item.id !== action.payload.id),
//         products: state.products.map((item) =>
//           item.id === action.payload.id ? { ...item, add: false } : item
//         ),
//       };
//     case "show-add-to-cart-modal":
//       return {
//         ...state,
//         isShowModal: !state.isShowModal,
//       };
//     default:
//       throw new Error("unknown Action");
//   }
// }
