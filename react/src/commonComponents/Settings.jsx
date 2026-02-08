import React from "react";

function Settings({ data = {}, setData = () => {} }) {
  const { theme } = data;
  function handleDataChange(e) {
    setData((prev) => ({
      ...prev,
      theme: e.target.name,
    }));
  }
  return (
    <div className="form-content">
      <h2>Settings</h2>
      <label>
        <input
          name="light"
          type="radio"
          checked={theme === "light"}
          onChange={handleDataChange}
        />
        Light
      </label>
      <label>
        <input
          name="dark"
          type="radio"
          checked={theme === "dark"}
          onChange={handleDataChange}
        />
        Dark
      </label>
    </div>
  );
}

export default Settings;
