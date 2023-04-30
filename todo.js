const todoBox = document.querySelector("#todoBox");
const todoInput = document.querySelector("#todoBox input");
const todoList = document.querySelector("#todoList");
const todoclick = document.querySelector("#folderclick");
const todoTool = document.querySelector("#todoTool")
const resetBtn = document.querySelector("#resetBtn");
const closeBtn = document.querySelector("#closeBtn");

let todos = [];

function saveTodo () {
    localStorage.setItem("todo",JSON.stringify(todos));
}

function deleteTodo(event) {
    const li =event.target.parentElement;
    li.remove();
    todos = todos.filter(todo=>todo.id !== parseInt(li.id));
    saveTodo();
}

function paintTodo(todo) {
    const li = document.createElement("li");
    li.id=todo.id;
    const input = document.createElement("input");
    input.value=todo.text;
    input.classList.add("listInputBox");
    input.disabled=true;
    const button = document.createElement("button"); 
    button.classList.add("deleteBtn");  
    button.innerText="x"

    button.addEventListener("click",deleteTodo);
    li.appendChild(input);
    li.appendChild(button);
    todoList.appendChild(li);

}

function todo(event) {
    event.preventDefault();    
    const todo = todoInput.value;
    todoInput.value="";
    const todoObj={
        text:todo,
        id:Date.now(),
    };
    todos.push(todoObj);
    paintTodo(todoObj);
    saveTodo();
}

function todoOpen() {
    if (checkID === null) {
        alert(`Please enter your name!`);
    } else{
    todoTool.classList.remove("hidden");
    todoTool.classList.add("todoListBox");
    todoTool.classList.add("window");
    }
}

function close() {
    todoTool.classList.add("hidden");
}

const savedTodos = localStorage.getItem("todo");

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
};

const checkID = localStorage.getItem("userID")


    
todoclick.addEventListener("click",todoOpen);
todoBox.addEventListener("submit",todo);
closeBtn.addEventListener("click",close);