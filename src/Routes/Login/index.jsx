import { useState,useEffect } from "react" 
import InputField from "../../Components/InputField";
import "./style.css" 
import {isValidEmail} from "../../Utility/validation"
import { useDispatch } from "react-redux";
const Login = () => {
    const[formData,setFormData]=useState({
        email:"",
        password:"" 
    });
    const[formErrorData,setFormErrorData]=useState({
        emailError:"",
        passwordError:"",
    });
    const [isFormSubmitted,setIsFormSubmitted]=useState(false);
    
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
    const formValidate = () =>{
        let isValidForm = true ;
        if(!email){
            onError("emailError","Cannot be Empty")
            isValidForm =false;
        }
        else{
            if(!isValidEmail(email)){
            onError("emailError","Enter Valid Email");
            isValidForm =false;
            }else{
            onError("emailError","")
            } 

        }
        if(!password){
            onError("passwordError","Cannot be Empty");
            isValidForm =false;
        }else{
            if(password.length<=7){
                onError("passwordError","Provide Maximum 8 Characters");
                isValidForm =false;
            }
            else{
            onError("passwordError","")
            } 
        }
        return isValidForm
    
    }     

    const dispatch =useDispatch()

    useEffect(()=>{
        formValidate();
    },[formData])
    const loginCall = (e) =>{ 
        e.preventDefault(); 
        setIsFormSubmitted(true);
        if(formValidate()){
            dispatch({
                type:"LoggedIn"
            })
        }         
    }
    return (
        <div className="login-container">
                    <h1>Log In</h1>
                    <form onSubmit={loginCall}>
                        <InputField
                        value={email}
                        onChange={(value) => onChange("email",value)}
                        isFormSubmitted={isFormSubmitted}
                        label= "Email"
                        error={emailError}
                       
                        />
                        <InputField
                        value={password}
                        onChange={(value) => onChange("password",value)}
                        isFormSubmitted={isFormSubmitted}
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
