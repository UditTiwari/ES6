//APPLY ,CALL & bIND IN JS

let userDeatils = {
    name : "Udit Tiwari",
    Age : 28 ,
    Designation : "Software Engineer",
    printDetails :function(){
        console.log(this) //this is pointing to this object ->userDeatils(agr aap object ke andr ho aap direct acess nhi kr skte property this keyword use krna pdega)
    }
}


userDeatils.printDetails();