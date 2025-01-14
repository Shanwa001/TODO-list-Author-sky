
    var input=document.getElementById("input")
    var listitem=document.getElementById("list")
    function add()
    {
        var h1=document.createElement("li")
        h1.innerHTML=input.value + "<button onclick='deleteiteam(event)'>Delete</button>"
        listitem.append(h1) 
    

    }
    function deleteiteam(event)
    {
       listitem=event.target.parentElement.remove()

    }
