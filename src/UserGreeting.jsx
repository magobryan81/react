
function UserGreeting(props) {
    const welcomeMessage = <h2>Welcome {props.name}</h2>
    const loginPrompt = <h2>Please Login to Continue</h2>
    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}

export default UserGreeting