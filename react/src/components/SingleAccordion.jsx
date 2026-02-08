import React, { useState } from "react";

const SingleAccordion = ({ data, updateTree }) => {
  const [isOpen, setIsOpen] = useState(null);

  function handleToggle() {
    setIsOpen((prev) => (prev === data.id ? null : data.id));
  }

  return (
    <div style={{ paddingLeft: "1rem" }}>
      <div
        onClick={handleToggle}
        style={{
          cursor: "pointer",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        {data.children?.length > 0 && (isOpen === data.id ? "▼" : "▶")}
        {data.title}
      </div>

      {isOpen === data.id && (
        <>
          <h3 style={{ paddingLeft: "1rem" }}>Answer : {data.content}</h3>
          <div style={{ paddingLeft: "1rem" }}>
            {data?.children?.map((child) => (
              <SingleAccordion
                key={child.id}
                data={child}
                updateTree={updateTree}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SingleAccordion;
