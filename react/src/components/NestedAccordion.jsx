import React, { useState } from "react";
import SingleAccordion from "./SingleAccordion";

const NestedAccordion = () => {
    const [isOpen, setIsOpen] = useState(null);
    
      function handleToggle(id) {
        setIsOpen((prev) => (prev === id ? null : id));
      }
  const accordionData = [
    {
      id: 1,
      title: "Frontend",
      content: "Frontend topics",
      children: [
        {
          id: 2,
          title: "React",
          content: "React details",
          children: [
            { id: 3, title: "Hooks", content: "useState, useEffect" },
            { id: 4, title: "Performance", content: "Memo, useCallback" },
          ],
        },
        { id: 5, title: "CSS", content: "Flexbox, Grid" },
      ],
    },
    {
      id: 6,
      title: "Backend",
      content: "Backend topics",
      children: [{ id: 7, title: "Node", content: "Express, APIs" }],
    },
  ];
  const [accordions, setAccordions] = useState(accordionData);
  return (
    <div>
      {accordions.map((accordion) => {
        return (
          <SingleAccordion
            key={accordion.id}
            data={accordion}
            updateTree={setAccordions}
          />
        );
      })}
    </div>
  );
};

export default NestedAccordion;
