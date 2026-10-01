// push keyword is used to combine both array but you can see that it prints array within array 
//  [ 'pranav','patel','mann','patel',[ 'dev', 'patel', 'khush', 'patel' ]]

const friends = ["pranav","patel","mann","patel"]
const Array2 = ["dev","patel","khush","patel"]

// Array.push(Array2);
// console.log(Array);

// concat keyword is also you sued to add two or more than two array it print in ssingle array
//  [ 'pranav','patel','mann','patel', 'dev', 'patel', 'khush', 'patel' ]

const real_Array = friends.concat(Array2)
// console.log(real_Array);

// another method like concat is called spread method which same like concat

const real_array = [...friends, ...Array2]
// console.log(real_array);


//  flat keyword is used when you have array within array and you to print all array within array in single array
// here we use infinity inside flat bcz we dont know how many array within array is there it converts all array within array in single one
const marks = [1,2,3,4,[5,6,7],7,8,[5,6,[9,8]],5,6,7]
//  console.log(marks.flat(Infinity));

// convert string into array
let marks1 = 100
let marks2 = 200
let marks3 = 300

let pranav = console.log(Array.of(marks1,marks2,marks3));


