import React from 'react';
import './App.css';

function Settings() {
    return (
        <div className="settings">
            <div className={"maxValue"}>
                <span></span>
                <input type="number" />
            </div>
            <div className={"startValue"}>
                <span></span>
                <input type="number" />
            </div>
        </div>
    );
}

export default Settings;
