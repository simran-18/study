const findMatch=(root,key)=>{
    if (!root) return [];
   let result=[]
  
   const search=(el)=>{
     if(el.classList?.contains(key)){
        result.push(el)
     }
     const childs=Array.from(el.children);
     childs.forEach((child)=>{
        search(child);   
     })
   }
   search(root)
   return result;
}

console.log(findMatch(document.getElementById("parent"),'box'))
