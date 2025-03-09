import PropTypes from 'prop-types';



function List(props) {
    
    
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); reverse alphabetical
    // fruits.sort((a, b) => a.calories - b.calories); numerical
    // fruits.sort((a, b) => b.calories - a.calories); reverse numerical

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    
    const category = props.category;
    const itemList = props.items;
    

    const fruitsList = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            {item.calories}</li>);

                                       

    return(
        <>
        <h3>{category}</h3>
        <ol>{fruitsList}</ol>
        </>
    );

}
List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.string,
    }))
}
export default List;