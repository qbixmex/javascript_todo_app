export class TodoList {
    constructor() {
        this.loadLocalStorage();
    }

    newTodo( todo ) {
        this.todos.unshift( todo );
        this.saveLocalStorage();
    }

    setCompleted( id ) {
        for( const todo of this.todos ) {
            if ( todo.id == id ) {
                todo.completed = !todo.completed;
                this.saveLocalStorage();
                break;
            }
        }
    }

    deleteTodo( id ) {
        this.todos = this.todos.filter( todo => todo.id != id );
        this.saveLocalStorage();
    }

    clearCompleted() {
        this.todos = this.todos.filter( todo => !todo.completed );
        this.saveLocalStorage();
    }

    saveLocalStorage() {
        localStorage.setItem("todo", JSON.stringify(this.todos));
    }

    loadLocalStorage() {
        this.todos = localStorage.getItem("todo")
            ? JSON.parse( localStorage.getItem("todo") )
            : [];
    }
}
