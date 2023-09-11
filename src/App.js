import logo from './logo.svg';
import './App.css';
import Die from './Components/Die';
import { useEffect, useState } from 'react';
import {nanoid} from "nanoid"



function App() {
const[dice, setDice] = useState(allNewDice())
const[tenzies, setTenzies] = useState(false);

//keeping two pieces of state is another reason of using useEffect


// Challenge: Check the dice array for these winning conditions:
//  * 1. All dice are held, and
//  * 2. all dice have the same value
//  * 
//  * If both conditions are true, set `tenzies` to true and log
//  * "You won!" to the console



useEffect(()=>{
  //arrow function takes a function has the first parameter
  const allHeld = dice.every(die => die.isHeld)
  const firstValue = dice[0].value
  const allSameValue = dice.every(die => die.value === firstValue)
  if (allHeld && allSameValue) {
      setTenzies(true)
      console.log("You won!")
    }
}, [dice])

function generateNewdie(){
 return{
  value: Math.ceil(Math.random() * 6),
  isHeld: false,
  id: nanoid()

 }
  
}
  function allNewDice(){
    const newDice =[]
    for(let i = 0; i < 10; i++){
      // newDice.push(Math.ceil(Math.random() * 6))
      newDice.push(generateNewdie())
        
    }
    return newDice
     // new array to hold my numbers
        // loop 10 times
            // push a random number from 1-6 to my array
        // return array
  }
  function rollDice(){
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die :
      generateNewdie()
    }))
  }

  function holdDice(id){
    setDice(oldDice =>oldDice.map(die =>{
      return die.id === id ?
      {...die, isHeld: !die.isHeld} :
      die
    }))
  }

  // Challenge: Update the `holdDice` function to flip
  // * the `isHeld` property on the object in the array
  // * that was clicked, based on the `id` prop passed
  // * into the function.

  const diceElements = dice.map(die =>
     <Die value={die.value}
      isHeld={die.isHeld} 
      holdDice={() => holdDice(die.id)} 
    />  
    )
  return (
    <main>
     <h1 className="title">Tenzies</h1>
    <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
<div className='dice-container'>
    {diceElements}

    {/* <Die value="1"/>
    <Die value="2"/>
    <Die value="3"/>
    <Die value="4"/>
    <Die value="5"/>
    <Die value="6"/>
    <Die value="1"/>
    <Die value="1"/>
    <Die value="1"/>
    <Die value="1"/> */}

    </div>

    <button className='roll-dice' onClick={rollDice}>Roll</button>
    </main>
    
  );
}

export default App;

//  * Challenge: Create a `Roll Dice` button that will re-roll
//  * all 10 dice
//  * 
//  * Clicking the button should generate a new array of numbers
//  * and set the `dice` state to that new array (thus re-rendering
//  * the array to the page)
 




//  * Challenge: Update the array of numbers in state to be
//  * an array of objects instead. Each object should look like:
//  * { value: <random number>, isHeld: false }
//  * 
//  * Making this change will break parts of our code, so make
//  * sure to update things so we're back to a working state
//  *



/**
 * Challenge: Add conditional styling to the Die component
 * so that if it's held (isHeld === true), its background color
 * changes to a light green (#59E391)
 * 
 * Remember: currently the Die component has no way of knowing
 * if it's "held" or not.
 */