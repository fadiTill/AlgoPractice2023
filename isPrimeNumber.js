//Write a function, isPrimeNumber, that takes in a number as an argument and return a boolean 




const isPrimeNumber = (n) => {
    let squareRootN = Math.sqrt(n)
    if(n < 2 ){
      return false
    }
    for(let i = 2 ; i <= squareRootN ; i ++){
      if(n % i ===  0){
        return false 
      }
    }
    return true
  };