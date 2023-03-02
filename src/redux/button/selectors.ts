import {ButtonState} from "./slice";

export const getButtonStatus = (store: { button: ButtonState }) => store.button.status
export const getButtonData = (store: { button: ButtonState }) => store.button.data
