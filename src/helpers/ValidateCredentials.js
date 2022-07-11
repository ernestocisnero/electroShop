const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};


const validatePassword = (password)=> {
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-?;,./{}|":<>[\]\\' ~_]).{8,}/;
    return re.test(password);
}


export const ValidateCredentials = ( email, password)=>{

    //Check if email and password has correct structure to storage.
    if ( validateEmail(email) && validatePassword(password) ){        
        localStorage.setItem( "credentials", JSON.stringify({ "email":email,"password":password}) );
        return true;
    }
    else{
        return false;
    }
}