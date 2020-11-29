import React from 'react';
import './App.css';
import Button from './Button';
import Settings from "./Settings";

function App() {
    //Setting global data
    const maxValueTitle: string = 'max-value:'
    const startValueTitle: string = 'start-value:'

    return (
        <div className="App">
            <Settings maxValueTitle={maxValueTitle}
                      startValueTitle={startValueTitle}

            />
            <Button title={'set'}/>
        </div>
    );
}

export default App;
