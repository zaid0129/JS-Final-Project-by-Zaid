let signup=()=>{

    let inpname=document.querySelector("#name").value
    let inpnum=document.querySelector("#number").value
    let inpemail=document.querySelector("#email").value
    let inppass=document.querySelector("#pass").value
    let inpcpass=document.querySelector("#cpass").value
    

    let errname=document.querySelector("#errname")
    let errnum=document.querySelector("#errnum")
    let erremail=document.querySelector("#erremail")
    let errpass=document.querySelector("#errpass")
    let errcpass=document.querySelector("#errcpass")



    ///-------------ERROR FIXING--------------------///

        // Clear previous error messages
        errname.innerHTML = "";
        errnum.innerHTML = "";
        erremail.innerHTML = "";
        errpass.innerHTML = "";
        errcpass.innerHTML = "";
    

///-----------------NAME-----------------//

    if(inpname ===""){
        errname.innerHTML="Please enter name"
        let a = document.querySelector("#name").placeholder="Please enter name";
        return false 
    }

    else if (inpname.match ([[/a-z/]]) 
        && inpname.match([[/A-Z/]])){
            errname.innerHTML = "Enter Valid name";
            return false
        }


        
///-----------------NUMBER-----------------///    

    if (inpnum ==="") {
        errnum.innerHTML = "Please enter phone number";
        return false
    }

    else if (isNaN(inpnum)) {   // if number then ans will be false  
     errnum.innerHTML="Please Enter the number only"
        return false 

    }

    else if (inpnum.length!=10){

        errnum.innerHTML = "Please enter valid number"
        return false
    }


///-----------------EMAIL-----------------///


    if (inpemail ==="") {
        erremail.innerHTML = "Please enter EMAIL";
        return false
    }

    else if ( !(inpemail.includes("@") && inpemail.includes(".com"))){
        erremail.innerHTML = "please enter valid email"
        

        return false

    }
        

    
///-----------------PASSWORD-----------------///    


    if (inppass === "") {
        errpass.innerHTML = "Please enter Password";
        return false;
    } 



    else if (!(inppass.match(/[1234567890]/) 
        && inppass.match(/[!@#$%^&*()]/) 
        && inppass.match (/[a-z]/) 
        && inppass.match(/[A-Z]/))){
        errpass.innerHTML = "Please enter the strong password"
        return false
    }
        

    
    //-----------------CONFIRM PASSWORD-----------------//

    
    if (inpcpass === "") {
        errcpass.innerHTML = "Please enter confirm password";
        return false;
    } 
    
    else if (inppass !== inpcpass) {
        errcpass.innerHTML = "Password and confirm password should be the same";
        document.querySelector("#cpass").value=""
        // document.querySelector("#cpass").focus();
        return false;
    }
    

    localStorage.setItem("Name", inpname)
    localStorage.setItem("Number", inpnum)
    localStorage.setItem("Email", inpemail)
    localStorage.setItem("Pass", inppass)
    localStorage.setItem("Confirm Password", inpcpass)
    

    location.href="Login.html"
    return false


    alert("SignUp Completed!");
    

}




///-----------------------------------------

// let login=()=>{


//     let loginemail=document.querySelector("#inpemail").value
//     let loginpass=document.querySelector("#inppass").value


//     let localemail=localStorage.getItem("Email")
//     let localpass=localStorage.getItem("Password")


//     if(loginemail==localemail && loginpass==localpass){
//     location.href="Home.html"       
// }
// else {

//       alert("Invaid Email or Password")  
// }

//  }