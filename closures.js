//Closures- a and b ki value retain rhegi lost nhi hogi isko hi closures bolte hai


var sum = function (a){
console.log("current num" + a);

var c =4 ; //lexical scope

return function (b){
    return a+b+c
}

}

var store = sum(200);
console.log(store(5))
