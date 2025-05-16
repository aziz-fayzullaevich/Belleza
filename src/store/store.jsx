import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartSlice';
import favoriteReducer from './reducers/favoriteSlice';
import productReducer from './reducers/productSlice';
import filterReducer from './reducers/filterSlice';
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

const persistedCart = loadFromLocalStorage('cart');
const persistedFavorite = loadFromLocalStorage('favorite');

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
    products: productReducer,
    filter: filterReducer,
  },
  preloadedState: {
    cart: {
      cartItems: persistedCart || [],
    },
    favorite: {
      favoriteItems: persistedFavorite || [],
    }
  },
});

store.subscribe(() => {
  const { cart, favorite } = store.getState();
  saveToLocalStorage('cart', cart.cartItems);
  saveToLocalStorage('favorite', favorite.favoriteItems);
});

export default store;