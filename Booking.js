let fetchData=async()=>{
    let url="http://localhost:3000/hotel"
    let res=await fetch(url,{method:"GET"});
    let data=await res.json()
    console.log(data)
    paginationData(data)
    // Datashow(data)

}

let searchh=async()=>{
    let searchinp=document.querySelector("#searchinp").value.toLowerCase()
    let url='http://localhost:3000/hotel'
    let res= await fetch(url,{method:'GET',})
    let data=await res.json()
let filterData=data.filter((e)=>{
    return e.name.toLowerCase().includes(searchinp)
})
paginationData(filterData)
}
let paginationData=(data)=>{
    $('#pagin').pagination({
        dataSource:data,
        pageSize: 5,
        showGoInput: true,
        showGoButton: true,
        callback: function(data, pagination) {
        Datashow(data)
        }
    })
    
}

    let Datashow=(data)=>{
    let display=document.querySelector("#display")
    display.innerHTML=""  // clear previous data
    data.map((e)=>{
    display.innerHTML+=`<tr>
    <td>${e.name}</td>
    <td>${e.age}</td>
    <td>${e.city}</td>
    <td>${e.aadhar}</td>
    <td>${e.number}</td>
    <td>${e.fair}</td>
    <td>${e.person}</td>
    <td>${e.date}</td>
    <td>${e.fair*e.person}</td>
    <td onclick="confirmdelete('${e.id}')">cancel</td>
    <td onclick="formfill('${e.id}')">update</td>
    </tr>`
    })
    }
    //   fetchData()
    
    // let confirmdelete=(id)=>{

    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //             // deletee(id)
    //           Swal.fire({
    //             title: "Deleted!",
    //             text: "Your file has been deleted.",
    //             icon: "success"
    //           }); then(()=>{
    //             deletee(id);
    //           })
    //         }
    //       });

    // }



    let confirmdelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              }).then(()=>{
                deletee(id)
              })
            }
          });
    }




    let deletee = (id)=>{
    
        let url = `http://localhost:3000/hotel/${id}`
    
        fetch(url,{method:"DELETE"})
    }
    
    let userinput=()=>{
        let inpname = document.querySelector("#name").value;
        let inpage = document.querySelector("#age").value;
        let inpcity = document.querySelector("#city").value;
        let inpaadhar = document.querySelector("#aadhar").value;
        let inpnum = document.querySelector("#number").value;
        let inpperson = document.querySelector("#Person").value;
        let inpdate = document.querySelector("#opponitment").value;
     
    
        let url ='http://localhost:3000/hotel'
        fetch(url, { 
            method: "POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: inpname,
                age: inpage,
                city: inpcity,
                aadhar: inpaadhar,
                number: inpnum,
                fair: 2000,
                person: inpperson,
                date: inpdate,
                
              
    
            })
        })
    
        location.href = "Show.html" 
        return false
         
    }
    
    let formfill =async(id)=>{
    
        let url = `http://localhost:3000/hotel/${id}`
    
        let res = await fetch(url,{method:"GET"}) 
    
        let data = await res.json()
    
        console.log(data);
    
    
        let formdata = `
        <div class="update">
    
        enter name : <input type="text" id="upname" value="${data.name}"><br><br>
    
          enter age : <input type="text" id="upage" value="${data.age}"><br><br>
    
           enter city : <input type="text" id="upcity" value="${data.city}" ><br><br>
    
           enter your aadhar : <input type="text" id="upaadhar" value="${data.aadhar}" ><br><br>
    
           enter your number : <input type="text" id="upnumber" value="${data.number}"><br><br>

           
           enter no. of person: <select id="upPerson" value="${data.Person}">
                
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
            </select><br><br>

          enter date to update:  <input type="date" id="opponitment"><br><br>
    
              <input type="submit" value="Book your Room" onclick="return finaleupdate('${data.id}')" >
    
              </div>
        `
        document.querySelector("#show").innerHTML=formdata
    
    }
    
    let finaleupdate=(id)=>{
        let inpname = document.querySelector("#upname").value;
        let inpage = document.querySelector("#upage").value;
        let inpcity = document.querySelector("#upcity").value;
        let inpaadhar = document.querySelector("#upaadhar").value;
        let inpnum = document.querySelector("#upnumber").value;
        let inpperson = document.querySelector("#upPerson").value;
        let inpdate = document.querySelector("#update").value;
      
    
        let url =`http://localhost:3000/hotel/${id}`
        fetch(url, { 
            method: "PUT",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: inpname,
                age: inpage,
                city: inpcity,
                aadhar: inpaadhar,
                number: inpnum,
                person: inpperson,
                
                fair: 2000
              
    
            })
        })
    
        location.href = "Show.html" 
        return false
    
    }
    