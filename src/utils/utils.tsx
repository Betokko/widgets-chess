
import { nanoid } from 'nanoid'
import {Cell, Colors, FigureNames} from "../components/Chess/types";
import React from "react";


export const getInitCells = () => {
    const board: Cell[][] = []

    for (let i = 0; i < 8; i++) {
        const row: Cell[] = []
        for (let j = 0; j < 8; j++) {
            if ((i + j) % 2 !== 0) {
                row.push(
                    {
                        color: Colors.DARK,
                        x: i,
                        y: j,
                        available: true,
                        id: `${i}${j}`,
                        figure: null,
                        board: null,
                    }
                )
            } else {
                row.push(
                    {
                        color: Colors.LIGHT,
                        x: i,
                        y: j,
                        available: true,
                        id: `${i}${j}`,
                        figure: null,
                        board: null,
                    }
                )
            }
        }
        board.push(row)
    }
    return board
}


export const DisclaimerOne = () => {
    return (
        <>
            Начал делать шахматы на функциональных компонентах, храня логику в редаксе,
            <br/>
            когда дошел до прописывания логики для определения доступных клеток для хода понял
            <br/>
            что идея делать так - была плохая, а переделывать уже нет времени
        </>
    )
}

export const DisclaimerTwo = () => {
    return (
        <>
            A это топовая реализация, шахматы на классах, их сделал UlbiTV
        </>
    )
}
