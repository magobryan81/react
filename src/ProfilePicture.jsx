

function ProfilePicture() {

    const imageURL = './src/assets/logo.jpg';
    const handleClick = () => console.log("Nice");

    return(
        <img onClick={handleClick} src={imageURL}></img>
    )
}

export default ProfilePicture;