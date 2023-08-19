//It break the array

var names = ["udit","lal","ravi"]



function getNames(name1,name2,name3){
console.log(name1,name2,name3)

}

// getNames(names[0],names[1],names[2])

//using spread opoerator the above thing can be done eaily

getNames(...names)


var students = {
    name :"Udit",
    age : "24" ,
    hobbies : ["Football","Volleyball"]
}



var newStudent = {
    ...students,
    age :"25"

}

console.log(newStudent)