import { Todo, TodoList } from "./js/classes";
import { createHtmlTodo } from "./js/components/TodoComponent";
import "./sass/styles.scss";

export const todoList = new TodoList();
export const pending = document.querySelector(".todo-count strong");
pending.innerText = String(todoList.getPending());

for( let i = todoList.todos.length - 1; i >= 0; i-- ) {
    createHtmlTodo( todoList.todos[i] );
}
