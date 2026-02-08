import React from "react";

function Interest({ data = {}, setData = () => {},errors={} }) {
  const { interests = [] } = data;

  const interestOptions = ["Coding", "Music", "Sports", "Travel", "Reading"];

  function handleCheckboxChange(e) {
    const { value, checked } = e.target;
    console.log(e, value, checked);
    setData((prev) => ({
      ...prev,
      interests: checked
        ? [...(prev.interests || []), value]
        : prev.interests.filter((interest) => interest !== value),
    }));
  }

  return (
    <div className="form-content">
      <h2 className="form-title">Interests</h2>

      <div className="checkbox-group">
        {interestOptions.map((option) => (
          <label key={option} className="checkbox-item">
            <input
              type="checkbox"
              value={option}
              checked={interests.includes(option)}
              onChange={handleCheckboxChange}
            />
            {option}
          </label>
        ))}
      </div>
      {errors?.interests && <span className='error'>{errors?.interests}</span>}
    </div>
  );
}

export default Interest;
