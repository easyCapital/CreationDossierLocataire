import { useMemo } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducer";

// export const store = createStore(
//   RootReducer,
//   compose(
//     applyMiddleware(thunk),
//     typeof window != "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__
//   )
// );

let store;

function initStore(initialState) {
  const composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  return createStore(
    RootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
};
