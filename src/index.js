import { Todo, TodoList } from "./js/classes";
import { createHtmlTodo } from "./js/components/TodoComponent";
import "./sass/styles.scss";

const todoList = new TodoList();

const todo1 = new Todo("Clean the table", 1);
const todo2 = new Todo("Study English", 2);

todoList.newTodo( todo1 );
todoList.newTodo( todo2 );

createHtmlTodo( todo1 );
createHtmlTodo( todo2 );