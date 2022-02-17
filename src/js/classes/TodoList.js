export class TodoList {
    constructor() {
        this.todos = [];
    }

    newTodo( todo ) {
        this.todos.unshift( todo );
    }

    setCompleted( id ) {
        for( const todo of this.todos ) {
            if ( todo.id == id ) {
                todo.completed = !todo.completed;
                break;
            }
        }
    }

    deleteTodo( id ) {
        this.todos = this.todos.filter( todo => todo.id != id );
    }

    deleteCompleted() {
        // TODO: Implement Logic to delete completed todos
    }
}
