import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favoriteAdverts: [],
};

const loadFavoritesFromLocalStorage = () => {
    const storedFavorites = localStorage.getItem('favoriteAdverts');
    return storedFavorites ? JSON.parse(storedFavorites) : initialState.favoriteAdverts;
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favoriteAdverts: loadFavoritesFromLocalStorage(),
    },
    reducers: {
        addFavoriteAdvert: (state, action) => {
        state.favoriteAdverts.push(action.payload);
        localStorage.setItem('favoriteAdverts', JSON.stringify(state.favoriteAdverts));
        },
        removeFavoriteAdvert: (state, action) => {
        state.favoriteAdverts = state.favoriteAdverts.filter((advertId) => advertId !== action.payload);
        localStorage.setItem('favoriteAdverts', JSON.stringify(state.favoriteAdverts));
        },
    },
});

export const { addFavoriteAdvert, removeFavoriteAdvert } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;