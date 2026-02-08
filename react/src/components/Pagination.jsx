function Pagination({currentPage,onPageChange,totalPages}) {
  const getPageNumbers=()=>{
     const pages=[]
     const delta=1;
     let left=currentPage-delta;
     let right=currentPage+delta;
     for(let i=1;i<=totalPages;i++){
        if((i===1) || (i===totalPages) || (i>=left && i<=right)){
           pages.push(i)
        }else if(pages[pages.length-1]!=="..."){
          pages.push("...")
        }
     }
     return pages;
  }
  const generateLinks=()=>{
    return getPageNumbers()?.map((item,index)=>{
       if(item==="...")
       {
        return (
          <li key={`dots-${index}`} style={{ padding: "1rem" }}>
            ...
          </li>
        )
       }else{
        return (
          <li 
           key={item}
           onClick={()=>onPageChange(item)}
           style={{
            padding: "1rem",
            border: "1px solid gray",
            cursor: "pointer",
            backgroundColor: item === currentPage ? "green" : "transparent",
            color: item === currentPage ? "white" : "black",
            fontWeight: 700,
          }}
          >
            {item}
          </li>
        )
       }
    })
  }
  function onPrev(){
     if(currentPage>1){
      onPageChange(currentPage-1)
     }
  }
  function onNext(){
    if(currentPage<totalPages){
      onPageChange(currentPage+1)
    }
  }
  return (
    <div>
      <h2>Current Page is :: {currentPage}</h2>
      <ul style={{ listStyle: "none", display: "flex", gap: "6px" }}>
        <li onClick={onPrev}>Prev</li>
        {generateLinks()}
        <li onClick={onNext}>Next</li>
      </ul>
    </div>
  )
}

export default Pagination