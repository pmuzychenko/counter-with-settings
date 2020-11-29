import React from 'react';
import './App.css';

type PropsType = {
    counter: number
    minValue: number
    maxValue: number

}

function Counter(props: PropsType) {
    return (
        <div className="counter">
            <h3>{props.counter}</h3>
        </div>
    );
}

export default Counter;
