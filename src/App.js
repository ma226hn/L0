
 import { useState } from "react";
 import './App.css'

function App() {
  const [name,setname] = useState('')
  const [cards,setcards] = useState([])
  const [show,setShow] = useState(false)
  const [timer, setTimer] = useState(0)
  const [answerStr, setAnswerStr] = useState('')
  const [styleMod, setStyleMode]  = useState('game')
const [message, setMessage] = useState('')
 var success = false
  
  function savename(event)
  {
setname(event.target.value.toUpperCase())

  }
  function addAnswer(event)
  {
    let letter = event.target.textContent
setAnswerStr((oldvalue)=> {
  console.log(oldvalue + letter)
  if (oldvalue + letter===name) 
{
  console.log(oldvalue + letter, name)

success = true
setMessage(' Horra you win 😍 !!!!!')
setStyleMode('win')
}
return oldvalue + letter
})

  }
  function beginGame()
  { 
retring()

     const alphastring =  name + 'M49U%K@م2ت9?F#LÖيK^Lم0ط6$!ه08كBD?FL£@*'
    const letterArray=alphastring.split('')
   
      let i = letterArray.length
      let j
      let x
  
      while (i) {
        j = (Math.random() * i) | 0 // using bitwise OR 0 to floor a number
        x = letterArray[--i]
        letterArray[i] = letterArray[j]
        letterArray[j] = x
      }
  
     
 
    console.log(letterArray)
  setcards(letterArray.map((letter,index)=>
  <button onClick={addAnswer} className='cardClass'  key= {index}>
           {letter}
            </button>  
    ))
 setShow(true)
 
 var secondTimer = setInterval(() => {
  if(success)
    {
     clearInterval(secondTimer)
 
    
    }
    else {
  setTimer((oldvalue)=>{
    
    

    if(oldvalue >= name.length+20)
   {
    clearInterval(secondTimer)
    setStyleMode('lose')
    setMessage('you lose 😕')
   }
  
  return oldvalue+1}
   )}}, 1000);
  }
  function retring()
  {
    setStyleMode('game')
   setcards([])
    setShow(false)
   setTimer(0)
    setAnswerStr('')
 setMessage('')
    success = false
  }
  return (
    <div className="App">
      <header className="App-header">
       
        <p className="Name">
         Enter your name 
        </p>
        <input type= 'text' placeholder="enter your first name " onChange={savename}>
          </input>
          <button onClick={beginGame} > Enter</button>
          <br></br>
          <br></br>
         {(show) && (<div  >
          <p  className="Name"> Hi <i> {name} </i>  , try to find your name within  <i>{name.length+20 }</i> seconds </p>
          <div  className="gameDiv">
         {(styleMod==='game') && <div className="cardDiv">
      {cards}
      </div>}
      <div>
      <p className={styleMod}> It's been  {timer} seconds</p>
             <p className={styleMod}>  {message}  </p>
             <p>{answerStr}</p>
      
      <br></br>
     { (message !== '')&&<button onClick={retring}>Retrying</button>}
      </div>
      </div>
      </div>)}
      
      </header>
    </div>
  );
}

export default App;
