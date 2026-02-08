import { useState } from "react";
import Profile from "../commonComponents/Profile";
import Interest from "../commonComponents/Interest";
import Settings from "../commonComponents/Settings";

const TabForm = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    interests: [],
    theme: "",
  });
  const tabs = [
    {
      id: 0,
      tabName: "Profile",
      component: Profile,
      validate: (data) => {
        const err = {};
        if (!data.name) err.name = "Name required";
        if (!data.email) err.email = "Email required";
        if (!data.age) err.age = "Age required";
        return err;
      },
    },
    {
      id: 1,
      tabName: "Interest",
      component: Interest,
      validate: (data) => {
        const err = {};
        if (!data.interests || data.interests.length === 0)
          err.interests = "Select at least one interest";
        return err;
      },
    },
    { id: 2, tabName: "Settings", component: Settings, validate: () => ({}) },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const [errors, setErrors] = useState({});
  const ActiveComponent = tabs[activeTab]?.component;
  function handleSubmit() {
    let allErros={};
    tabs.forEach((tab)=>{
        if(tab.validate){
            allErros={...allErros,...tab.validate(data)}
        }
    })
    if(Object.keys(allErros).length>0){
        setErrors(allErros)
        return 
    }
  console.log("FINAL FORM DATA:", data);
  }
  function handleNext(){
    const currentTab=tabs[activeTab];
    const validateErros=currentTab.validate? currentTab.validate(data):{};
    if(Object.keys(validateErros)?.length>0)
    {
        setErrors(validateErros)
        return
    }
  setErrors({});
  setActiveTab(prev => prev + 1);
  }
  function handlePrev(){
  setErrors({});
  setActiveTab(prev => prev - 1);
  }
  return (
    <div className="container">
      <div className="tab-container">
        {tabs.map((tab) => {
          return (
            <div
              key={tab.id}
              className="tab"
              onClick={() => setActiveTab(tab.id)}
            >
              {" "}
              {tab.tabName}
            </div>
          );
        })}
      </div>
      <div className="form-container">
        {ActiveComponent && (
          <ActiveComponent data={data} setData={setData} errors={errors} />
        )}
      </div>
      <div className="navigation-buttons">
        {activeTab > 0 && (
          <button onClick={handlePrev}>Back</button>
        )}

        {activeTab < tabs.length - 1 ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
