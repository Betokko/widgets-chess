
export enum Colors {
    DARK = 'dark',
    LIGHT = 'light',
}

export enum FigureNames {
    FIGURE = "",
    KING = "Король",
    KNIGHT = "Конь",
    PAWN = "Пешка",
    QUEEN = "Ферзь",
    ROOK = "Ладья",
    BISHOP = "Слон",
}

export interface Figure {
    color: Colors
    logo?: any
    name: FigureNames
}

export interface Cell {
    color: Colors
    x: number
    y: number
    available: boolean
    id: string | number
    figure: Figure | null
    board: Board | null //initialCells
}

export interface Board {
    cells: Cell[][]
}



export interface initialCells {

}
