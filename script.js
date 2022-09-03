const list = [ 
	{
		name: 'create a post',
		status: 'To Do',
		priority: 'low'
	},
	{
		name: 'Learn HTML',
		status: 'Done',
		priority: 'low'
	},
	{
		name: 'Learn CSS',
		status: 'Done',
		priority: 'low'
	},
	{
		name: 'Learn JS',
		status: 'In progress',
		priority: 'high'
	}
];

getNumTodo();



document.querySelector('.add-todo__btn').addEventListener('click', ()=>{		//! добавляет новую задачу
	let newTask = document.querySelector('input').value;
	let num = 0;
	for(let elem of list){
		if(elem['name'] === newTask){
			num++
		}
	}
	if(num === 0 && newTask.length != 0){
		let obj = {};
		obj['name'] = newTask, obj['status'] = 'To Do', obj['priority'] = 'low';
		list.push(obj);
	}
	getNumTodo();
	showTodoList();
});


function getNumTodo(){		//! выводит общие число задач
	document.querySelector('.header__more').textContent = `${list.length} more to do,`;
}

function getNumDone(){		//! выводит число завершенных задач
	let num = 0;
	for(let elem of list){
		if(elem['status'] === 'Done'){
			num++
		}
	}
	return num;
	
}

function showTodoList(){			//! вывод полного списка задач
	let wrapper = document.querySelector('.todo-list__wrapper');
	wrapper.querySelectorAll('.todo-list__item').forEach(n => n.remove());
	for(let i = 0; i < list.length; i++){
		let item = document.createElement('div');
		if(list[i]['priority'] === 'high'){item.className = 'todo-list__item todo-list__item--high'}
		else{item.className = 'todo-list__item'}
		item.setAttribute('id', i);

		let checkbox = document.createElement('button');
		checkbox.className = 'todo-list__checkbox icon-check';

		let prog = document.createElement('button');
		prog.className = 'todo-list__prog icon-processing-time';
		/* prog.innerHTML = `<img src="./icons/004-processing-time.svg" alt="in progress">`; */

		let text = document.createElement('span');
		if(list[i]['status'] === 'Done'){text.className = 'todo-list__text todo-list__text--done';}
		else{text.className = 'todo-list__text';}
		text.textContent = `${list[i]['name']}`;

		let high = document.createElement('button');
		high.className = 'todo-list__high icon-alert';
		/* high.innerHTML = `<img src="./icons/003-alert.svg" alt="high">`; */


		let del = document.createElement('button');
		del.className = 'todo-list__del icon-delete';
		/* del.innerHTML = `<img src="./icons/001-delete.svg" alt="del">`; */

		wrapper.appendChild(item);
		item.appendChild(checkbox);
		item.appendChild(prog);
		item.appendChild(text);
		item.appendChild(high);
		item.appendChild(del);
	}
	document.querySelector('.header__done').textContent = `${getNumDone()} done`;
}

showTodoList()



function showTodoStatus(){			//! вывод списков in progress и done
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


document.addEventListener('click', (e)=>{		//! по нажатию кнопок меняет статус, приоритет или удаляет задачу
	let indx = +(e.target.parentElement.id);
	/* let task = string.slice(0, string.indexOf('\n')); */

	if(e.target.localName === 'button'){
		new Audio('zvuk.mp3').play();
	}


	switch(e.target.className){
		case 'todo-list__checkbox icon-check':
			if(list[indx]['status'] === 'Done'){list[indx]['status'] = 'To Do';}
			else{list[indx]['status'] = 'Done';}
			break;

		case 'todo-list__prog icon-processing-time':
			if(list[indx]['status'] === 'In progress'){list[indx]['status'] = 'To Do';}
			else(list[indx]['status'] = 'In progress')
			break;

		case 'todo-list__high icon-alert':
			if(list[indx]['priority'] === 'high'){list[indx]['priority'] = 'low'}
			else{list[indx]['priority'] = 'high'}
			break;

		case 'todo-list__del icon-delete':
			list.splice(indx, 1);
			break;
	}

	getNumTodo();
	showTodoList();
	showTodoStatus();
})

