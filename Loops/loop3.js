// ----Using other forms of the for loop (e.g for...in). Loop through the following object.---
const applicant = {
    name: "Luke Skywalker",
  occupation: "Jedi",
  powers: "The force"
  }
  for(let key in applicant){
    // return applicant[key]
    console.log(key)
    // console.log(applicant[key])
  }
  