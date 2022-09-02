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

document.querySelector('.header__more').textContent = `${list.length} more to do,`;
document.querySelector('.header__done').textContent = `${getNumDone()} done`




/* const getNumDone = ()=>{
    let num = 0;
    for(let elem of list){
        for(let key in elem){
            if(elem[key] === 'Done'){
                num++;
            }
        }
    }
    return num;
} */

function getNumDone(){
    let num = 0;
    for(let elem of list){
        if(elem['status'] === 'Done'){
            num++
        }
    }
    return num;
    
}




