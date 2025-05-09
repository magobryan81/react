import React, {useState, useEffect} from 'react';

export default function UseEffect() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("");
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listener Added");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener Removed");
        }
    }, [])

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    // useEffect(() => {
    //     document.title = `Count: ${count} ${color}`;
    // }, [count, color]);

    function increment() {
        setCount(c => c + 1);
    }

    function decrement() {
        setCount(c => c - 1);
    }
    
    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    return(
        <div>
            <p style={{color: color}}>count: {count}</p>
            <p style={{color: color}}>color: {color}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Increment</button>
            <button onClick={changeColor}>Color</button>

            <p>{width}</p>
            <p>{height}</p>
        </div>
    )
}