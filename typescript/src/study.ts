type POST={
    id:number | string ,
    title:string,
    description:string,
    details:'new' | 'old'
};
const post:POST={
    id:1,
    title:"React.js",
    description:"React.js Hooks",
    details: 'new'
};
console.log(post);

function calculateSum(a:number,b:number):number{
  return a+b;
}
console.log(calculateSum(5,6))

function print(input: string | number): void {
  if (typeof input === 'number') {
    console.log(input * 2)
  } else {
    console.log(input + input)
  }
}

print(10)        // 20
print("HELLO!!") // HELLO!!HELLO!!



let name:unknown='Simran';
if(typeof name==="string")
{
console.log(name+ " Kaur")
}
// console.log(name*10)