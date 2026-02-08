function hexToRgb(hex)
{
   hex=hex.replace("#","")
   if(hex.length===3)
   {
   hex =
      hex[0] + hex[0] +
      hex[1] + hex[1] +
      hex[2] + hex[2];
   }
   const a=parseInt(hex.slice(0,2),16)
   const b=parseInt(hex.slice(2,4),16)
   const c=parseInt(hex.slice(4,6),16)
   return {a,b,c};
}

console.log(hexToRgb("#FF5733"));
console.log(hexToRgb("#FFF"))
