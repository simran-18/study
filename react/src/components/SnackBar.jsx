// import { useState } from "react";
// import SingleSnackBar from "./SingleSnackBar";

// //   const typeStyles = {
// //     success: {
// //       background: "#2e7d32",
// //       borderColor: "#66bb6a",
// //     },
// //     error: {
// //       background: "#c62828",
// //       borderColor: "#ef5350",
// //     },
// //     warning: {
// //       background: "#ed6c02",
// //       borderColor: "#ffb74d",
// //     },
// //     info: {
// //       background: "#0277bd",
// //       borderColor: "#4fc3f7",
// //     },
// //   };

// //   const styles = typeStyles?.[type];
// //   function handleCloseClick() {
// //     onClose(id);
// //   }
// //   useEffect(() => {
// //     let timer = setTimeout(() => {
// //       onClose(id);
// //     }, 2000);
// //     return () => clearTimeout(timer);
// //   }, [id]);
// //   return (
// //     <div
// //       style={{
// //         position: "fixed",
// //         top: `${20 + index * 60}px`,
// //         right: "20px",
// //         maxHeight: "50px",
// //         color: "white",
// //         padding: "0.5rem",
// //         borderRadius: "1rem",
// //         backgroundColor: `${styles.background}`,
// //         border: `1px solid ${styles?.borderColor}`,
// //       }}
// //     >
// //       {message?.toUpperCase()}
// //       <button onClick={handleCloseClick} style={{ marginLeft: "1rem" }}>
// //         X
// //       </button>
// //     </div>
// //   );
// // };
// function SnackBar() {
//   const [snackBar, setSnackBar] = useState([]);
//   const types = ["success", "error", "warning", "info"];
//   const addSnackBar = () => {
//     const randomNumber = Math.floor(Math.random() * 4);
//     const newSnackbar = {
//       id: Date.now(),
//       message: `Hello ${Date.now()}`,
//       type: types[randomNumber],
//     };
//     setSnackBar((prev) => {
//       return [newSnackbar, ...prev];
//     });
//   };
//   const removeSnackBar = (id) => {
//     const filtered = snackBar.filter((e) => e.id !== id);
//     setSnackBar(filtered);
//   };
//   return (
//     <div>
//       <button onClick={addSnackBar}>Add Snackbar</button>
//       {snackBar?.map((data, index) => {
//         return (
//           <SingleSnackBar
//             key={data.id}
//             {...data}
//             addSnackBar={addSnackBar}
//             onClose={removeSnackBar}
//             index={index}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default SnackBar;

import { useSnackbar } from '../contexts/SnackbarContext'

function SnackBar() {
 const {addSnackBar}=useSnackbar();
 
  return (
    <div>
         <button onClick={addSnackBar}>Add Snackbar</button>
    </div>
  )
}

export default SnackBar