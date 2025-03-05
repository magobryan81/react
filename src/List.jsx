
function List() {
    
    const fruits = [{id: 1, name: 'apple', calories: 95}, 
                    {id: 2, name: 'orange', calories: 85}, 
                    {id: 3, name: 'banana', calories: 15}, 
                    {id: 4, name: 'durian', calories: 25}];
    const fruitsList = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            {fruit.calories}</li>);

    return(

        <ul>
            {fruitsList}
        </ul>

    );

}

export default List;