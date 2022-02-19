import { pending, todoList } from "../..";
import { Todo } from "../classes";

// Elements
const divTodoList   = document.querySelector(".todo-list");
const txtInput      = document.querySelector(".new-todo");
const clearBtn      = document.querySelector(".clear-completed");
const filters       = document.querySelector(".filters");
const anchorFilters = document.querySelectorAll(".filter");

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

txtInput.addEventListener("keyup", ( event ) => {    
    if ( event.keyCode === 13 && txtInput.value.length > 0 ) {
        const newTodo = new Todo( txtInput.value );
        todoList.newTodo( newTodo );
        createHtmlTodo( newTodo );
        txtInput.value = "";
        pending.innerText = todoList.getPending();
    }
});

divTodoList.addEventListener("click", ( event ) => {
    const elementName = event.target.localName; // input, label, button
    const todoElement = event.target.parentElement.parentElement;
    const todoId = todoElement.getAttribute("data-id");

    if ( elementName.includes("input") ) {
        todoList.setCompleted( todoId );
        todoElement.classList.toggle("completed");
        pending.innerText = todoList.getPending();
    } else if ( elementName.includes("button") ) {
        todoList.deleteTodo( todoId );
        divTodoList.removeChild( todoElement );
        pending.innerText = todoList.getPending();
    }
});

clearBtn.addEventListener("click", () => {
    ( todoList.todos.length > 0 ) && todoList.clearCompleted();

    for ( let i = divTodoList.children.length - 1; i >= 0; i-- ) {
        const element = divTodoList.children[i];
        if ( element.classList.contains("completed") ) {
            divTodoList.removeChild( element );
        }
    }
});

filters.addEventListener("click", ( event ) => {
    const filter = event.target.text;

    anchorFilters.forEach( element => {
        element.classList.remove('selected');
    });

    event.target.classList.add("selected");

    if( !filter ) { return; }

    for ( const element of divTodoList.children ) {
        element.classList.remove("hidden");
        const completed = element.classList.contains("completed");

        switch (filter) {
            case "Pending":
                if( completed ) {
                    element.classList.add("hidden");
                }
                break;
            case "Completed":
                if( !completed ) {
                    element.classList.add("hidden");
                }
                break;
        }
    }
});