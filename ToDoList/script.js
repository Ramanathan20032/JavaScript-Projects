let input = document.getElementById('input')
let button = document.getElementById('add')
let todoList = document.getElementById('todoList')

let todos = []
window.onload = ()=> {
    // onloading the windows retain the array from the local storage ('todos') key values
    // it may be empty || value
    todos = JSON.parse(localStorage.getItem('todos')) || []
    // console.log(todos)

    // looping the todos array in the local storage and passing it into the addTodo() as a argument
    todos.forEach(todo=>addTodo(todo))
}

button.addEventListener('click',()=>{
    // push the input value into the todos[] array
    todos.push(input.value)
    
    // converting the javascript object (which is in the key value pair) into JSON String 
    // by setting the key = todos ; value = input.values
    localStorage.setItem('todos',JSON.stringify(todos))

    // to add element inside the todolist div
    addTodo(input.value)
    // to make the input box empty after the button is clicked
    input.value = ''
    
})

function addTodo(todo){
    let para = document.createElement('p')
    para.innerText = todo
    todoList.appendChild(para)
    
    // if the todolist content is clicked once, it has a line-through
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        // to remove the element from the array
        remove(todo) // para
    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        // to remove the element from the array
        remove(todo) // para
    })
}

function remove(todo){
    let index = todos.indexOf(todo)
    // if the array is not empty then
    if(index > -1){
        todos.splice(index, 1)
    }

    // it will replace the todos[] array with the key value 'todos'
    localStorage.setItem('todos',JSON.stringify(todos))
}