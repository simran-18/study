const Checkbox = ({ data, updateTree }) => {
  const updateCheckboxTree = (nodes, nodeId, callback) => {
    return nodes.map((node) => {
      if (node.id === nodeId) {
        return callback(node);
      }

      if (node.children?.length) {
        const updatedChildren = updateCheckboxTree(node.children, nodeId, callback);
        const allChecked = updatedChildren.every(child => child.checked);

        return {
          ...node,
          children: updatedChildren,
          checked: allChecked
        };
      }

      return node;
    });
  }; 

  function handleCheck(){
    updateTree((prev)=>
        updateCheckboxTree(prev,data.id,(checkboxData)=>({
            ...checkboxData,
            checked:!checkboxData.checked
        })))
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: "1rem",
        }}
      >
        <input type="checkbox" checked={data.checked} onChange={handleCheck}/>
        <p>{data.name}</p>
      </div>
      <div
        style={{
          paddingLeft: "1.5rem",
        }}
      >
        {data?.children?.map((child) => {
          return (
            <Checkbox key={child.id} data={child} updateTree={updateTree} />
          );
        })}
      </div>
    </>
  );
};

export default Checkbox;
