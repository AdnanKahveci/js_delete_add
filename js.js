 const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
// call event listeners
eventListeners();

function eventListeners() {
    // submit event
    form.addEventListener('submit', addNewItem);

    // delete an item
    taskList.addEventListener('click', deleteItem);

    // delete all items
    btnDeleteAll.addEventListener('click', deleteAllItems);
}
// add new item
function addNewItem(e) {
    // create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));

    // create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    // add a to li
    li.appendChild(a);

    // add li to ul
    taskList.appendChild(li);

    // clear input
    input.value = '';

    e.preventDefault();

}
//delete item
function deleteItem(e) {
    //look for icon
    if (e.target.className === 'fas fa-times') {
        //target<a<li parent delete
        e.target.parentElement.parentElement.remove();
    }

    e.preventDefault();
}
// delete all
function deleteAllItems(e) {

    taskList.innerHTML = '';
    e.preventDefault();
}
