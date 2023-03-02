import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {buttonReducer} from './button/slice'
import {ratingReducer} from "./rating/slice";
import {chessReducer} from "./chess/slice";

export const store = configureStore({
    reducer: {
        button: buttonReducer,
        rating: ratingReducer,
        chess: chessReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
