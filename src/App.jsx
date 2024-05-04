import { useState } from "react";
import "./App.scss";

function App() {
    const [counterValue, setCounterValue] = useState(0);

    const minusClickHandler = () => {
        setCounterValue((state) => {
            return state - 1;
        });
    };

    const addClickHandler = () => {
        setCounterValue((state) => {
            return state + 1;
        });
    };

    const resetClickHandler = () => {
        setCounterValue(0);
    };

    return (
        <div>
            <div>{counterValue}</div>
            <button onClick={minusClickHandler}>-</button>
            <button onClick={addClickHandler}>+</button>
            <br />
            <button onClick={resetClickHandler}>Reset</button>
        </div>
    );
}

export default App;
