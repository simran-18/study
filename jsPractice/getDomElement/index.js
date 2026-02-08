const getComputedColor=(colorCode)=>{
    const element=document.createElement("div")
    element.style.color= colorCode;
    document.body.appendChild(element)

    const computedStyels=window.getComputedStyle(element);
    const {color}=computedStyels;
    document.body.removeChild(element);
    return color;
}
const getMatchingElement=(root,colorCode)=>{
    const targetColor=getComputedColor(colorCode);
    const result=[];
    
    const search=(root)=>{
      const elements=Array.from(root.children)
      elements.forEach((element)=>{
        const computedColor=getComputedColor(element.style.color)
        console.log(computedColor);   
        if(targetColor===computedColor){
            result.push(element)
        }
      })
    }
    search(root);
    return result;
}

const matchedElements = getMatchingElement(
  document.getElementById("root"),
  "red"
);

console.log(matchedElements);

function lengthLongestPath(input="dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext") {
  const lines = input.split("\n");
  const stack = []; // store cumulative length at each depth
  let maxLen = 0;

  for (let line of lines) {
    const depth = line.lastIndexOf("\t") + 1; // number of \t
    const name = line.slice(depth); // remove leading \t

    while (stack.length > depth) {
      stack.pop(); // pop until we reach parent
    }

    // cumulative length: parent + "/" + current
    const parentLen = stack.length > 0 ? stack[stack.length - 1] : 0;
    const currLen = parentLen + name.length + (stack.length > 0 ? 1 : 0); // +1 for "/"

    if (name.includes(".")) {
      // it's a file
      maxLen = Math.max(maxLen, currLen);
    } else {
      // directory, push cumulative length
      stack.push(currLen);
    }
  }

  return maxLen;
}
