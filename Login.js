 let login=()=>{


    let loginemail=document.querySelector("#inpemail").value
    let loginpass=document.querySelector("#inppass").value


    let localemail=localStorage.getItem("Email")
    let localpass=localStorage.getItem("Password")


    if(loginemail==localemail && loginpass==localpass){
    location.href="Home.html"       
}
else {

      alert("Invaid Email or Password")  
}

 }