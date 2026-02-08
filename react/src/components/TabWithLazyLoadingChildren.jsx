import {Suspense, useState} from "react";
const Users = () => {
  console.log("Users mounted");
  return <h2>Users Data Loaded</h2>;
};

const Orders = () => {
  console.log("Orders mounted");
  return <h2>Orders Data Loaded</h2>;
};

const Reports = () => {
  console.log("Reports mounted");
  return <h2>Reports Data Loaded</h2>;
};

function TabWithLazyLoadingChildren() {
    const tabData = [
      {
        label: "Users",
        component: Users},
      {
        label: "Orders",
        component: Orders}
        ,
        {label: "Reports",
        component: Reports}
    ];
  const [activeTab, setActiveTab] = useState(tabData?.[0]?.label || "");
  function handleTabClick(index) {
    setActiveTab(index);
  }
  console.log("index",activeTab)
  return (
    <div>
      <div>
        {tabData?.map((tab, index) => {
          return (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              style={{
                padding: "10px",
                border: "none",
                borderBottom: activeTab === index ? "3px solid blue" : "none",
                background: "none",
                cursor: "pointer",
                fontWeight: activeTab === index ? "bold" : "normal",
              }}
            >
              {tab.label}
            </button>
          );
        })}
        <div style={{paddingTop:"20px"}}>
            {tabData?.map((tab,index)=>{
                if(index===activeTab){
                    const Component=tab.component;
                    return <Suspense fallback={<div>Loading...</div>}><Component/></Suspense>
                }
                else{
                    return null;
                }
            })}
        </div>
      </div>
    </div>
  );
}

export default TabWithLazyLoadingChildren;
