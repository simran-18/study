const input =document.getElementById('search');
const suggestionArea = document.getElementById("suggestion-area");
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

function getSuggestions(query = "") {
  query = query.trim().toLowerCase();
  if (!query) return [];

  return suggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(query)
  );
}
function debounce(fn, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

input.addEventListener("input", debounce(handleChange, 300));


function handleChange(e){
   const value=e.target.value;
   const result = getSuggestions(value);
   suggestionArea.innerHTML = "";
   console.log(result,value)
   if (!result.length) return;
   else{
    const ul=document.createElement('ul');
    result?.forEach((item)=>{
       const li=document.createElement('li');
       li.innerText=item;
       li.style.cursor='pointer';
       ul.appendChild(li)
    })
    suggestionArea.appendChild(ul);
    suggestionArea.style.display = "block";
   }
}
function onListClick(e)
{
    const value=e.target.textContent;
    if(value===input.textContent){
        return ;
    }
    input.value=value;
    input.focus();
    suggestionArea.style.display = "none";
}
function onBlur(e)
{
    console.log(e.target,suggestionArea)
    if(e.target===input || e.target===suggestionArea.contains(e.target)){
       return ;
    }
   suggestionArea.style.display = "none";
}
input.addEventListener("input", debounce(handleChange,300));
suggestionArea.addEventListener('click',onListClick)
window.addEventListener('click',onBlur)