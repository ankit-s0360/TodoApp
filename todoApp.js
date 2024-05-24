const inputField = document.getElementById("input")
const listContainer = document.getElementById("list")


function addFun(){
    if(inputField.value === ''){
        alert('You must write something!');
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputField.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        saveData()
    }
    inputField.value = '';  
}

listContainer.addEventListener("click", function(el){
    if(el.target.tagName === "LI"){
        el.target.classList.toggle("checked")
        saveData()
    }
    else if(el.target.tagName === "SPAN"){
        el.target.parentElement.remove()
        saveData()
    }
}, false)

showData()

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}