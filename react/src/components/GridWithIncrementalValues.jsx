import React from "react";
import { useState } from "react";

function GridWithIncrementalValues() {
  const [grid, setGrid] = useState([]);
  const [size, setSize] = useState("");
   function createGrid() {
    const n = Number(size);
    if (!n || n <= 0) return;

    const newGrid = Array.from({ length: n }, () =>
      Array(n).fill(null)
    );

    setGrid(newGrid);
  }
  function handleClick(rid,cid){
    setGrid((prev)=>{
        const flat=prev.flat().filter(n=>n!==null);
        const max=flat.length?Math.max(...flat):0;
        const copied=prev.map((row)=>[...row]);
        if(copied[rid][cid]===null){
            copied[rid][cid]=max+1;
        }else{
             copied[rid][cid]=max;
        }
        return copied;
    })
  }
  return (
    <div>
      <div>
        <input
          value={size}
          onChange={(e) => setSize(e.target.value)}
          type="number"
          placeholder="Enter grid size"
          style={{ padding: "0.75rem", margin: "0.75rem" }}
        />
        <button onClick={createGrid}>Show</button>
      </div>
      {grid.length>0 &&
      <div style={{
            display: "grid",
            gridTemplateColumns: `repeat(${grid.length}, 60px)`,
          }}>
        {grid.map((row,rowId)=>
         row.map((cell,colId)=>{ return <div
                key={`${rowId}-${colId}`}
                onClick={() => handleClick(rowId, colId)}
                style={{
                  width: 60,
                  height: 60,
                  border: "1px solid black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {cell}
              </div>
         })
        )}
      </div>}
    </div>
  );
}

export default GridWithIncrementalValues;
