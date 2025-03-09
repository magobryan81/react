// import Header from './Header.jsx';
// import Footer from './Footer.jsx';
// import Food from './Food.jsx';
// import Card from './Card.jsx';
// import Button from './Button.jsx';
// import Student from './Student.jsx';
// import Navbar from './LoginPage/Navbar.jsx';
// import Main from './LoginPage/Main.jsx';
import List from './List.jsx';

function App() {
  const fruits = [{id: 1, name: 'apple', calories: 105}, 
    {id: 2, name: 'orange', calories: 85}, 
    {id: 3, name: 'banana', calories: 15}, 
    {id: 4, name: 'durian', calories: 25}];
    
  return(
    // <>
    // <Navbar/>
    // <Main />
    // </>
    <>
    <List items = {fruits} category="Fruits"/>

    </>
  );
}

export default App
