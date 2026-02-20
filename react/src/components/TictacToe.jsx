import { useState } from "react";

const initialBoard = () => new Array(9).fill(null);
function TictacToe() {
  const [board, setBoard] = useState(initialBoard());
  const [isXNext, setIsXNext] = useState(true);

  const winningPatterns=[
    // row
    [0,1,2],
    [3,4,5],
    [6,7,8],
    // column
    [0,3,6],
    [1,4,7],
    [2,5,8],
    // diagonal
    [0,4,8],
    [2,4,6]
  ]
  function resetGame() {
    setBoard(initialBoard());
    setIsXNext(true);
  }
  function calculateWinner(currentBoard){
     for(let i=0;i<winningPatterns.length;i++){
       const [a,b,c]=winningPatterns[i];
       if(currentBoard[a] && currentBoard[a]===currentBoard[b] && currentBoard[a]===currentBoard[c])
       {
         return currentBoard[a]
       }
    }
    return null;
  }
  function handleCellClick(index) {
    const winner=calculateWinner(board)
    if (winner || board[index]) return;
    const newBaord = [...board];
    newBaord[index] = isXNext ? "X" : "O";
    setBoard(newBaord);
    setIsXNext(!isXNext);
  }
  const getStatusMessage=()=>{
    const winner=calculateWinner(board);
    const isDraw=!winner && board.every((cell)=>cell !==null);
    if(winner) return `Player ${winner} wins`;
    if(isDraw) return "It is draw";
    return `Player ${isXNext ? "X" : "O"} Turn`;
  }
  return (
    <div>
      <div>
        <h3>{getStatusMessage()}</h3>
        <button onClick={resetGame}>Reset Games</button>
      </div>
      <div
        style={{
          marginTop: "1rem",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
        }}
      >
        {board.map((cell, index) => {
          return (
            <button
              key={index}
              style={{
                backgroundColor: "gray",
                padding: "1rem",
                height: "3rem",
              }}
              onClick={() => handleCellClick(index)}
            >
              {cell}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TictacToe;
