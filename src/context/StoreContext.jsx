import React, { useReducer, createContext } from "react";
import { storeReducer } from "../reducers/storeReducers";

const INITAL_STATE ={ jobs:[] };

export const StoreContext = createContext();

const StoreContextProvider = (props) => {

  const [store, dispatch] = useReducer(storeReducer, INITAL_STATE);

  return (
    <StoreContext.Provider
      value={{
        store,
        dispatch,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
