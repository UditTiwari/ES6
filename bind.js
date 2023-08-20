//Bind js -> aap direct fucntion call mt kro aap copy banalo then jb need lage call krlo

let userDeatils = {
    name : "Udit Tiwari",
    Age : 24 ,
    Designation : "Software Engineer",
     
}

//fuction outside the object
let printDetails = function(state ,country){
    console.log(this.name+" " +state +" "+country)
}


printDetails.apply(userDeatils,["Indore","India"]);


let userDeatils2 = {
    name : "Someone new",
    Age : 25 ,
    Designation : "Software Engineer",
    
}

//call()
printDetails.call(userDeatils2,"Raipur","Call()")

//Apply()
printDetails.apply(userDeatils2,["Raipur","India"])

//Bind - copy aapne store krli hai and invoke later
let newfun = printDetails.bind(userDeatils2,"bind","bind()")
console.log(newfun())