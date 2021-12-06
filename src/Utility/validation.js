export const isValidEmail = (inputText)=>{
    const filter=(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)
    if(filter.test(inputText))return true
    return false   
} 