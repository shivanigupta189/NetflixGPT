 const checkValidData = (email, password, name)=>{

    // .test() is used with regex to check if a string (like an email) matches a specific pattern. if yes returns true to the variable isEmailValid 
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isUserName = /^[a-zA-Z_]+$/.test(name)

   if(!isEmailValid) return "Email is not valid";
   if(!isPasswordValid) return "Password is not valid";
   if(!isUserName) return "Name is not valid";

   return null;
} 
export default checkValidData