import { useState } from "react";

const SingleFolder = ({ data, tree, setTree }) => {
const [editText,setEditText]=useState(data?.name);
const [isEditing, setIsEditing] = useState(false);
  const updateFolderTree=(folders,folderId,callback)=>{
     return folders?.map((folder)=>{
          if(folderId===folder.id){
             return callback(folder)
          }
          if(folder?.children && folder.children.length>0){
             return {
                ...folder,
                children:updateFolderTree(folder.children,folderId,callback)
             }
          }
         return folder;
     })
  }
  function deleteNodeTree(folders,folderId){
      return folders?.filter((folder)=>folder.id!==folderId)?.map((child)=>({
        ...child,
        children:deleteNodeTree(child.children,folderId)
      }))
  }
  function handleDelete(){
    setTree((prev)=>deleteNodeTree(prev,data.id))
  }
 const handleAdd = (type) => {
  const name = type === "folder" ? "New Folder" : "NewFile.js";

  const newNode = {
    id: Date.now(),
    name,
    isFolder: type === "folder",
    children: type === "folder" ? [] : undefined,
  };

  setTree((prev) =>
    updateFolderTree(prev, data.id, (folder) => ({
      ...folder,
      children: [...(folder.children || []), newNode],
    }))
  );
};
function handleEdit(){
   if (!editText.trim()) return;
   setTree((prev)=>{
      return updateFolderTree(prev,data.id,(folder)=>({
        ...folder,
        name:editText
      }))
   })
   setIsEditing(false)
}
  return (
    <div style={{ paddingLeft: "15px" }}>
      <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
        {isEditing ? (
          <>
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              style={{ padding: "0.25rem", border: "1px solid red" }}
            />
            <button onClick={handleEdit}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <span>
              {data.isFolder ? "📁" : "📄"} {data.name}
            </span>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}

        {data.isFolder && !isEditing && (
          <>
            <button onClick={() => handleAdd("folder")}>+Folder</button>
            <button onClick={() => handleAdd("file")}>+File</button>
          </>
        )}
      </div>

      {data.children?.map((child) => (
        <SingleFolder
          key={child.id}
          data={child}
          tree={tree}
          setTree={setTree}
        />
      ))}
    </div>
  );
};

export default SingleFolder;
