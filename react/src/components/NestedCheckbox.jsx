import { useState } from "react";
import Checkbox from "./Checkbox";
function NestedCheckbox() {
  const checkboxTreeData = [
    {
      id: 1,
      name: "Frontend",
      checked: false,
      children: [
        {
          id: 2,
          name: "React",
          checked: false,
          children: [
            { id: 3, name: "Hooks", checked: false, children: [] },
            { id: 4, name: "Redux", checked: false, children: [] },
          ],
        },
        {
          id: 5,
          name: "Vue",
          checked: false,
          children: [],
        },
        {
          id: 6,
          name: "Angular",
          checked: false,
          children: [],
        },
      ],
    },
    {
      id: 7,
      name: "Backend",
      checked: false,
      children: [
        {
          id: 8,
          name: "Node.js",
          checked: false,
          children: [
            { id: 9, name: "Express", checked: false, children: [] },
            { id: 10, name: "MongoDB", checked: false, children: [] },
          ],
        },
        {
          id: 11,
          name: "Python",
          checked: false,
          children: [],
        },
      ],
    },
  ];
  const [checkboxsTree, setCheckboxesTree] = useState(checkboxTreeData);

  return (
    <div>
      {checkboxsTree?.map((item) => {
        return (
          <Checkbox key={item.id} data={item} updateTree={setCheckboxesTree} />
        );
      })}
    </div>
  );
}

export default NestedCheckbox;
