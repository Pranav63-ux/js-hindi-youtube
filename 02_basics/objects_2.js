// first create the object 

const tinderUser = {}
tinderUser.name = "pranav"
tinderUser.age=19
tinderUser.location = "bengaluru"
console.log(tinderUser);

// also we can create object inside objects (use only : instead of =)
// also we can access member by its object name regular.objectname

const regular = {
    username : {
        full_name : {
            firstName : "Pranav",
            lastname : "Patel"
        }
    }
}
console.log(regular.username.full_name);
console.log(regular.username.full_name.firstName);


// also you can merge the two or more than two object
const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj3 = {...obj1,...obj2}
console.log(obj3);


// now you want print only keys of object and values of objects
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

// to check the in object if there is key is exist or not
console.log(tinderUser.hasOwnProperty('name'));






