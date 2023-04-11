
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 3000);
  }
  let toggleMode = () => {
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'ede6f6';
    showAlert("The dark mode has been enabled", "Success");
    
    setInterval(() => {
      document.title = "TextUtils - DarkMode";
    }, 2000);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("The light mode has been enabled", "Success");
      
      setInterval(() => {
        document.title = "TextUtils - LightMode";
      }, 1500);
    }
  }
  return (
    <>
    <NavBar title = "TextUtils" AboutText = "About TextUtils" mode ={mode} toggleMode={toggleMode}/>
    {/* <NavBar/> */}

    <Alert alert = {alert}/>
    <div className='container'>
    <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/>
    <About/>
    </div>
    </>
  );
}

export default App;
