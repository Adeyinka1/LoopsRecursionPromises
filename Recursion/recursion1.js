// Write a function that will take in a number. Then write a recursive function to add all numbers between that number and 1
let recur = (n) =>{
    if(n == 1){
      return 1;
    }
    return n + recur(n-1);
  }
  // recur(5);
  console.log(recur(10))