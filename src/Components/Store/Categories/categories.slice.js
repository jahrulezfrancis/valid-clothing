import { createSlice } from '@reduxjs/toolkit';



export const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload
    }
  }
})
 
export const {setCategories} = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;