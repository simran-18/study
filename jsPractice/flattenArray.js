// function flatten(arr)
// {
//     let result=[]
//     for(let i=0;i<arr.length;i++)
//     {
//         if(Array.isArray(arr[i]))
//         {
//            result.push(...flatten(arr[i]))
//         }
//         else{
//             result.push(arr[i])
//         }
//     }
//   return result;
// }

function flatten(nums)
{
    return nums.reduce((acc,curr)=>acc.concat(Array.isArray(curr)?flatten(curr):curr),[])
}

const arr=[1,2,4,54,[3,45,5,[4,7,[5,6]]]];
console.log("inbuilt method",arr.flat(Infinity))
console.log(flatten(arr))