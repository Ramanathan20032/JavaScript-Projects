let input = document.getElementById('input')
let button = document.getElementById('add')
let todoList = document.getElementById('todoList')

let todos = []
window.onload = ()=> {
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo => addTodo(todo))
}

button.addEventListener('click', ()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addTodo(input.value)
    input.value = ''
})

function addTodo(todo){
    let para = document.createElement('p')
    para.innerText = todo
    todoList.appendChild(para)
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through';
        remove(todo) // para
    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo) // para
    })
}

function remove(todo){
    let index = todos.indexOf(todo)
    if(index > -1){
        todos.splice(index, 1)
    }
    localStorage.setItem('todos',JSON.stringify(todos))
}