import { configureStore } from "@reduxjs/toolkit";
import { tokenSlice } from "../../features/auth/state/slice/token";
import { persistStore, persistReducer } from "redux-persist"; // Import persist
import storage from "redux-persist/lib/storage"; // Assuming local storage


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["token"], // Persist only the token slice
  };
  
  const persistedReducer = persistReducer(persistConfig, tokenSlice.reducer); // Assuming rootReducer
  
  const store = configureStore({
    reducer: persistedReducer,
  });
  
  export const persistedStore = persistStore(store);
  
  export default store; 
  