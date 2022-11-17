
let todo = {}
const submitData = document.getElementById("submit-data");
submitData.addEventListener("click",function(event){

    const data = {
        name: document.getElementById('input-name').value,
        task: document.getElementById('input-task').value
    }
 
    fetch("/users", {
            method: "post",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
           })

    console.log(data)
    console.log("button pressed")
   
 event.preventDefault()
})
