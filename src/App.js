import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react'
import {
  HashRouter,
  Routes,
  Route,

} from "react-router-dom";
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
      document.body.style.backgroundColor = '#f5e6e6';
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
      <HashRouter>
        <Navbar mode={mode} toggle={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />}>

          </Route>

          <Route index element={<TextArea mode={mode} showAlert={showAlert} />}>

          </Route>

        </Routes>

      </HashRouter>
    </>
  );
}

export default App;
