const input = document.getElementById("search");
const suggestionArea = document.getElementById("suggestion-area");
let controller;

const suggestions = [
  "React",
  "Redux",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Next.js",
];
function debounce(fn,delay)
{
  let timer;
  return function(args)
  {
    clearTimeout(timer);
   timer = setTimeout(()=>
    {
       fn.apply(this,args)
    },delay)
  }
}
function mockApiCall(searchQuery) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.3; // 30% failure

      if (shouldFail) {
        reject("API Error: Something went wrong");
      } else {
         const filteredItems = suggestions.filter(item =>
       item.toLowerCase().includes(searchQuery)
      );
        resolve(filteredItems);
      }
    }, 1000);
  });
}

const handleChange =async (e) => {
  const query = e.target.value.toLowerCase();
  suggestionArea.innerHTML = "";
  if (!query) {
    suggestionArea.style.display = "none";
    return;
}
if (controller) controller.abort();
  controller = new AbortController();
 const filteredItems= await mockApiCall(query,controller.signal)
  if (filteredItems.length === 0) {
    suggestionArea.style.display = "none";
    return;}
  const ul = document.createElement("ul");
  filteredItems?.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    li.style.cursor="pointer"
    ul.appendChild(li);
  });

  suggestionArea.appendChild(ul);
  suggestionArea.style.display = "block";
};

const onBlur = (e) => {
  if (
    e.target === input ||
    suggestionArea.contains(e.target)
  ) {
    return;
  }
  suggestionArea.style.display = "none";
};
const onListClick=(e)=>
{
    if(e.target===suggestionArea) return ;
    const text=e.target.innerText;
    input.value=text;
    input.focus();
    suggestionArea.style.display = "none";
        
}
const debouncedHandleChange = debounce(handleChange, 400);
input.addEventListener("input", debouncedHandleChange);
window.addEventListener("click", onBlur);
suggestionArea.addEventListener('click',onListClick);


let total = 0;

function updateTotal(value = total + 1) {
    console.log(value);
}

updateTotal();

// const obj = {
//   x: 10,
//   fn:function() {
//     const name=()=>
//     {
//       return this.x;
//     }
//     return name()
//   }
// };

// const fn = obj.fn();
// console.log(fn);

// const obj1 = {
//   x: 10,
//   getX() {
//     return this.x;
//   }
// };

// const fn1 = obj1.getX.bind(obj);
// console.log(fn1());

// // var a=10;
// let b=20;
// var a;
// let c=40;
// {
//    var a=20;
//    console.log("1",a)
//   //  let d=20;
// }
// // name()
// console.log("2",a)