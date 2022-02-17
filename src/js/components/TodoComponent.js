import { Todo } from "../classes";
import { todoList } from "../..";

const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");

export const createHtmlTodo = ( todo ) => {
    const htmlTodo = `
        <li class="${ ( todo.completed ) ? "completed" : "" }" data-id="${ todo.id }">
            <div class="view">
                <input class="toggle" type="checkbox" ${ ( todo.completed ) ? "checked" : "" }>
                <label>${ todo.task }</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.prepend( div.firstElementChild );

    return div.firstElementChild;
};

/* ============================================= */
/* ------------------- EVENTS ------------------ */
/* ============================================= */

txtInput,addEventListener("keyup", ( event ) => {    
    if ( event.keyCode === 13 && txtInput.value.length > 0 ) {
        const newTodo = new Todo( txtInput.value );
        todoList.newTodo( newTodo );
        createHtmlTodo( newTodo );
        txtInput.value = "";
        console.log( todoList );
    }
});
