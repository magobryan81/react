
import React, {useState} from 'react';

function OnChange() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");


    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handleSelectChange(event) {
        setPayment(event.target.value);
    }

    function handleRadioChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            <input type="text" name="" id="" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input type="number" name="" id="" value={quantity} onChange={handleQuantityChange} />
            <p>Quanty: {quantity}</p>

            <textarea name="" id="" value={comment} onChange={handleCommentChange}></textarea>
            <p>Comment: {comment}</p>

            <select name="" id="" value={payment} onChange={handleSelectChange}>
                <option value="">Select Option</option>
                <option value="GCash">Gcash</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick-up"
                 checked={shipping === "Pick-up"}
                  onChange={handleRadioChange}/>
                Pick-up
            </label>
            <label>
                <input type="radio" value="Delivery"
                 checked={shipping === "Delivery"}
                  onChange={handleRadioChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default OnChange;