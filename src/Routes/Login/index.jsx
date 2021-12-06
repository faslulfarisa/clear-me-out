import { useState } from "react" 
import InputField from "../../Components/InputField";
import "./style.css"
import {isValidEmail} from "../../Utility/validation"
const Login = () => {
    const[formData,setFormData]=useState({
        email:"",
        password:"" 
    });
    const[formErrorData,setFormErrorData]=useState({
        emailError:"",
        passwordError:"",
    });
 
    const {email,password}=formData;
    const {emailError, passwordError} = formErrorData;
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
   
    const loginCall = (e) =>{ 
        e.preventDefault();      
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
    
    }
    
    return (
        <div className="login-container">
                    <h1>Log In</h1>
                    <form onSubmit={loginCall}>
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
                        <button className="login-page-login-button">Login</button>
                    </form>
        </div>
    )
}

export default Login
