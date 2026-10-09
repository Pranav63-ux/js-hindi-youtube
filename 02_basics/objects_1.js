// objects literals 

//  1. creation fo object (key and value pair)

const jsUser = {
    name : "pranav_patel",
     age : 19,
     email : "pranav@gmail.com",
     location : "bengaluru",
     collage : "BIT bengaluru"
}

// accessing the object (method 1)

// console.log(jsUser.age);
// console.log(jsUser.collage);
// console.log(jsUser.email);
// console.log(jsUser.location);

// accessing the object (method 2) (without using dot operator)

// console.log(jsUser["age"]);
// console.log(jsUser["collage"]);
// console.log(jsUser["name"]);


// if want to change the value of object 

jsUser.email = "pranav@google.com"
jsUser.name = "ram"

// now you want to freeze the value means you do not want any change in variable
// first you write something then write freeze then change something you see it print 1st one

jsUser.email = "pranav@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "pranav@ibm.com"
// console.log(jsUser["email"]);


// creating a function inside of object 
// this is used to access the object variables inside backtits `
// check what it prints

jsUser.greeting = function () {
    console.log(`hello,${this.name}`);
    
}
console.log(jsUser.greeting());









