import cardImage from './assets/react.svg';

function Card() {
    return(
        <div className="card">
            <img src={cardImage} alt="" />
            <h2>My first React</h2>
            <p>first react code</p>
        </div>
    );
}

export default Card;