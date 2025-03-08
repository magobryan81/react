
function List() {
    
    const fruits = [{id: 1, name: 'apple', calories: 105}, 
                    {id: 2, name: 'orange', calories: 85}, 
                    {id: 3, name: 'banana', calories: 15}, 
                    {id: 4, name: 'durian', calories: 25}];
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); reverse alphabetical
    // fruits.sort((a, b) => a.calories - b.calories); numerical
    // fruits.sort((a, b) => b.calories - a.calories); reverse numerical

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    
    const fruitsList = highCalFruits.map(highCalFruits => <li key={highCalFruits.id}>
                                            {highCalFruits.name}: &nbsp;
                                            {highCalFruits.calories}</li>);

                                       

    return(

        <ul>
            {fruitsList}
        </ul>

    );

}

export default List;