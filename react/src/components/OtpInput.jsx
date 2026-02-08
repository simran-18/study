import { useEffect } from 'react';
import { useRef ,useState} from 'react'

const OtpInput = () => {
  const [otp,setOtp]=useState(["","","",""])
  const inputRefs=useRef([]);
  useEffect(()=>{
    if(inputRefs.current){
        inputRefs.current[0].focus()
    }
  },[])
  function handleChange(e,index){
    const value=e.target.value?.trim()
    if (!/^\d?$/.test(value)) return;
    const numbers=[...otp]
    numbers[index]=value
    setOtp(numbers);
    if(value && index<otp.length-1){
        inputRefs.current[index+1]?.focus()
    }
  }
  function handleKeyDown(e,index){
     if(e.key==="Backspace")
     {
        if(otp[index]==="" && index>0 ){     
             inputRefs.current[index-1].focus()
        }
     }
  }
  return (
    <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:"center"
        }}>
        <h1>OtpInput</h1>
        <div style={{
            display:'flex',
            flexDirection:'row',
        }}>
            {otp.map((digit,index)=>{
                return <input
                 style={{
                     width:"2rem",
                     height:'2rem',
                     textAlign:'center'
                 }}
                 key={index}
                 value={digit}
                 type="text"
                 maxLength="1"
                 ref={el=>inputRefs.current[index]=el}
                 onChange={(e)=>handleChange(e,index)}
                 onKeyDown={(e)=>handleKeyDown(e,index)}
                />
            })}
        </div>
    </div>
  )
}

export default OtpInput