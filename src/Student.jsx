import PropTypes from 'prop-types'

// function Student(props) {
//     return(
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//             <p>Student: {props.isStudent ? "Yes" : "No"}</p>
//         </div>
//     );
// }


// it is much better to use it
function Student({ name = "Guest", age = 0, isStudent = false }) {
    return(
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
};

export default Student