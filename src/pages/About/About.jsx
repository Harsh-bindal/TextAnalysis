import React from 'react'
import "./about.css"
import photo from "../../images/harsh.jpg"


export default function About() {

 

  return (
 <>
     
<div className="aboutContainer">
<div className="upperSection">
          <h2>WHY USE AN WORD COUNT ONLINE TOOL?</h2>
          <p>Well, if you’re wondering why you should be using an online Word Counter Tool, then try the character counter of your content manually. Before you get to line #7, you will realize that the word counting exercise is quite complex, if not practically frustrating. And besides, who wants to waste precious time counting a lengthy document, when you can quickly get help from a word counter like ours?

Meet word calculator and word counter online tool presented by Small SEO Tools. It is an intelligent character counter online tool that delivers results in an eye blink.</p>
          <h2>
          ABOUT WORD COUNTER ONLINE TOOL
          </h2>
          <p>
          This online character counter is a tool we’ve developed to help you find and calculate the characters of your written content. It is built to deliver accurate results and tell how long or short your content is. But this free text counter is more than just a tool for showing you the number of words and characters in your content. It’s a sophisticated textual content analyzer, as you’d find out in the “HOW TO COUNT MY WORDS BY SMALL SEO TOOLS IS DIFFERENT” section below.

This means you can trust our word counter online tool to help you in your content-related projects, whether you are a professional writer, an online entrepreneur, a student, a teacher, or just a social media explorer.
          </p>
        </div>

        <div className="aboutLowerSection">
            <div className='heading' >DEVELOPER</div>

        <div className="lowerSection">

            
          <div className="lowerRight">
            <img className='profilePhoto' alt='not found'  src={photo}></img>
            <h3 className='nameAuthor'>HARSH BINDAL</h3>
          </div>
          <div className="lowerLeft">
            <p >Greetings, I am a budding web developer currently enrolled in NIT Srinagar's esteemed computer science program. Passionate about weaving digital experiences, my journey revolves around mastering the art of web development. Through a fusion of code and creativity, I am dedicated to translating innovative ideas into functional, user-friendly websites and applications. My academic pursuits equip me with a robust understanding of programming languages, algorithms, and software engineering principles, empowering me to navigate the dynamic world of web technology. Inspired by the breathtaking surroundings of Srinagar, I infuse my work with a touch of nature's beauty and cultural richness. Eager to contribute to the digital realm's evolution, I am committed to honing my skills and utilizing the web as a powerful tool to address real-world challenges and shape a brighter tomorrow.</p>
          </div>

        </div>
         
        </div>
  
</div>

 </>
  )
}
