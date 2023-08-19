//Async JS
//Callbacks ,Promisis ,Async and await


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


/* function createdata(newdata){
    setTimeout(() => {
        datas.push(newdata)
    },2000);

}

createdata({name:"jojo",Profression : "SDE-1"}) */


//Solution one is Callback

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

createdata({name:"jojo by promises",Profression : "SDE-1"}).then(getDatas).catch(err => console.log(err))




getDatas();