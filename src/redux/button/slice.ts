import { createSlice } from '@reduxjs/toolkit';
import { getButtonData } from "./thunks";

export interface ButtonData {
    id?: number
    userId?: number
    title?: string
    body?: string
}

export interface ButtonState {
    data: ButtonData
    status: 'idle' | 'loading' | 'success' | 'error';
}

const initialState: ButtonState = {
    data: {},
    status: 'idle',
};

export const buttonSlice = createSlice({
    name: 'button',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getButtonData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getButtonData.fulfilled, (state, action) => {
                state.status = 'success';
                state.data = action.payload;
            })
            .addCase(getButtonData.rejected, (state) => {
                state.status = 'error';
            });
    },
});

export const { reducer: buttonReducer } = buttonSlice;
export const { actions: buttonActions } = buttonSlice;
