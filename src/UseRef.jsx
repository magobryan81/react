import React, {useState, useEffect, useRef} from 'react';

export default function UseRef() {
    
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.background = "yellow";
        inputRef2.current.style.background = "";
        inputRef3.current.style.background = "";
    }

    function handleClick2() {
        inputRef1.current.focus();
        inputRef1.current.style.background = "";
        inputRef2.current.style.background = "yellow";
        inputRef3.current.style.background = "";
    }

    function handleClick3() {
        inputRef1.current.focus();
        inputRef1.current.style.background = "";
        inputRef2.current.style.background = "";
        inputRef3.current.style.background = "yellow";
    }

    return (
         <div>
            <button onClick={handleClick1}>Click me!</button>
            <input ref={inputRef1}/>

            <button onClick={handleClick2}>Click me!</button>
            <input ref={inputRef2}/>

            <button onClick={handleClick3}>Click me!</button>
            <input ref={inputRef3}/>
         </div>
    )

    
}