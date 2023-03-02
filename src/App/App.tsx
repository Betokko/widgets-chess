import React from 'react';
import './App.css';
import {Button} from "../components/Button/Button";
import {Rating} from "../components/Rating/Rating";
import {useSelector} from "react-redux";
import {getButtonData, getButtonStatus} from "../redux/button/selectors";
import {Chess} from "../components/Chess";
import {ClassChess} from "../components/ClassChess";
import {DisclaimerOne, DisclaimerTwo} from "../utils/utils";

function App() {
    const status = useSelector(getButtonStatus)
    const {title} = useSelector(getButtonData)

    return (
        <div className="App">
            {status === 'success' ? title : '...Placeholder for REST API response...'}
            <Button label='Click me' />
            <Rating />
            <DisclaimerOne />
            <Chess />
            <DisclaimerTwo />
            <ClassChess />
        </div>
    );
}

export default App;
