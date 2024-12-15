import {
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
} from "./actionType.js";

const initialState = {
  products: [], // Default is an empty array if no products
  product: null,  // Default is an empty object if no product
  loading: false,
  error: null,
};

export const customerProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PRODUCTS_REQUEST:
    case FIND_PRODUCT_BY_ID_REQUEST:
      return { ...state, loading: true };

    case FIND_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload.content || [], // Default to empty array if content is missing
      };

    case FIND_PRODUCT_BY_ID_SUCCESS:
      return { ...state, loading: false, error: null, product: action.payload || {} }; // Ensure product is an object

    case FIND_PRODUCTS_FAILURE:
    case FIND_PRODUCT_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
