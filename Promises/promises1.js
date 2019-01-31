// Create an array containing names of your favourite foods/fruits. 
// Write a program that will take in your favourite fruit, 
// then write a program that will check if the fruit you input 
// is in your array. It should return a Promise that will be 
// accepted or rejected if the value is inside the array or not.

const myFavFruit = (fruit)=>{
    // List of fruits
    let favFruit = ["banana", "orange", "water Lemon", "apple", "pawpaw"];
    let fruitIndex = favFruit.indexOf(fruit);
    // checking fruit in the list
    if (fruitIndex !== -1){
      return Promise.resolve(fruit + " is one of my favourite fruits");
    }
    return Promise.reject(fruit + " is not my favourite fruit");
  }
  async function favourite(){
    try{
      let rightFruit = await myFavFruit("apple");
      console.log(rightFruit);
    }catch(error){
      console.log(error);
    }
  }
  favourite();