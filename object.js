// Objects in JavaScript can be declare in two way s
// 1. Singleton Objects 
// 2. Object literals

// Singleton objects

const obj = new Object()

// console.log(typeof obj);

obj.id = 1
obj.name="Alison"
obj.email="hello@gmail.com"




// destructure of object

const {name:n} = obj
console.log(n);
console.log(obj);

const ob1 = {a:2, b:2}
const ob2 = {c:2, d:2}
const ob3 = {e:2, f:2}

console.log(Object.assign(ob1, ob2, ob3));



function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))
