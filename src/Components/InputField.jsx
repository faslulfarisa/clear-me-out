
const InputField = ({value,onChange,label}) => {
    return (
        <div className="input-field" >
        <input 
        type="text" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        />
        <div className={`form-label ${value? "filled-form-label" :""}`}>    
            {label}
        </div>   
        </div>
    )
}

export default InputField
