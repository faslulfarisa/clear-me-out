import { useState } from "react"
import InputField from "../../Components/InputField";
import "./style.css"
import {isValidEmail} from "../../Utility/validation"
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
        setFormErrorData(prev=>({
            ...prev,
            [key]:value
        }))
    }
    const signUpCall = (e) =>{ 
        e.preventDefault();
        // console.log(formData);
      
        if(!fullName){
            onError("fullNameError","Cannot be Empty");
        }else{
            if(fullName.length<=3){
            onError("fullNameError","Provide Your FullName");
            }
            else{
            onError("fullNameError","")
            }
        }
        if(!email){
            onError("emailError","Cannot be Empty")
        }
        else{
            if(!isValidEmail(email)){
            onError("emailError","Enter Valid Email");
            }else{
            onError("emailError","")
            } 
        }
        if(!password){
            onError("passwordError","Cannot be Empty");
        }else{
            if(password.length<=7){
                onError("passwordError","Provide Maximum 8 Characters");
            }
            else{
            onError("passwordError","")
            } 
        }
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
        <div className="sign-up-container">
            <h1>Sign Up</h1>
            <form onSubmit={signUpCall}>
                <InputField
                    value={fullName}
                    onChange={(value) => onChange("fullName",value)}
                    label= "Full Name"
                    error={fullNameError}
                />
                <InputField
                    value={email}
                    onChange={(value) => onChange("email",value)}
                    label= "Email"
                    error={emailError}
                />
                <InputField
                    value={password}
                    onChange={(value) => onChange("password",value)}
                    label = "Password"
                    type = "password"
                    error={passwordError}
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
    )
}

export default SignUp
