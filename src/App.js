
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  let toggleMode = () => {
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'ede6f6';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <NavBar title = "TextUtils" AboutText = "About TextUtils" mode ={mode} toggleMode={toggleMode}/>
    {/* <NavBar/> */}
    <div className='container'>
    <TextForm heading = "Enter the text to analyze below" mode={mode}/>
    <About/>
    </div>
    </>
  );
}

export default App;
