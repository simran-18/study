import React from 'react'

function Profile({ data = {} ,setData=()=>{},errors={}}) {
  const { name = "", email = "", age = "" } = data;
  function handleDataChange(e){
    console.log("e:",e.target)
    setData((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
    }))
  }
  console.log(errors);
  
  return (
    <div className='form-content'>
      <h2>Profile</h2>
      <input name="name" placeholder="Name" value={name} onChange={handleDataChange} />
      {errors?.name && <span className='error'>{errors?.name}</span>}
      <input name="email" placeholder="Email" type="email" value={email} onChange={handleDataChange} />
      {errors?.email && <span className='error'>{errors?.email}</span>}
      <input name="age" placeholder="Age" type="number" value={age} onChange={handleDataChange} />
      {errors?.age && <span className='error'>{errors?.age}</span>}
    </div>
  );
}


export default Profile