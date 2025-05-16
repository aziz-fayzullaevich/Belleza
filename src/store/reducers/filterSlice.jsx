import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        searchThem: '',
        isLoading: false
    },
    reducers: {
        setSearchThem: (state, action) => {
            state.searchThem = action.payload;
        },
        setSearchLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
});

export const { setSearchThem, setSearchLoading } = filterSlice.actions;
export default filterSlice.reducer;