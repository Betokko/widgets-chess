import s from './index.module.css'
import {Cell} from "./Cell";
import {useSelector} from "react-redux";
import {getInitialCells} from "../../redux/chess/selectors";
import {FC} from "react";

interface BoardProps {

}

export const Board: FC<BoardProps> = () => {

    const initialCells = useSelector(getInitialCells)

    return (
        <div className={s.board}>
            {
                initialCells.map(row => {
                    return row.map(cell => {
                        return (
                            <Cell
                                color={cell.color}
                                x={cell.x}
                                y={cell.y}
                                available={cell.available}
                                id={cell.id}
                                key={cell.id}
                                figure={cell.figure}
                            />
                        )
                    })
                })
            }
        </div>
    );
};
