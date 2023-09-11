import React from 'react';


function Die(props) {


    
// const isPrime = (number) => {
//     if(number <=1){
//         return false ;// because zeros and ones are not prime numbers 
//     }
   


// const factors = [];

// for (let i = 2; i <= number; i++) {
//     while (number % i === 0) {
//       factors.push(i);
//       number /= i;
//     }
//   }

//   return factors.length ===1 && factors[0] === number

// }

// const num =3;

// if(isPrime(num)){
//     console.log(`${num} is a prime number`);
// }else{
//     console.log(`${num} is not a prime number` );
// }


function isPrime(number) {
    if (number <= 1) {
      return false; // 0 and 1 are not prime numbers
    }
  
    const factors = [];
  
    for (let i = 2; i <= number; i++) {
      while (number % i === 0) {
        factors.push(i);
        number /= i;
      }
    }
  
    return factors.length === 1 && factors[0] === number;
  }
  
  // Example usage:
  const num = 2;
  if (isPrime(num)) {
    console.log(`${num} is a prime number.`);
  } else {
    console.log(`${num} is not a prime number.`);
  }
  

    // Reverse an array using the .reverse method
// const numbers = [1,2,3,4,5]

// numbers.reverse();

// console.log(numbers);

//Here we reversed an array using the spread operator creating new array.
// const numbers = [1,2,3,4,5]

// const revNumbers = [...numbers].reverse();


// console.log(numbers);
// console.log(revNumbers);

//.spread opeartor is used to concatenate an array and creates a new array.
// const num1 = [1,2,3]
// const num2 = [4,5,6]


// const combinedArray = [...num1, ...num2, 7]

// console.log(combinedArray);


    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white" 
    }
    return (
        <div 
        className='die-face' 
        style={styles}
        onClick ={props.holdDice}>
            <h2 className='die-num'>{props.value}</h2>

        </div>
      );
}

export default Die;