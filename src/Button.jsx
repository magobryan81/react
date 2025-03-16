import buttonStyle from './button.module.css'

function Button() {
    // const handleClick = () => console.log("Clicked");
    // let count = 0;
    // const handleClick2 = (name) => {
    //     if(count < 5) {
    //         count++;
    //         console.log(`${name} you click me ${count} times`);
    //     } else {
    //         console.log(`${name} you click me many times`);
    //     }
    // };
    // const handleClick3 = (e) => console.log(e);
    const handleClick3 = (e) => e.target.textContent = "Nice";
    return(
        <button className={buttonStyle.button} onClick={(e) => handleClick3(e)}>
        Click Me!
        </button>
    );
}

export default Button;