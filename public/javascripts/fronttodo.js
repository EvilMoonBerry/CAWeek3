

let todo = {}
const submitData = document.getElementById("submit-data");
submitData.addEventListener("click",function(event){

    const user = {
        name: document.getElementById('input-name').value,
        task: document.getElementById('input-task').value
    }
    //console.log(data)
 
    fetch("/todo", {
            method: "post",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(user)
           })
           .then(response => response.json())
           .then(data => {
               console.log(data);
           })

    console.log("button pressed")
   
 event.preventDefault()
})
