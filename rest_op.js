//rest mein it combines (...varname)


function addNumbers(a,b,c,...other){
    // console.log(other)
    return a+b+c;
}

const res = addNumbers(2,5,6 ,8 ,9 ,10,11,12)
// console.log(res)




//Object ke Sath - > rest

var students = {
    name :"Udit",
    age : "24" ,
    hobbies : ["Football","Volleyball"]
}

// const age = students.age

//Array DESTRUCTURING
// const {age,name} = students;
const {age,...rest} = students;

console.log(rest)


