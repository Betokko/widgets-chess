import s from './Rating.module.css'
import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ratingActions} from "../../redux/rating/slice";
import {getCurrentStar, getRatingStars} from "../../redux/rating/selectors";
import { StarIcon} from '../../assets'


const icons: string[] = ['💩','😥','😐','🙂','🤩']


export const Rating: FC = () => {

    const dispatch = useDispatch()
    const stars = useSelector(getRatingStars)
    const currentStar = useSelector(getCurrentStar)

    const handleClick = (star: number) => {
        dispatch(ratingActions.setCurrentStar(star))
    }


    return (
        <div className={s.wrapper}>
            <div className={s.stars}>
                {
                    stars.map(star => {
                        return (
                            <StarIcon
                                onClick={() => handleClick(star)}
                                key={star}
                                className={s[`rating${star}`]}
                                fill={currentStar < star ? '' : 'var(--star)'}
                            />
                        )
                    })
                }
            </div>
            {Boolean(currentStar) &&
                <div className={s.smile} onClick={() => handleClick(0)}>
                  {icons[currentStar - 1]}
                </div>}
        </div>
    );
};
