const todo = [];
renderTodoList();

function renderTodoList(){
    let htmlElements = '';
    for(let i=0;i<todo.length;i++)
    {
        const todoname = todo[i];
        const pElement = `<p>${todoname}</p>`;
        htmlElements += pElement;
    }   
    // console.log(htmlElements);
    let div = document.querySelector('.todo-names');
    div.innerHTML = htmlElements;
}

function todo1(){
    let inputElement = document.querySelector('.js-input');
    const name = inputElement.value;

    todo.push(name);
    // console.log(todo);
    inputElement.value = '';

    renderTodoList();
     
    // let todoJSON = JSON.parse(localStorage.getItem('todo'));

    // localStorage.setItem('todo',JSON.stringify(todo));
   
}
