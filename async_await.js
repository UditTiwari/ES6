const datas = [
    {name : "Ajay" , Profression : "SDE-1"},
    {name : "Prachi" , Profression : "SDE"}
]


function getDatas(){
    setTimeout(() => {
        let output = "";
        datas.forEach((data,index) => {
            output += `<li>${data.name}</li>`;
        })
        document.body.innerHTML = output
    },5000);

}


function createdata(newdata){

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            datas.push(newdata)
            let error = false ;
            if(!error){
                resolve();
            }else {
                reject("kch shi nhi hai");
            }
        },2000);

    })
    

}


//Async and await

 async  function start(){
    await createdata({name:"jojo by async and await",Profression : "SDE-1"}) 
    getDatas();
}

start()