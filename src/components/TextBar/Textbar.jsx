import React,{useEffect, useState} from 'react'
import "./textbar.css"
import Resultbar from '../Resultbar/Resultbar';
import ur from "./func";



export default function Textbar(props) {
  const [text,setText] = useState("Enter text here!");

  const state = ur([]);

   const upperTolower = () =>
   {
      let result=text.toLowerCase();
      setText(result);
   }


   const lowerToUpper = () =>
   {
      let result=text.toUpperCase();
      setText(result);
   }

   const sentenceCase = () =>
   {
      let result=text.charAt(0).toUpperCase()+ text.substring(1).toLowerCase();
      setText(result);
   }

   const copy = () =>
   {
    let text=document.getElementById("myinput");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
   }

   const trim = ()=>
   {
      let result=text.trim();
      setText(result);
   }

   const whiteSpace=()=>
   {
    let result=text.replace(/ +/g," ");
    setText(result);
   }

   const clear=()=>
   {
    let result="";
    setText(result);
   }
    

   const handleChange = (event)=>
   {
    setText(event.target.value);
   }

   useEffect(()=>
   {
     state.updatePresent(text);
   } , [text])



  return (
    <>
    <div className="textContainer">


        <div className="topButtons">
            <button type="button" onClick={upperTolower} >A-a</button>
            <button onClick={lowerToUpper} >a-A</button>
            <button onClick={sentenceCase} >Aaa</button>
            <button onClick={copy}>Copy</button>
            <button onClick={trim} >Trim</button>
        </div>
            

   
        <div className="bottom">

          <div className="sidebuttons">
            <button onClick={clear}>Clear</button>
            <button onClick={state.undo} >Undo</button>
            <button onClick={state.redo}>Redo</button>
            <button className='small' onClick={whiteSpace}>Remove extra spaces</button>
          </div>

          <div className="textBar">
          <textarea  onChange={handleChange} id="myinput" value={state.state} className="textBox" text="type" ></textarea>
          </div>

       

        </div>

        


        </div>

      <Resultbar text={text} ></Resultbar>
    </>
  )
}
