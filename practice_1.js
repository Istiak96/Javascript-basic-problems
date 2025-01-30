{
  /* Task 1: Create a variable called carName, assign the value Volvo to it.*/
  let carName = "Volvo";
}


{
  /* Task 2: On one single line, declare three variables with the following names and values:*/
  let firstName = "John"; let lastName = "Doe"; let age = 35;
}


{
  /* Task 3: Use the correct assignment operator that will result in x being 50 (same as x = x * y).*/
  
  let x = 10;
  let y = 5;
  x *= y;
}


{
  /* Task 4: Use comments to describe the correct data type of the following variables:*/
  let length = 16; // Number
  let lastName = "Johnson"; // String

  const x = {
    firstName: "John",
    lastName: "Doe"
  }; // Object
}


{
  /* Task-5 : Execute the function named myFunction. */

  function myFunction(){
    alert("Hello World!");
  }

  // myFunction()
}

{
  /* Task-6: Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").*/

  const person = {
    name : "John",
    age: 50,
    intro: function(){
      return `${this.name} is ${this.age}`;
    }
  }

  // alert(person.intro());
  
}


{
  /*Task-7: The <button> element should do something when someone clicks on it. Try to fix it!*/


  const btnText = document.querySelector('.btnText');
  const btn = document.querySelector('.btn');

  btn.addEventListener('click' , () => {
    btnText.style.display = "block"
  })
  
}

{
  /* Task-8: Array Related Question */

  // 1. Alert the number of items in an array, using the correct Array property: 

  const cars = ["Volvo" , "Jeep" , "Mercedes"];

  let number = "";

  cars.forEach((val , i) => {
    number += i + " ";
  })  

  // alert(number)



  // 2. Change the first item of Brand to "Ford".

  const Brand = ["Volvo", "Jeep", "Mercedes"]; 

  Brand[0] = "Ford";

  // alert(Brand)

}


{
  /* Task-9: Math Related Problems*/

  
  // 1. Use the correct Math method to create a random number.

  let randomNum = Math.random();

  // alert(randomNum)


  // 2. Use the correct Math method to return the largest number of 10 and 20.

  let largest = Math.max(10 , 20);

  // alert(largest)


  // 3. Use the correct Math method to get the square root of 9.

  let squareRoot = Math.sqrt(9);

  // alert(squareRoot)

}


{
  /* Task-10: comparison operator related problems! */

  // 1. Choose the correct comparison operator to alert true, when x is greater than y. 

  let x = 10;
  let y = 5;

  // alert(x > y)


  // 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

  let age = 10;

  let condition = (age < 18) ? "Too young" : "Old enough";

  // alert(condition)

}


