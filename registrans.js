const todoInput = document.getElementById('todoInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const todoList  = document.getElementById('todoList');
let newarr = [];

const confirm = (message) => {
    const head = document.createElement("h1")
    const yes = document.createElement("button")
    const no = document.createElement("button")
    head.textContent = message

}

addTaskBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const getInput = todoInput.value.trim();
    if(getInput === ''){
        todoInput.style.backgroundColor = 'red';
        return;
    }
    todoInput.style.backgroundColor = '';
    const newLi = document.createElement('li');
    newLi.textContent = `${newarr.length + 1}. ${getInput}`;
    todoList.appendChild(newLi);
    newarr.push(getInput);
    todoInput.value = '';

    const button = document.createElement('button');
    button.textContent = 'X';
    newLi.appendChild(button);
    button.addEventListener('click', (event) => {
        event.preventDefault();
        if(event.target)
            if(confirm('Are You Sure?'));
                const rLi = event.target.parentElement;
                todoList.removeChild(rLi);
    })
    

});