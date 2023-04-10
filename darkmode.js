const toggleSwitch = document.querySelector('input[id="theSwitch"]');

if(localStorage.getItem('darkModeEnabled')) {
    document.body.className = 'dark';
    toggleSwitch.checked = true;
}
//the code above is basically showing on the browser the the switch is in 
//dark mode even after refreshing!

toggleSwitch.addEventListener('click', function(e) {
    const {checked} = toggleSwitch;
    if(checked) {
        localStorage.setItem('darkModeEnabled', true);
    } else {
        localStorage.removeItem('darkModeEnabled');
    }
    document.body.className = checked ? 'dark' : ''
});
//the code above here is using the variable checked which is linked
//to toggleSwitch and if it is true to set it to darkModeEnabled
//otherwise it removes the fact dark mode was on and would stay in light mode if refreshed

const taskBtn = document.querySelectorAll('li button');
const form = document.querySelector('#add-tasks');
const input = document.querySelector('.moreTasks');
const todoList = document.querySelector('.todoList');

for(let btn of taskBtn) {
    btn.addEventListener('click', function(e) {
    });
} //this code is saying to remove both button and li element when button is clicked
     
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newTask = document.createElement('li');
    const taskBtn = document.createElement('button');
    taskBtn.innerText = 'Done';
    newTask.innerText = input.value;
    input.value = '';
    newTask.appendChild(taskBtn);
    todoList.appendChild(newTask); 
});
//so this code above is allowing a new task to be created by the user and put it with the
//todo list this also creates a button to go along with it with the inner text of done to 
//match the others. the newTask is taking the entered users text and making an li

todoList.addEventListener('click', function(e) {
  if(e.target.tagName === "BUTTON") {
(e.target.parentElement.style.textDecoration = 'line-through');
  } 
});

const destroyTasks = document.querySelector('.altDelete');

destroyTasks.addEventListener('click', function(e) {
    if(e.target.className === "altDelete") {
        document.querySelector('.todoList').remove();
    }
    if(e.target.className === "altDelete") {
        localStorage.removeItem('.todoList')
    } 
});

const savedTodo = JSON.parse(localStorage.getItem("todoList")) || [];

document.addEventListener("DOMContentLoaded", function(){
savedTodo.forEach(todo => {
    const newTask = document.createElement('li');
    const taskBtn = document.createElement('button');
    taskBtn.innerText = e.target.parentElement.style.textDecoration = 'line-through';
    newTask.innerText = todo.text;
    if (todo.completed) {
        newTask.classList.add('completed');
    }
    newTask.appendChild(taskBtn);
    todoList.appendChild(newTask);
})
});

const saveBtn = document.querySelector('.saveTodos');
saveBtn.addEventListener('click', function(e) {
    const todos = [];
    const taskEl = document.querySelectorAll('.todoList li');
    taskEl.forEach(task => {
        const todo = {
            text: task.innerText,
            completed: task.classList.contains('completed')
        };
        todos.push(todo);
    })
    localStorage.setItem('todoList', JSON.stringify(todos));
});

//{task: newTodo.innerText, isCompleted: false}