import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar } from 'react-bootstrap';
import './App.css';
import Eventcard1 from './events/Eventcard1';
import Eventcard2 from './events/Eventcard2';
// import Background from './Components/Background';
import Navbar from './Components/Navbar';
import People from './Components/Contact/People/People';
 
import Form from './Components/Contact/Form/Form';
import Quote from './Components/Quote';
import Background from './Components/Background';
import Machines from './Components/Machines';
import Centrado from './Components/Centrado';
function App() {
  return (
    <> 

    <Navbar/>
    <Background/>
    <Centrado/>
  <Quote/>

    <Eventcard1/>

    <Eventcard2/>
    <Machines/>
    <People/>
    <Form/>
    

    </>
  );
}

export default App;
