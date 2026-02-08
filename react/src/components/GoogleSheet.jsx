import React from 'react'
import { useState } from 'react';

function GoogleSheet() {
 const initialMatrix=[
    ["A1","A2","A3"],
    ["B1","B2","B3"],
    ["C1","C2","C3"]
 ];
 const [cells,setCells]=useState(initialMatrix)
 function handleCellChange(e,rowId,colId){
      const value=e.target.value;
      setCells((prev)=>{
         const copied=prev.map((row)=>[...row]);
         copied[rowId][colId]=value;
         return copied;
      })
 }
 function handleAddColumn(){
     setCells((prev)=>{
        return prev.map((row)=>[...row,'0'])
     })
 }
 function handleAddRow(){
     const newRow=new Array(cells[0].length).fill("0");
       setCells((prev)=>[...prev,newRow])
 }

  return (
    <div>
        {cells?.map((row,index)=>{
           return <div key={index} style={{
              display:"flex",
              flexDirection:'row'
           }}>
            {row?.map((col,ind)=>{
                return <input
                key={`${index}-${ind}`}
                value={col}
                style={{
                    padding:'0.75rem'
                }}
                onChange={(e)=>handleCellChange(e,index,ind)}
                />
            })}
           </div>
        })}
        <div style={{
            margin:"1rem"
        }}>
            <button onClick={handleAddRow}>Add Row</button>
            <button onClick={handleAddColumn}>Add Column</button>
        </div>
    </div>
  )
}

export default GoogleSheet