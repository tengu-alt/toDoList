window.addEventListener('load', toDoList);
arrayOfTasks = [];
function toDoList() {
    let form = document.createElement('input');
    form.type = 'text';
    document.body.append(form);
    let button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = 'addNew'
    document.body.append(button)
    let buttonClr = document.createElement('button');
    buttonClr.type = 'button';
    buttonClr.innerHTML = 'clear'
    document.body.append(buttonClr)
    buttonClr.addEventListener('click', clear);
    let container = document.createElement('div');
    container.id = 'cont';
    document.body.append(container);
    let list = document.createElement('ul');
    list.id = 'ls';
    document.getElementById('cont').appendChild(list);
    //set tasks on a desk
    for(let i = 0; i < localStorage.length; i++){
        arrayOfTasks.push(localStorage.getItem(`task ${i}`));
    }
    arrayOfTasks.sort();
    for (let i = 0; i < arrayOfTasks.length; i++) {
        let task = document.createElement('li');
        task.innerHTML = arrayOfTasks[i];
        document.getElementById('ls').appendChild(task);
    }
    button.addEventListener('click', adder);
    window.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
        adder()
    }})




}
function adder() {
    if (document.querySelector('input').value != '' && document.querySelector('input').value != ' ') {
        localStorage.clear()
        while (document.getElementById('ls').firstChild) {
            document.getElementById('ls').removeChild(document.getElementById('ls').firstChild);
        }
        arrayOfTasks.push(document.querySelector('input').value);
        document.querySelector('input').value = '';
        
        for (let i = 0; i < arrayOfTasks.length; i++) {
            arrayOfTasks.sort();
            localStorage.setItem(`task ${i}`, arrayOfTasks[i])
            let task = document.createElement('li');
            task.innerHTML = localStorage.getItem(`task ${i}`);
            document.getElementById('ls').appendChild(task);
    
    
    
    
        }
        console.log(localStorage)
    }
}
function clear(){
    while (document.getElementById('ls').firstChild) {
        document.getElementById('ls').removeChild(document.getElementById('ls').firstChild);
    }
    localStorage.clear()
    document.location.reload()
}
    
