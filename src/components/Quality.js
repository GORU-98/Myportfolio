import React from 'react'

const Quality = (props) => {
  return (
    <div className='quality' style={{color:props.color}}>


      <div className="q_card1">
        <img src="./icons/solver.png" alt="problem solver" />
        <h2>Problem solver</h2>
        <p>Developing code for a website from scratch is incredibly difficult  much like trying to solve a complex math equation or write a novel. I thrives on finding ways to make things work, no matter the challenge.I got creative to find a working solution. I always  try to avoid the phrase “It cannot be done” when I am  pitched to  a new project.</p>
      </div>


      <div className="q_card2">
      <img src="./icons/clean.png" alt="clean code" />
    <h2>Clean code</h2>
    <p>Clean code makes optimizations easier as well as results in smaller executable build size. Therefore, from naming conventions to the right number of code comments, bringing Clean Code principles into practice increases the  productivity of mine, contributing directly to project success. For these reasons, keeping the code clean is one of the best skills I have developed from the starting of carrer.</p>
      </div>


      <div className="q_card3">        
      <img src="./icons/righttool.png" alt="right tool" />
      <h2>Right tool</h2>
      <p>Rather than jumping head-first into a project, I first learns as much as possible about the desired end product. Once this step is completed, then I plans out the entire structure of the project before typing out one line of code and chooses the right tools for the whole project. </p>
</div>


    </div>
  )
}

export default Quality
