import React from 'react';
import './App.css';

type PropsType = {
    maxValueTitle: string
    startValueTitle: string
    maxValue: number
    minValue: number
}

function Settings(props: PropsType) {
    return (
        <div className="settings">
            <div className={"maxValue"}>
                <span> {props.maxValueTitle} </span>
                <input type="number" value={props.maxValue}/>
            </div>
            <div className={"startValue"}>
                <span>{props.startValueTitle} </span>
                <input type="number" value={props.minValue}/>
            </div>
        </div>
    );
}

export default Settings;
