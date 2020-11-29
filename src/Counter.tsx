import React from 'react';
import './App.css';

type PropsType = {
    counter: number
    minValue: number
    maxValue: number
    error: string

}

function Counter(props: PropsType) {
    return (
        <div className="counter">
            {props.error ? <h3 className={props.error === 'Incorrect Value!' ? 'error' : 'default'}>{props.error}</h3> :
                <h3 className={props.counter === props.maxValue ? 'maxNumber' : 'defaultNumber'}>{props.counter}</h3>}
        </div>
    );
}

export default Counter;
