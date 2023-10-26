let button = document.getElementById("button")
let todolist = document.getElementById("todoList")
let input = document.getElementById("input")


let todos = [];
window.onload = ()=>{
    console.log("loaded");
    todos = JSON.parse(localStorage.getItem("todos")) || []
    todos.forEach(todo => addtodo(todo))
}

button.addEventListener("click", ()=>{
    todos.push(input.value)
    addtodo(input.value)
    input.value = ''
})

function addtodo(todo){
    let para = document.createElement('p')
    para.innerText = todo
    todolist.appendChild(para)
    localStorage.setItem("todos",JSON.stringify(todos))
    para.addEventListener("click", ()=>{
        para.style.textDecoration = 'line-through';     
        remove(todo)
    })
    para.addEventListener("dblclick", ()=>{
        todolist.removeChild(para)
        remove(todo)
    })
}

function remove(todo) {
    // console.log(todo);
    let index = todos.indexOf(todo)
    // debugger
    if (index > -1) {
        todos.splice(index,1)
    }
    localStorage.setItem("todos",JSON.stringify(todos))
}