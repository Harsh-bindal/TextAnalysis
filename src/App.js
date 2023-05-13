import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import Textform from './components/Textform';
import { useState } from 'react';
import React from 'react'
import Alert from './components/Alert';
// import { BrowserRouter,Switch,Link, Routes, Route } from "react-router-dom";
// import {BrowserRouter as Router, Route,Routes} from "react-router-dom";




function App() {
  const [mode, setmode] = useState('light');
  const  [alert, setalert] = useState(null);

  const ShowAlert =(message,type)=>
  {
        setalert
        (
          { msg: message,
              type: type

          }
        )

        setTimeout(() => {
          setalert(null);
        }, 2500);
  }

  const toggle= ()=>
  {
      if(mode==='dark')
    {
  setmode('light');
  document.body.style.backgroundColor='white';
  ShowAlert("Light mode enabled","success");
  document.title="TextUtils-Light mode";
    }

    else{
      setmode('dark');
      document.body.style.backgroundColor='grey';
      ShowAlert("Dark mode enabled","success");

    //  setInterval(() => {
    //   document.title='TextUtils-Amazing Dark mode';
    //  }, 1000);

    //  setInterval(() => {
    //   document.title='TextUtils-Install Dark mode';
    //  }, 700);


    }
  }

  return (
 <>



  {/* <Router> */}
<div className="container">
 <Navbar title="Text Analyzer"  text="About" mode={mode} togglemode={toggle}></Navbar>
  <Alert  alert={alert} ></Alert>
  {/* <Textform title="hello" ></Textform> */}

  {/* <Routes>
      <Route path="/" element={<Textform title="Text Analyzer=word counter,charecter counter"  mode={mode} togglemode={toggle}/>}/>
      <Route exact path="/About" element={<About></About>}/>
      <Route exact path="/Textform" element={<Textform  />}/>
      </Routes> */}
</div>
        
    {/* </Router>   */}

   <Textform  mode={mode}>   </Textform>
   {/* <About></About>  */}

 
    

    

       
   




 
 </>
  );
}

export default App;
