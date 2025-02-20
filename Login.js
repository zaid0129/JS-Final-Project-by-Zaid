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
    let loginpass = document.querySelector("#loginpass").value

    let localemail = localStorage.getItem("Email");
    let localpass = localStorage.getItem("Password");

    // if (!localemail || !localpass) {
    //     alert("No account found. Please register first.");
    //     return;
    // }

    if (loginemail==localemail && loginpass ==localpass) {
        location.href = "Home.html";
    } else {
        alert("Invalid Email or Password");
    }
    return false
}
