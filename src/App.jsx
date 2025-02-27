import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';
function App() {
  return(
    <>
    <Card />
    <Button />
    <UserGreeting name="Bryan" isLoggedIn={true}/>
    <Header />
    <Food />
    <Student name="Spongebob" age={30} isStudent={true}/>
    <Student />
    <Footer />
    </>
  );
}

export default App
