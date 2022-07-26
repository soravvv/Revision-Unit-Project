import { todoActions } from "./action";

const init = {
  auth: true,
  loading: true,
  data: [],
  error: false,
  cartLoad: true,
  cart: [],
  cartError: false,
};

export const reducer = (state = init, action) => {
  switch (action.type) {
    case todoActions.GET_TODO_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case todoActions.GET_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    }
    case todoActions.GET_TODO_FAILED: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case todoActions.CART_REQUEST: {
      return {
        ...state,
        cartLoad: true,
        cartError: false,
      };
    }
    case todoActions.CART_SUCCESS: {
      return {
        ...state,
        cartLoad: false,
        cartError: false,
        cart: action.payload,
      };
    }
    case todoActions.CART_ERROR: {
      return {
        ...state,
        cartLoad: false,
        cartError: true,
      };
    }
    case todoActions.AUTH_SUCCESS: {
      return {
        ...state,
        auth: true,
      };
    }
    case todoActions.AUTH_FAILURE: {
      return {
        ...state,
        auth: false,
      };
    }
    default:
      return state;
  }
};
