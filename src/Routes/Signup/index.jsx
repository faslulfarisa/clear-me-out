import { useEffect, useState } from "react"
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
    const [isFormSubmitted,setIsFormSubmitted]=useState(false);
    useEffect(()=>{
        // console.log("use effect");
        formValidate();
    },[formData])
    const {fullName, email, password, confirmPassword} = formData;
    const {fullNameError, emailError, passwordError, confirmPasswordError} = formErrorData;
    
    const onChange = (key,value)=>{
        setFormData(prev =>({
            ...prev,
            [key]:value  
        }))
    }
    const onError =(key,value)=>{
        setFormErrorData(prev=>({
            ...prev,
            [key]:value
        }))
    }
    const formValidate = () =>{
        let isValidForm = true;
        if(!fullName){
            onError("fullNameError","Cannot be Empty");
            isValidForm = false;
        }else{
            if(fullName.length<=3){
            onError("fullNameError","Provide Your FullName");
            isValidForm = false;
            }
            else{
            onError("fullNameError","")
            }
        }
        console.log(fullName)
        if(!email){
            onError("emailError","Cannot be Empty");
            isValidForm = false;
        }
        else{
            if(!isValidEmail(email)){
            onError("emailError","Enter Valid Email");
            isValidForm = false;
            }else{
            onError("emailError","")
            } 
        }
        // console.log(email)

        if(!password){
            onError("passwordError","Cannot be Empty");
            isValidForm = false;
        }else{
            if(password.length<=7){
                onError("passwordError","Provide Maximum 8 Characters");
                isValidForm = false;
            }
            else{
            onError("passwordError","")
            } 
        }
        if(!confirmPassword){
            onError("confirmPasswordError","Confirm Your Password");
            isValidForm = false;
        }else{
            if(password !== confirmPassword){
                onError("confirmPasswordError","Password Miss Match");
                isValidForm = false;
            }
            else{
                onError("confirmPasswordError","")
            }
        }
        return isValidForm;

    }
    const signUpCall = (e) =>{ 
        e.preventDefault();
        // console.log(formData);
        setIsFormSubmitted(true);
        if(formValidate()){
            console.log("SignUp Success")
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
                    isFormSubmitted={isFormSubmitted}
                />
                <InputField
                    value={email}
                    onChange={(value) => onChange("email",value)}
                    label= "Email"
                    error={emailError}
                    isFormSubmitted={isFormSubmitted}
                />
                <InputField
                    value={password}
                    onChange={(value) => onChange("password",value)}
                    label = "Password"
                    type = "password"
                    error={passwordError}
                    isFormSubmitted={isFormSubmitted}
                />
                <InputField
                    value={confirmPassword}
                    onChange={(value) => onChange("confirmPassword",value)}
                    label= "Confirm Password"
                    type="password"
                    error={confirmPasswordError}
                    isFormSubmitted={isFormSubmitted}
                />
                <button type="submit" className="sign-up-page-button">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
