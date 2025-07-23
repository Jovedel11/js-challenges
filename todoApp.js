const inputField = document.querySelector('.todo-field');
const ctnSubmit = document.querySelector('.ctn-add');
const list = document.querySelector('.all-todo');

let allTask = [];

class Users {
  constructor(id, task) {
    this.id = id;
    this.task = task;
  }

  display() {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = `User ${this.id}: ${this.task}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";

    const editBtn = document.createElement('button');
    editBtn.textContent = "✏️";
    editBtn.style.marginLeft = "10px";

    // Delete logic
    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      allTask = allTask.filter(element => element.id !== this.id); // remove from array
      renderList(); // re-render the list
    });

    // Edit logic
    editBtn.addEventListener('click', (e) => {
      e.preventDefault();
      inputField.value = this.task;

      // On next submit, update instead of adding
      ctnSubmit.textContent = "Update Task";

      // Replace event listener temporarily
      ctnSubmit.onclick = (ev) => {
        ev.preventDefault();
        const newValue = inputField.value.trim();
        if (newValue === "") return;

        this.task = newValue; // update task
        inputField.value = "";
        ctnSubmit.textContent = "Add Task";
        ctnSubmit.onclick = defaultSubmit; // restore original
        renderList();
      };
    });

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  }
}

// Original submit handler
function defaultSubmit(e) {
  e.preventDefault();
  const value = inputField.value.trim();
  if (value === "") {
    inputField.style.backgroundColor = 'red';
    return;
  }

  const user = new Users(crypto.randomUUID().slice(0, 3), value);
  allTask.push(user);
  inputField.value = "";
  renderList();
}

function renderList() {
  list.innerHTML = "";
  allTask.forEach(user => user.display());
}

ctnSubmit.addEventListener('click', defaultSubmit);
