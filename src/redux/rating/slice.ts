import {createSlice} from "@reduxjs/toolkit";

export interface RatingState {
    stars: number[]
    currentStar: number
}

const initialState: RatingState = {
    stars: new Array(5).fill('').map((el, i) => i + 1).reverse(),
    currentStar: Number(localStorage.getItem('star')) || 0
};

export const buttonSlice = createSlice({
    name: 'rating',
    initialState,
    reducers: {
        setCurrentStar: (state, action) => {
            state.currentStar = action.payload
            localStorage.setItem('star', action.payload)
        },
    },

});

export const { reducer: ratingReducer } = buttonSlice;
export const { actions: ratingActions } = buttonSlice;
