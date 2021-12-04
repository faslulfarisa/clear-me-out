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
    const[formErrorData,setFormErrorData]=useState({
        fullNameError:"",
        emailError:"",
        passwordError:"",
        confirmPasswordError:""
    });
    // console.log(formData);
    const {fullName, email, password, confirmPassword} = formData;
    const {fullNameError, emailError, passwordError, confirmPasswordError} = formErrorData;
    const onChange = (key,value)=>{
        setFormData({
            ...formData,
            [key]:value  
        })
    }
    const onError =(key,value)=>{
        setFormErrorData({
            ...formErrorData,
            [key]:value
        })
    }
    const signUpcall = (e) =>{
        e.preventDefault();
        // console.log(formData);
        if(!confirmPassword){
            onError("confirmPasswordError","Confirm Your Password");
        }else{
            if(password !== confirmPassword){
                onError("confirmPasswordError","Password Miss Match")
            }
            else{
                onError("confirmPasswordError","")
            }
        }
    }
   
    return (
        <div className="container">
            <div className="sub-container">
            <h1>Sign Up</h1>
            <form onSubmit={signUpcall}>
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
                    label = "Password"
                    type = "password"
                />
                <InputField
                    value={confirmPassword}
                    onChange={(value) => onChange("confirmPassword",value)}
                    label= "Confirm Password"
                    type="password"
                    error={confirmPasswordError}
                />
                <button type="submit" className="sign-up-page-button">Sign Up</button>
            </form>
            </div>
        </div>
    )
}

export default SignUp
