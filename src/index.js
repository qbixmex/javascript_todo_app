import { Todo, TodoList } from "./js/classes";

import "./sass/styles.scss";

const todoList = new TodoList();

const todo1 = new Todo("Clean the table", 1);
const todo2 = new Todo("Grab the garbage out", 2);

todoList.newTodo( todo1 );
todoList.newTodo( todo2 );
console.log( todoList.todos );
