/* A ToDo App built by
 * Emeka Thomas Onwugbonu
 * Started on Friday 7th of August, 2020
 * 
 */

//  Version 1 Arrays
//  V1 Requirements
//  It should have a place to store todos
//  It should have a way to display todos
//  It should have a way to add new todos
//  It should have a way to change a todo
//  It should have a way to delete a todo

let todos = ['item 1', 'item 2', 'item 3'];

console.log('My Todos: ', todos);

todos.push('item 4');
todos.push('item 5');
// change the first item
todos[0] = 'item 1 updated';
// delete the first item on the list
todos.splice(0, 1);

// Version 2 Functions
// It should have a function to display todos
// It should have a function to add todos
// It should have a function to change todos
// It should have a function to delete todos

function displayTodos(){
    console.log('My todos: ', todos);
}

function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

function changeTodo(position, newValue){
    todos[position] = newValue;
    displayTodos();
}

function deleteTodo(position){
    todos.splice(position, 1);
    displayTodos();
}

//  Version 3 Objects
// It should store the Todo array on an Object
// It should have a display todos method
// It should have an add todo method
// It should have a change todo method
// It should have a delete todo method

var todoList = {
    todos : ['item 1', 'item 2', 'item 3'],
    displayTodos: function (){
        console.log('My todos: ', this.todos);
    },

    addTodo: function (todo) {
        this.todos.push(todo);
        this.displayTodos();
    },

    changeTodo: function (position, newValue){
        this.todos[position] = newValue;
        this.displayTodos();
    },
    
    deleteTodo: function (position){
        this.todos.splice(position, 1);
        this.displayTodos();
    }
}