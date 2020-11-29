import React from 'react';
import './App.css';

type PropsType = {
    title: string
}

function Button(props: PropsType) {
    return (
        <div>
            <button>{props.title}</button>
        </div>
    );
}

export default Button;
