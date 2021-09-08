import React, {useState} from 'react';

export const Counter = () => {

    const [count, setCount] = useState(0)

    const incHandler = () => {
        setCount(count + 1)
    }
    const dncHandler = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incHandler}>Increment</button>
            <button onClick={dncHandler}>Decrement</button>
        </div>
    );
};

