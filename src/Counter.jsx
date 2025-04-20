
import React, {useState} from 'react';

function Counter() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const [count, setCount] = useState(false);
    
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    const updateName = () => {
        setName("Bryan");
    }

    const updateAge = () => {
        setAge(25);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Set Age</button>

            <p>Status: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Set Status</button>

            <p>Name: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            
        </div>
    )

}

export default Counter