import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react'

import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode Is Enabled", "light")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = '#e7f1ff';
      showAlert("Light Mode Is Enabled", "info")
    }
  }
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  return (
    <>

      <Navbar mode={mode} toggle={toggleMode} />
      <Alert alert={alert} />
      <TextArea mode={mode} showAlert={showAlert} />

      <About mode={mode} />

    </>
  );
}

export default App;
