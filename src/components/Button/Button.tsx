import s from './Button.module.css'
import {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {getButtonData} from "../../redux/button/thunks";
import {getButtonStatus} from "../../redux/button/selectors";
import {Loader} from "../Loader/Loader";
import {LikeIcon} from "../../assets";

interface ButtonProps {
    label: string
}

export const Button: FC<ButtonProps> = (props) => {
    const {label} = props

    const dispatch = useDispatch<AppDispatch>()
    const status = useSelector(getButtonStatus)
    const [color, setColor] = useState<string>('var(--secondary)')
    const [style, setStyle] = useState<string>(s.button)

    const mouseOverHandler = () => {
        status === 'success' ? setColor('#fff') : setColor('var(--primary)')
    }
    const mouseLeaveHandler = () => {
        status === 'success' ? setColor('#fff') : setColor('var(--secondary)')
    }
    const clickHandler = () => {
        dispatch(getButtonData())
        setColor('#fff')
    }

    useEffect(() => {
        if (status !== 'idle') setStyle(s.buttonClicked)
        if (status === 'success') setColor('#fff')
    }, [status])

    return (
        <button
            className={style}
            onMouseOver={mouseOverHandler}
            onMouseLeave={mouseLeaveHandler}
            onClick={clickHandler}
            data-testid='button'
        >
            {
                status === 'loading'
                    ? <Loader/>
                    : <LikeIcon fill={color}/>
            }
            {label}
        </button>
    );
};
