const list = [ 
    {
        name: 'create a post',
        status: 'In progress',
        priority: 'low'
    },
    {
        name: 'test',
        status: 'Done',
        priority: 'high'
    },
    {
        name: 'test1',
        status: 'Done',
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






