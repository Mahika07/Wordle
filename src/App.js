import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React,{useState} from 'react'

function App() {
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode=='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='black';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }
  return (
  <>
  <Navbar mode={mode} toggle={toggleMode}/>
  <TextArea mode={mode}/>
  </>
  );
}

export default App;
