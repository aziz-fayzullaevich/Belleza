import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteItems: []
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const product = action.payload;
      const exists = state.favoriteItems.find(item => item.id === product.id);

      if (exists) {
        state.favoriteItems = state.favoriteItems.filter(item => item.id !== product.id);
      } else {
        state.favoriteItems.push(product);
      }
    },
    removeFavorite: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter(item => item.id !== action.payload);
    }
  }
});

export const { toggleFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;