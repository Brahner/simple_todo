const list = [ 
    {
        name: 'create a post',
        status: 'In progress',
        priority: 'low'
    },
    {
        name: 'Learn HTML',
        status: 'Done',
        priority: 'high'
    },
    {
        name: 'Learn CSS',
        status: 'Done',
        priority: 'high'
    },
    {
        name: 'Learn JS',
        status: 'In progress',
        priority: 'high'
    }
];

getNumTodo();
document.querySelector('.header__done').textContent = `${getNumDone()} done`;
document.querySelector('.add-todo__btn').addEventListener('click', ()=>{
    let newTask = document.querySelector('input').value;
    let num = 0;
    for(let elem of list){
        if(elem['name'] === newTask){
            num++
        }
    }
    if(num === 0){
        let obj = {};
        obj['name'] = newTask, obj['status'] = 'To Do', obj['priority'] = 'low';
        list.push(obj);
    }
    getNumTodo();
    showTodoList();
});


function getNumTodo(){
    document.querySelector('.header__more').textContent = `${list.length} more to do,`;
}

function getNumDone(){
    let num = 0;
    for(let elem of list){
        if(elem['status'] === 'Done'){
            num++
        }
    }
    return num;
    
}

function showTodoList(){
    let wrapper = document.querySelector('.todo-list__wrapper');
    wrapper.querySelectorAll('.todo-list__item').forEach(n => n.remove());
    for(let elem of list){
        let item = document.createElement('div');
        item.className = 'todo-list__item';

        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.className = 'todo-list__checkbox';

        let text = document.createElement('span');
        text.className = 'todo-list__text';
        text.textContent = `${elem['name']}`;

        wrapper.appendChild(item);
        item.appendChild(checkbox);
        item.appendChild(text);
    }
}

showTodoList()



function showTodoStatus(){
    let progress = document.querySelector('.progress__wrapper');
    progress.querySelectorAll('.progress__item').forEach(n => n.remove());
    let done = document.querySelector('.done__wrapper');
    done.querySelectorAll('.done__item').forEach(n => n.remove());

    for(let elem of list){
        if(elem['status'] === 'In progress'){
            let item = document.createElement('div');
            item.className = 'progress__item';
            item.textContent = `${elem['name']}`;
            progress.appendChild(item);
        }else if(elem['status'] === 'Done'){
            let item = document.createElement('div');
            item.className = 'done__item';
            item.textContent = `${elem['name']}`;
            done.appendChild(item);
        }

    }
}

showTodoStatus()