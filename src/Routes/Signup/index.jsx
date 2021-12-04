import { useState } from "react"
import InputField from "../../Components/InputField";
import "./style.css"
const SignUp = () => {
    const [formData,setFormData] = useState({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:""
    });
    // console.log(formData);
    const {fullName, email, password, confirmPassword} = formData;
    const onChange = (key,value)=>{
        setFormData({
            ...formData,
            [key]:value  
        })
    }
    return (
        <div className="container">
            <div className="sub-container">
            <h1>Sign Up</h1>
            <form>
                <InputField
                    value={fullName}
                    onChange={(value) => onChange("fullName",value)}
                    label= "Full Name"
                />
                <InputField
                    value={email}
                    onChange={(value) => onChange("email",value)}
                    label= "Email"
                />
                <InputField
                    value={password}
                    onChange={(value) => onChange("password",value)}
                    label= "Password"
                />
                <InputField
                    value={confirmPassword}
                    onChange={(value) => onChange("confirmPassword",value)}
                    label= "Confirm Password"
                />
                <button>Sign Up</button>
            </form>
            </div>
        </div>
    )
}

export default SignUp
