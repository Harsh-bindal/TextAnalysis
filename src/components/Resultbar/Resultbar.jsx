import React from 'react'
import "./resultbar.css"


export default function Resultbar(props) {
    // let words=props.text.split(/\s+/).length-1;
    let words=props.text.split(/\s+/).filter((string)=>{return string.length!==0}).length;

  return (
      <>
  
        <div className="boxes">

           <ul className='countBottom'>
            <li>
                <p>Words</p>
                <span className='words'>{words}</span>
            </li>
            <li>
                <p>Characters</p>
                <span className='characters'>{props.text.length}</span>
            </li>
            <li>
                <p>Sentences</p>
                <span className='sentences'>{(props.text.match(/[^.?!]+[.!?]+[\])'"`’”]*|.+/g)===null) ? 0 : props.text.match(/[^.?!]+[.!?]+[\])'"`’”]*|.+/g).length}</span>
            </li>
            <li>
                <p>Vowels</p>
                <span className='vowel'>{(props.text.match(/[aeiou]/gi) == null) ? 0 : props.text.match(/[aeiou]/gi).length}</span>
            </li>
            <li>
                <p>Read time</p>
                <span className='readtime'>{(words/183).toFixed(2)} Minute</span>
            </li>
           </ul>

        </div>
    </>
  )
}
