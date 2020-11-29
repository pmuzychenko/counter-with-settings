import React from 'react';
import './App.css';

type PropsType = {
    maxValueTitle: string
    startValueTitle: string
}

function Settings(props: PropsType) {
    return (
        <div className="settings">
            <div className={"maxValue"}>
                <span> {props.maxValueTitle} </span>
                <input type="number"/>
            </div>
            <div className={"startValue"}>
                <span>{props.startValueTitle} </span>
                <input type="number"/>
            </div>
        </div>
    );
}

export default Settings;
