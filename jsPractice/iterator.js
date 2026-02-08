function helper(arr)
{
   let index=0;
   return {
      next(){
        if(index<arr.length){
        return arr[index++];
        }else {
            return null;
        }
      },
      done(){
        return index>=arr.length;
      }
   }

}

const iterator=helper([1,2,'hello'])
console.log(iterator.next());
console.log(iterator.next())
console.log(iterator.done())
console.log(iterator.next())
console.log(iterator.done())
console.log(iterator.next())
