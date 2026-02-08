import { createContext, useContext } from "react";
import SingleSnackBar from "../components/SingleSnackBar";
import { useState } from "react";

const SnackBarContext = createContext(null);

export const SnackBarProvider = ({ children }) => {
  const [snackBar, setSnackBar] = useState([]);
  const types = ["success", "error", "warning", "info"];
  const addSnackBar = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    const newSnackbar = {
      id: Date.now(),
      message: `Hello ${Date.now()}`,
      type: types[randomNumber],
    };
    setSnackBar((prev) => {
      return [newSnackbar, ...prev];
    });
  };
  const removeSnackBar = (id) => {
    const filtered = snackBar.filter((e) => e.id !== id);
    setSnackBar(filtered);
  };
  return (
    <SnackBarContext.Provider value={{ addSnackBar, removeSnackBar }}>
      {children}
      {snackBar?.map((data, index) => {
        return (
          <SingleSnackBar
            key={data.id}
            {...data}
            addSnackBar={addSnackBar}
            onClose={removeSnackBar}
            index={index}
          />
        );
      })}
    </SnackBarContext.Provider>
  );
};
export const useSnackbar=()=>{
    return  useContext(SnackBarContext);
};
