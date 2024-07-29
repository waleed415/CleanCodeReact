import { PayloadAction, SliceCaseReducers, createSlice } from "@reduxjs/toolkit";
import { TokenResponseModel } from "../../models/TokenResponseModel";

export interface TokenState{
    token?:TokenResponseModel
}

const initialState: TokenState = {
    token:undefined
}

const tokenSliceReducers: SliceCaseReducers<TokenState> = {
    login: (state: TokenState, action: PayloadAction<TokenResponseModel>) => {
      state.token = action.payload; // Set the token in the state
    },
    logout:(state: TokenState, action: PayloadAction<string>) =>{
        state.token=undefined;
    }
  };
  
  // Create the slice with reducers
  export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: tokenSliceReducers,
  });
  
  export default tokenSlice.reducer;
  export const { login, logout } = tokenSlice.actions;