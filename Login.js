 let login=()=>{


    let loginemail=document.querySelector("#inpemail").value
    let loginpass=document.querySelector("#inppass").value


    let localemail=localStorage.getItem("Email")
    let loacalpass=localStorage.getItem("Password")


    if(loginemail==localemail && loginpass==loacalpass){

        
}
else {

      alert("Invaid Email and Password")  
}


location.href="Signup.html"









 }