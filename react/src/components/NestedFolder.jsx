import { useState } from "react";
import SingleFolder from "./SingleFolder";

function NestedFolder() {
  const [tree, setTree] = useState([
    {
      id: 1,
      name: "Root",
      isFolder: true,
      children: [
        {
          id: 2,
          name: "src",
          isFolder: true,
          children: [
            { id: 3, name: "index.js", isFolder: false },
            { id: 4, name: "App.js", isFolder: false }
          ]
        },
        {
          id: 5,
          name: "public",
          isFolder: true,
          children: [{ id: 6, name: "index.html", isFolder: false }]
        }
      ]
    }
  ]);

  return (
    <div>
      {tree.map(node => (
        <SingleFolder
          key={node.id}
          data={node}
          tree={tree}
          setTree={setTree}
        />
      ))}
    </div>
  );
}

export default NestedFolder;
