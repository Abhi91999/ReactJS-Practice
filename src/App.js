
import './App.css';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <NavBar title = "TextUtils" AboutText = "About TextUtils"/>
    {/* <NavBar/> */}
    <div className='container'>
    <TextForm heading = "Enter the text to analyze below"/>
    </div>
    </>
  );
}

export default App;
