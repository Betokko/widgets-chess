import {createSlice} from "@reduxjs/toolkit";
import {getInitCells} from "../../utils/utils";
import {Cell, Colors, FigureNames} from "../../components/Chess/types";


export interface ChessState {
    initialCells: Cell[][]
    current: any
    grab: boolean
    start: number[]
    finish: number[]
}

const initialState: ChessState = {
    initialCells: getInitCells(),
    current: {},
    grab: false,
    start: [],
    finish: [],
};

export const buttonSlice = createSlice({
    name: 'chess',
    initialState,
    reducers: {
        reset: (state) => {
            state.initialCells = getInitCells()
        },
        start: (state) => {
            state.initialCells = getInitCells()
            state.initialCells.map((row, i) => row.map((cell, j) => {
                i === 1 || i === 6
                    ? cell.figure = { color: i < 4 ? Colors.DARK : Colors.LIGHT, logo: null, name: FigureNames.PAWN, }
                    : cell.figure = null
                if (i === 0 || i === 7) {
                    if (j === 0 || j == 7) cell.figure = {color: i < 4 ? Colors.DARK : Colors.LIGHT, logo: null, name: FigureNames.ROOK,}
                    if (j === 1 || j == 6) cell.figure = {color: i < 4 ? Colors.DARK : Colors.LIGHT, logo: null, name: FigureNames.BISHOP,}
                    if (j === 2 || j == 5) cell.figure = {color: i < 4 ? Colors.DARK : Colors.LIGHT, logo: null, name: FigureNames.KNIGHT,}
                    if (j === 3) cell.figure = {color: i < 4 ? Colors.DARK : Colors.LIGHT, logo: null, name: FigureNames.KING,}
                    if (j === 4) cell.figure = {color: i < 4 ? Colors.DARK : Colors.LIGHT, logo: null, name: FigureNames.QUEEN,}
                }
            }))
        },
        up: (state, {payload}) => {
            const {x, y, figure} = payload
            if (!!figure) {
                state.grab = true
                state.current = {x, y, figure}
                state.start = [x,y]
                // const getAvailable = (start: number[]) => {
                //     if (figure.name === 'Ладья') state.initialCells = state.initialCells.map((row, y) => row.map((cell, x) => {
                //         return (y === start[0] || x === start[1]) && !cell.figure ? {...cell, available: true} : cell
                //     }))
                // }
                // getAvailable(state.start)
            }

        },
        down: (state, {payload}) => {
            const {x, y, figure} = payload
            if (state.grab && !figure) {

                state.finish = [x,y]
                const move = (start: number[], finish: number[]) => {
                    if (state.initialCells[finish[0]][finish[1]].available) {
                        state.grab = false
                        state.initialCells[start[0]][start[1]].figure = null
                        state.initialCells[finish[0]][finish[1]].figure = state.current.figure
                        state.current = {}
                        // state.initialCells.map(row => row.map(cell => cell.available = false))
                    }
                }

                move(state.start, state.finish)
            }
        },
    },

});

export const { reducer: chessReducer } = buttonSlice;
export const { actions: chessActions } = buttonSlice;
