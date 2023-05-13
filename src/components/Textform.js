import React, {useState} from 'react'

export default function Textform(props) {


    const handleupfunction = ()=>{

      let newtext=text.toUpperCase();
      setText(newtext)
    
    }

    const handleupfunction2 = ()=>{

        let newtext=text.toLowerCase();
        setText(newtext)
      
      }

      const Deletetext = ()=>{

        let newtext='';
        setText(newtext)
      
      }

       const titlecase=()=>{
           
        let newtext=text.replace(/hyy/g,"hello");
        setText(newtext)

       }

       const copytext=()=>{
           
        var text = document.getElementById("myInput");
        text.select();
        text.setSelectionRange(0, 99999); 
        navigator.clipboard.writeText(text.value);

       }

       const substring=()=>{
           
        let newtext=text.substring(5,15);
        setText(newtext)

       }

       const remove_space=()=>{
        let newtext=text.replace(/ +/g, ' ');
        setText(newtext)
       }

       const trim=()=>{
        let newtext=text.replace(/ +/g, '');
        setText(newtext)
       }

       const handleChange = (event) => {
           console.log("On change");
           setText(event.target.value);
        };
     

        const [text, setText] = useState('enter text here');
        
        return (
            
            <>
        
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
        <h3>{props.title}</h3>

    <div><textarea rows="8" cols="150"   id="myInput" onChange={handleChange}  style={{color: props.mode==='dark'?'white':'black' ,backgroundColor: props.mode==='dark'?'#918b8b':'white'}} value={text} ></textarea></div>

          <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleupfunction} >Change in uppercase</button>  
          <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleupfunction2} >Change in lowercase</button>
          <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={Deletetext} >Clear text</button>    
          <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={titlecase} >Hyy to hello</button>  
          <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={copytext} >Copy</button> 
          <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={remove_space} >Remove Extra space</button> 
          <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={trim} >Trim</button> 
          <button disabled={text.length===0} type="button" className="btn btn-outline-success mx-2 my-2" onClick={substring} >substring</button>  
       

   </div>  


   <div  className="container my-2"  style={{color: props.mode==='dark'?'white':'black'}}>
  <h2>You text summary is here:</h2>
  <p>No. of words: {text.split(/\s+/).filter((string)=>{return string.length!==0}).length} , No. of character: {text.length} :</p>
  <p>Average Time will be taken to read paragraph: {(1/183)*text.split(/\s+/).filter((string)=>{return string.length!==0}).length} minute</p>
    <h2>Preview</h2>
  <p>{text.length>0?text:"Nothing to preview!"}</p>
</div>

</>




  )
}
