//APPLY ,CALL & bIND IN JS

let userDeatils = {
    name : "Udit Tiwari",
    Age : 24 ,
    Designation : "Software Engineer",
     //fuction inside object
    printDetails :function(){
        console.log(this.name) //this is pointing to this object ->userDeatils(agr aap object ke andr ho aap direct acess nhi kr skte property this keyword use krna pdega)
    }
}


userDeatils.printDetails();


let userDeatils2 = {
    name : "Someone new",
    Age : 25 ,
    Designation : "Software Engineer",
    
}

//CALL()
userDeatils.printDetails.call(userDeatils2)