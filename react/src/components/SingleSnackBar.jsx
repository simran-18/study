import { useEffect } from "react";
const SingleSnackBar = ({ message, id, onClose, index, type }) => {
  const typeStyles = {
    success: {
      background: "#2e7d32",
      borderColor: "#66bb6a",
    },
    error: {
      background: "#c62828",
      borderColor: "#ef5350",
    },
    warning: {
      background: "#ed6c02",
      borderColor: "#ffb74d",
    },
    info: {
      background: "#0277bd",
      borderColor: "#4fc3f7",
    },
  };

  const styles = typeStyles?.[type];
  function handleCloseClick() {
    onClose(id);
  }
  useEffect(() => {
    let timer = setTimeout(() => {
      onClose(id);
    }, 2000);
    return () => clearTimeout(timer);
  }, [id]);
  return (
    <div
      style={{
        position: "fixed",
        top: `${20 + index * 60}px`,
        right: "20px",
        maxHeight: "50px",
        color: "white",
        padding: "0.5rem",
        borderRadius: "1rem",
        backgroundColor: `${styles.background}`,
        border: `1px solid ${styles?.borderColor}`,
      }}
    >
      {message?.toUpperCase()}
      <button onClick={handleCloseClick} style={{ marginLeft: "1rem" }}>
        X
      </button>
    </div>
  );
};
export default SingleSnackBar;