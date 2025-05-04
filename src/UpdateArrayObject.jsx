
import react, {useState} from 'react';

export default function UpdateArrayObject() {
    const [cars, setCars] = useState([]);
    const [carYear, setYear] = useState(new Date().getFullYear());
    const [carMake, setMake] = useState("");
    const [carModel, setModel] = useState("");

    function handleAddCar() {
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel
        }

        setCars(cars => [...cars, newCar]);

        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }

    function handleRemoveCar(index) {
        setCars(cars => cars.filter((_, i) => i !== index));
    }

    function handleYearChange(event) {
        setYear(event.target.value);
    }

    function handleMakeChange(event) {
        setMake(event.target.value);
    }

    function handleModelChange(event) {
        setModel(event.target.value);
    }

    return(
        <div>
            <h2>List of Car</h2>
            <ul>
                {cars.map((car, index) =>
                <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange} /><br />
            <input type="text" value={carMake} onChange={handleMakeChange} /><br />
            <input type="text" value={carModel} onChange={handleModelChange} /><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )
}
