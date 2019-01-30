// For even numbers
let myArray =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array1=[];

let num = (n, evenContainer)=>{
  for (let i = 0; i < n.length; i++){
    if (n[i] % 2 == 0){
      evenContainer.push(n[i]);
    }
  }
}    
num(myArray, array1);
console.log(array1) 

// For Odd Numbers
let myArray =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2=[];

let num = (n, oddContainer)=>{
  for (let i = 0; i < n.length; i++){
    if (n[i] % 2 !== 0){
      oddContainer.push(n[i]);
    }
  }
}    
num(myArray, array2);
console.log(array2) 