//APPLY  JS

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

//Apply()
printDetails.call(userDeatils2,"Raipur","Call()")

//Apply()
printDetails.apply(userDeatils2,["Raipur","India"])