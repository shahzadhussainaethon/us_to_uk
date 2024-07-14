
//expression 1- declare and initialise variable
//expression 2: condition 
//expression 3:  increment/ decrement

//LOOPS TO REPEAT THE WORK

for (  let i =100  ;   i>=0  ;   i-- )
    {
        //body  jo chez apko repeat krwani
        console.log("Hello World!");

    }


// for in loops
const person= {
  name: "Hamza",
  age: 19,
  cnic:193993933929292,
  gender:"Male"
}
console.log(person["name"]) // to print a single value
console.log(person.name);

// using for loops
for (const key in person)
    {
        console.log(key) // to print keys in object we use for in 
    }

// printing values using key
for (const key in person)
    {
        console.log(person[key]) // to print keys in object we use for in 
    }
//using for of - its used to explore values not keys
    const names= ["ALI", "HASSAN", "HISHAM","ALI", "HASSAN", "HISHAM"];  
   // printing values of array by simple for loops

    for (let i =0; i<=5 ; i++)
        {
            console.log(names[i])
        }

    // printing values by using for of loops
    for (const value of names)
        {
            console.log(value)  //print values in array - for of
        }

     // printing values by using for in loops or using index - keys

     for (const index in names)
        {
            console.log(names[index])  //print values in array - for ofexit
        }
