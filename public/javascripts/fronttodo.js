//Harkanvetäjä saatu paljon apua koodin tekemiseessä eri kohdissa

let todo = {}
const submitData = document.getElementById("submit-data");
submitData.addEventListener("click",function(event){
    let message = document.getElementById('message')

    let data = {
        name: document.getElementById('input-name').value,
        todo: document.getElementById('input-task').value
    }
    //console.log(data)
 
    fetch("/todo", {
            method: "post",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
           })
           .then(response => response.json())
           .then(data => {
            // Opiskelija Viia Mäntymäki antoi vinkkiä miten saada serverin viesti näkymään sivulla
              message.innerHTML=data.messageadd; 
              
           })

    console.log("button pressed")
   
 event.preventDefault()
})
