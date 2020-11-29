import React from 'react';
import './App.css';

type PropsType = {
    title: string
    disabled: boolean
    execFunc: () => void
}

function Button(props: PropsType) {
    return (
        <div>
            <button disabled={props.disabled}
                    onClick={() => {
                        props.execFunc()
                    }}
            >{props.title}</button>
        </div>
    );
}

export default Button;
