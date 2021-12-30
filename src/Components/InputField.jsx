import { useState } from "react"
const InputField = ({value,onChange,label,type="text",error,isFormSubmitted=false}) => {
    const[isBlur,setIsBlur]=useState(false);
    return (
        <div className="input-field" > 
        <input 
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => 
            setIsBlur(true)
        }
        />
        <div className={`form-label ${value? "filled-form-label" :""}`}> 
        {/* Labelname goes up  */}
        {label}
        </div> 
        {error && (isBlur ||  isFormSubmitted) &&
        <div className="text-field-error-text">{error}</div>
        }  
        </div>
    )
}

export default InputField
