
function List() {
    
    const fruits = ["apple", "banana", "orange", "durian"];
    const fruitsList = fruits.map(fruit => <li>{fruit}</li>);

    return(

        <ul>
            {fruitsList}
        </ul>

    );

}

export default List;