// const obj={
//     a:10
// }
// let x=10;
// function random(obj){
//     obj.a=20;
// }
// function random1(x){
//     x=20;
// }
// random(obj);
// random(x);
// console.log(obj.a)
// console.log(x)

function deepFreeze(obj){
    for(let key in obj){
        let value=obj[key];
        if(typeof value==='object' && value !==null){
            deepFreeze(value)
        }
    }
    return Object.freeze(obj)
}
const obj3 = {
  a: 10,
  user: { age: 20 }
};

deepFreeze(obj3);
obj3.user.age = 50; // ❌ now blocked
console.log(obj3)

// obj3.user.age=40;
// console.log(obj3)