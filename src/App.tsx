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
    const settingsMes: string = 'Enter values and press SET'
    const errorMes: string = 'Incorrect Value!'

    let [error, setError] = useState<string>('')
    let [maxValue, setMaxValue] = useState<number>(5)
    let [minValue, setMinValue] = useState<number>(0)
    let current = minValue

    let [settingsButtonDisabled, setSettingsButtonDisabled] = useState<boolean>(true)

    let [counter, setCounter] = useState<number>(0)
    let [incDisabled, setIncDisabled] = useState<boolean>(true)
    let [resetDisabled, setResetDisabled] = useState<boolean>(true)

    const changeMaxValue = (maxValue: number) => {

        if (maxValue <= minValue) {
            setError(errorMes)
            setSettingsButtonDisabled(true)
        } else {
            setSettingsButtonDisabled(false)
            setError(settingsMes)
        }
        setMaxValue(maxValue)
    }

    const changeMinValue = (minValue: number) => {
        if (minValue < 0 || minValue >= maxValue) {
            setError(errorMes)
            setSettingsButtonDisabled(true)

        } else {
            setSettingsButtonDisabled(false)
            setError(settingsMes)
        }
        setMinValue(minValue)
    }

    const set = () => {
        setError('')
        setSettingsButtonDisabled(true)
        setCounter(minValue)
        setIncDisabled(false)
        setResetDisabled(false)
    }

    const increment = () => {
        current = counter + 1
        setCounter(current)

        if (current === maxValue) {
            setIncDisabled(true)
            setResetDisabled(false)
        }
    }

    const reset = () => {
        setCounter(minValue)
        setIncDisabled(false)
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
                            execFunc={set}
                    />
                </div>
            </div>
            <div className="counterBlock">
                <Counter counter={counter}
                         maxValue={maxValue}
                         minValue={minValue}
                         error={error}

                />
                <div className="buttons">
                    <Button title={'inc'} disabled={incDisabled} execFunc={increment}/>
                    <Button title={'reset'} disabled={resetDisabled} execFunc={reset}/>
                </div>
            </div>

        </div>
    );
}

export default App;
