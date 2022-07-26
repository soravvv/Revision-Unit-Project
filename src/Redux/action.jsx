export const todoActions = {
  GET_TODO_REQUEST: "GET_TODO_REQUEST",
  GET_TODO_SUCCESS: "GET_TODO_SUCCESS",
  GET_TODO_FAILED: "GET_TODO_FAILED",
  CART_REQUEST: "CART_REQUEST",
  CART_SUCCESS: "CART_SUCCESS",
  CART_ERROR: "CART_ERROR",
  AUTH_SUCCESS: "AUTH_SUCCESS",
  AUTH_FAILURE: "AUTH_FAILURE",
};

export const getTodoRequest = () => ({
  type: todoActions.GET_TODO_REQUEST,
});

export const getTodoSuccess = (data) => ({
  type: todoActions.GET_TODO_SUCCESS,
  payload: data,
});

export const getTodoFailed = () => ({
  type: todoActions.GET_TODO_FAILED,
});

export const cartRequest = () => ({
  type: todoActions.CART_REQUEST,
});

export const cartSuccess = (data) => ({
  type: todoActions.CART_SUCCESS,
  payload: data,
});

export const cartFailure = () => ({
  type: todoActions.CART_ERROR,
});

export const authSuccess = () => ({
  type: todoActions.AUTH_SUCCESS,
});

export const authFailure = () => ({
  type: todoActions.AUTH_FAILURE,
});
