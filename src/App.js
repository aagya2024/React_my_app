import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let name = "aagya";
function App() {
    return (
        <> 
      <Navbar title="AAGYA SHAKYA" about="About" degrees="Degrees"/>
       <div className="container my-3">
        <TextForm heading="Enter Your Message"/>
       </div>
       
        </>
    );
}
export default App;
// if delete sm files go to video no. 5
