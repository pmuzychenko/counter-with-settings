import React from 'react';
import { useState } from 'react';
import './App.css';
import Button from './Button';
import Settings from "./Settings";

function App() {
    //Setting global data
    const maxValueTitle: string = 'max-value:'
    const startValueTitle: string = 'start-value:'

    let [maxValue, setMaxValue] = useState<number>(5)
    let [minValue, setMinValue] = useState<number>(0)

    const changeMaxValue = ( value: number) => {
        setMaxValue(value)
    }
    const changeMinValue = ( value: number) => {
        setMinValue(value)
    }


    return (
        <div className="App">
            <Settings maxValueTitle={maxValueTitle}
                      startValueTitle={startValueTitle}
                      maxValue={maxValue}
                      minValue={minValue}
                      changeMaxValue={changeMaxValue}
                      changeMinValue={changeMinValue}

            />
            <Button title={'set'}/>
        </div>
    );
}

export default App;
