//  1.

const myarray = [100,200,300,400] 

function returnSecondValue(getMyarray) {
    return getMyarray[1];
}

console.log(returnSecondValue(myarray));

//  local scope and global scope 

// let a = 100                                    GLOBAL SCOPE
if(true) {
    // let a = 10                                 LOCAL SCOPE
    const b = 60      
    console.log("inner a : ",a); 
}
console.log("outer a : ",a);
