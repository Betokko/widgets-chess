import s from './index.module.css'
import clsx from 'clsx';
import {Colors, Figure} from "./types";
import {useDispatch, useSelector} from "react-redux";
import {chessActions} from "../../redux/chess/slice";
import {getIsGrab} from "../../redux/chess/selectors";
import {StarIcon} from '../../assets'

interface CellProps {
    color: string
    x: number
    y: number
    available: boolean
    id: string | number
    figure: Figure | null

}

export const Cell = (props: CellProps) => {
    const {color, x, y, available, id, figure} = props

    const isGrab = useSelector(getIsGrab)

    const dispatch = useDispatch()

    const handleClick = () => {
        isGrab ? dispatch(chessActions.down({x, y, figure})) : dispatch(chessActions.up({x, y, figure}))

    }


    return (
        <div
            className={ clsx(s.cell, s[color], {[s.fullCell]: !!figure?.name, [s.white]: figure?.color === Colors.LIGHT} ) }
            onClick={handleClick}
        >
            {figure?.name}
            {/*{available && <StarIcon/>}*/}
        </div>
    );
};
