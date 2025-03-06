




//  let login=()=>{


//     let loginemail=document.querySelector("#loginemail").value
//     let loginpass=document.querySelector("#loginpass").value


//     let localemail=localStorage.getItem("Email")
//     let localpass=localStorage.getItem("Password")


//     if(loginemail==localemail && loginpass==localpass){
//     location.href="Home.html"       
// }
// else {

//       alert("Invaid Email or Password")  
// }

//  }




/////------------------------------------------ 


let login = () => {
    let loginemail = document.querySelector("#loginemail").value
    let loginpasss = document.querySelector("#loginpass").value
    console.log(loginpasss);
    
    let localemail = localStorage.getItem("Email");
    let localpasss = localStorage.getItem("Pass");
      console.log("paSS",localpasss);
      
    // if (!localemail || !localpass) {
    //     alert("No account found. Please register first.");
    //     return;
    // }

    if (loginemail==localemail && localpasss==loginpasss) {
        location.href = "Home.html";
    } else {
        alert("Invalid Email or Password");
    }
  return false
}


let booknow=()=>{

  if (localStorage.getItem("Email") && localStorage.getItem("Pass")){

  
    location.href="Booking.html"
  }

  else {
    alert("Please Login First");
  }

}



let checklogin=()=>{

  if(localStorage.getItem("Email") && localStorage.getItem("Pass")){

    document.querySelector(".login-btn").style.display="none";
}

else {

document.querySelector(".logout-btn").style.display="none"
document.querySelector(".login-btn").style.display="block"

}


}