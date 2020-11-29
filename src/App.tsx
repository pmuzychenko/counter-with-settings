import React from 'react';
import {useState} from 'react';
import './App.css';
import Button from './Button';
import Settings from "./Settings";
import Counter from "./Counter";

function App() {
    //Setting global data
    const maxValueTitle: string = 'max-value:'
    const startValueTitle: string = 'start-value:'

    let [maxValue, setMaxValue] = useState<number>(5)
    let [minValue, setMinValue] = useState<number>(0)

    let [settingsButtonDisabled, setSettingsButtonDisabled] = useState<boolean>(true)

    let [counter, setCounter] = useState<number>(0)
    let [incDisabled, setIncDisabled] = useState<boolean>(true)
    let [resetDisabled, setResetDisabled] = useState<boolean>(true)

    const changeMaxValue = (value: number) => {
        setMaxValue(value)
    }
    const changeMinValue = (value: number) => {
        setMinValue(value)
    }


    return (
        <div className="App">
            <div className="settingsBlock">
                <Settings maxValueTitle={maxValueTitle}
                          startValueTitle={startValueTitle}
                          maxValue={maxValue}
                          minValue={minValue}
                          changeMaxValue={changeMaxValue}
                          changeMinValue={changeMinValue}

                />
                <div className="buttons">
                    <Button title={'set'}
                            disabled={settingsButtonDisabled}
                    />
                </div>
            </div>
            <div className="counterBlock">
                <Counter counter={counter}
                         maxValue={maxValue}
                         minValue={minValue}

                />
            <div className="buttons">
                <Button title={'inc'} disabled={incDisabled}/>
                <Button title={'reset'} disabled={resetDisabled}/>
            </div>
            </div>

        </div>
    );
}

export default App;
