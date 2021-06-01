export default function validateInfo(values){
    let errors = {}
    if(!values.username.trim()){
        errors.username = "username required"
    }
    if(!values.email){
        errors.email = "Email is required"
    }
    if(!values.password){
        errors.password = "Password required"
    } else if(values.password.length<6){
        errors.password = "Minimum password length is 6"
    }
    if(!values.phoneno){
        errors.phoneno = "Phonenumber required"
    }
    
return errors;
}