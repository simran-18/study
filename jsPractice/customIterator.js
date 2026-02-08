
function helper(arr){
    let count=0;
    return {
       next(){
          if(count>=arr.length){
            return null
          }
          return arr[count++];
       },
       done(){
          return count>=arr.length?true:false
       }
    }
}

let iterator=helper([1,2,'hello'])
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.done())
console.log(iterator.next())
console.log(iterator.done())
console.log(iterator.next())