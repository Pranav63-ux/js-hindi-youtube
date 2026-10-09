// we use . for accessing the element of the objects
// the another method is called de structure

const course = {
    course_name : "javascript",
    course_price : "999",
    course_teacher : "hitesh"
}

const {course_name} = course 
//     object member   object name


console.log(course_name);

// now if you want doon't like to write large name so you use short name also by asigning them
const {course_name : name } = course 
//                   aapdi ritna laikhu motu course_name lakhva karta khali name
console.log(name);
