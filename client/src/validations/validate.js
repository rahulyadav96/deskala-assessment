export const validateEmail = (email)=>{
   

}
export const validatePhone = (phone)=>{
    if(phone.length<10 || phone.length>10) return false
    else return true
}

export const validatePassword = (password) =>{
    if(password.length<8) return false;
    else if(password.match(/^[A-Za-z]\w{7,14}$/)){
        return true
    }else return false
}

