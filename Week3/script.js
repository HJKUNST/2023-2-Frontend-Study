const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');


const todoList = document.getElementById('todo-list');
const completedList = document.getElementById('completed-list');


const delItem = (event) => {
    const target = event.target.parentElement;
    target.remove();
};

const toggleComplete = (event) => {
    const target = event.target.parentElement;
    target.classList.toggle('completed');
  
    if (target.classList.contains('completed')) {
        completedList.appendChild(target);
    } else {
        todoList.appendChild(target);
    }
};

const addItem = (text) => {
    if(text !=='') {
        const li = document.createElement('li');
        const button = document.createElement('button');
        const span = document.createElement('span');

        span.innerText = text;
        button.innerText = '삭제';
        button.addEventListener('click', delItem);

        span.addEventListener('click', toggleComplete);

        li.appendChild(span);
        li.appendChild(button);

        if (ul === todoList) {
            ul.appendChild(li);
        } else if (ul === completedList) {
            completedList.appendChild(li);
        }
    }
};

const handler = (event) => {
    event.preventDefault();
    addItem(input.value);
    input.value ='';
};

form.addEventListener('submit', handler);