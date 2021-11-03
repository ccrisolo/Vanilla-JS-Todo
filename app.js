//Selectors
document.querySelector("form").addEventListener("submit", handleSubmitForm);
//handler to handle 2 events
document
    .querySelector("ul")
    .addEventListener("click", handleClickDeleteOrCheck);
    document.getElementById('clear-all').addEventListener('click', handleClearAll)

//Event Handlers
function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector("input");
    //check if input is not empty
    if (input.value !== "")
        //add the input
        addToDo(input.value);
    //clear the input
    input.value = "";
}

function handleClickDeleteOrCheck(e) {
    if (e.target.name === "check-button") {
        checkTodo(e);
    }
    if (e.target.name === "delete-button") {
        deleteTodo(e);
    }
}

function handleClearAll(e){
    //removes all the list items that are child of ul
    document.querySelector('ul').innerHTML = ''
}

//helper functions
function addToDo(todo) {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");

    //output the element
    li.innerHTML = `
        <span class="todo-item">${todo}</span>  
        <button name="check-button"><i class="fas fa-check-square"></i></button> 
        <button name="delete-button"><i class="fas fa-trash"></i></button> 
    `;

    //add item into ul by appending it
    li.classList.add("todo-list-item");
    ul.appendChild(li);
}

function checkTodo(e) {
    //get the reference to the item
    let item = e.target.parentNode;
    if (item.style.textDecoration == "line-through") {
        //remove the strikethrough
        item.style.textDecoration = "none";
    } else {
        item.style.textDecoration = "line-through";
    }
}

function deleteTodo(e) {
    let item = e.target.parentNode;
    item.addEventListener("transitionend", function () {
        item.remove();
    });
    item.classList.add("todo-list-item-fall");
}
