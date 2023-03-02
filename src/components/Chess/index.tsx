import s from './index.module.css'
import {Board} from "./Board";
import {useDispatch} from "react-redux";
import {chessActions} from "../../redux/chess/slice";


export const Chess = () => {
    const dispatch = useDispatch()
    const reset = () => dispatch(chessActions.reset())
    const start = () => dispatch(chessActions.start())

    return (
        <>
            <div className={s.buttons}>
                <button onClick={reset}>Очистить</button>
                <button onClick={start}>Расставить</button>
            </div>
            <Board />
        </>
    )
};
