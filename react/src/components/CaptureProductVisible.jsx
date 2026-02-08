import { useRef } from "react";
import { useState ,useEffect} from "react";


const CaptureProductVisible = () => {
  const [seenItems,setSeenItems]=useState([]);
  const seenItemsRef=useRef(new Set());

  useEffect(()=>{
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          seenItemsRef.current.add(entry.target.textContent);
          setSeenItems(Array.from(seenItemsRef.current));
        }
      })
    },{
      root:null,
      rootMargin:'0px',
      threshold:0.1
    })
    const products=document.querySelectorAll(".item");
    products.forEach((el)=>observer.observe(el));

    return ()=>{
       observer.disconnect();
    }
  },[]);
  console.log(seenItems);
  
  return (
    <div id="wrapper">
      <div id="1" className="item">
        Product 1
      </div>
      <div id="2" className="item">
        Product 2
      </div>
      <div id="3" className="item">
        Product 3
      </div>
      <div id="4" className="item">
        Product 4
      </div>
      <div id="5" className="item">
        Product 5
      </div>
      <div id="6" className="item">
        Product 6
      </div>
      <div id="7" className="item">
        Product 7
      </div>
      <div id="8" className="item">
        Product 8
      </div>
      <div id="9" className="item">
        Product 9
      </div>
      <div id="10" className="item">
        Product 10
      </div>
      <div id="11" className="item">
        Product 11
      </div>
      <div id="12" className="item">
        Product 12
      </div>
      <div id="13" className="item">
        Product 13
      </div>
    </div>
  );
};

export default CaptureProductVisible;
