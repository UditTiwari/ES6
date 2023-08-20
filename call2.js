//APPLY ,CALL & bIND IN JS

let userDeatils = {
    name : "Udit Tiwari",
    Age : 24 ,
    Designation : "Software Engineer",
     
}

//fuction outside the object
let printDetails = function(state){
    console.log(this.name+" " +state)
}


printDetails.call(userDeatils,"Indore");


let userDeatils2 = {
    name : "Someone new",
    Age : 25 ,
    Designation : "Software Engineer",
    
}

//CALL()
printDetails.call(userDeatils2,"Raipur")