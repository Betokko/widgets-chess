import {ChessState} from "../chess/slice";

export const getInitialCells = (store: { chess: ChessState }) => store.chess.initialCells;
export const getIsGrab = (store: { chess: ChessState }) => store.chess.grab;
