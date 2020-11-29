import React from 'react';
import { ChangeEvent } from 'react';
import './App.css';

type PropsType = {
    maxValueTitle: string
    startValueTitle: string
    maxValue: number
    minValue: number
    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
}

function Settings(props: PropsType) {

    const setMaxValue = (e:ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(+e.currentTarget.value)
    }
    const setMinValue = (e:ChangeEvent<HTMLInputElement>) => {
        props.changeMinValue(+e.currentTarget.value)
    }


    return (
        <div className="settings">
            <div className={"maxValue"}>
                <span> {props.maxValueTitle} </span>
                <input type="number" value={props.maxValue}
                       onChange={setMaxValue}

                />
            </div>
            <div className={"startValue"}>
                <span>{props.startValueTitle} </span>
                <input type="number" value={props.minValue}
                       onChange={setMinValue}
                />
            </div>
        </div>
    );
}

export default Settings;
