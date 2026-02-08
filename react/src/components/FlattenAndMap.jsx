import { useEffect, useState } from "react";

const ShowData = ({ data }) => {
  return (
    <div
      style={{
        paddingLeft: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "1rem",
        }}
      >
        -{data.name}
      </h1>
      {data.children?.map((child) => {
        return <ShowData key={child.id} data={child} />;
      })}
    </div>
  );
};
function FlattenAndMap() {
  const [tree, setTree] = useState([]);
  const data = [
    { id: 1, name: "Parent 1", parentId: null },
    { id: 2, name: "Child 1.1", parentId: 1 },
    { id: 3, name: "Child 1.2", parentId: 1 },
    { id: 4, name: "Parent 2", parentId: null },
    { id: 5, name: "Child 2.1", parentId: 4 },
  ];
  function buildTree(data) {
    const map = {};
    const result = [];
    data?.forEach((item) => {
      map[item.id] = { ...item, children: [] };
    });
    data.forEach((item) => {
      if (item.parentId === null) {
        result.push(map[item.id]);
      } else {
        console.log("map:", map[item.id]);

        map[item.parentId].children.push(map[item.id]);
      }
    });

    return result;
  }
  useEffect(() => {
    const result = buildTree(data);
    setTree(result);
  }, []);
  return (
    <div>
      {tree?.map((data) => {
        return <ShowData key={data.id} data={data} />;
      })}
    </div>
  );
}

export default FlattenAndMap;
