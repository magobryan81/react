import React, {useState} from 'react';

export default function UpdateArray() {
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"])

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }

    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) =>
                <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" name="" id="foodInput" />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}