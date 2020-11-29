import React from 'react';
import './App.css';

type PropsType = {
    title: string
    disabled: boolean
}

function Button(props: PropsType) {
    return (
        <div>
            <button disabled={props.disabled}>{props.title}</button>
        </div>
    );
}

export default Button;
