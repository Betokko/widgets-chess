import {RatingState} from "./slice";

export const getRatingStars = (store: { rating: RatingState }) => store.rating.stars
export const getCurrentStar = (store: { rating: RatingState }) => store.rating.currentStar
