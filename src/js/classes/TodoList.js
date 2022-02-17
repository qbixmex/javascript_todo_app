export class TodoList {
    constructor() {
        this.todos = [];
    }

    newTodo( todo ) {
        this.todos.unshift( todo );
    }

    setCompleted( id ) {
        // TODO: Implement Logic to set completed
    }

    deleteTodo( id ) {
        // TODO: Implement Logic to delete todo
    }

    deleteCompleted() {
        // TODO: Implement Logic to delete completed todos
    }
}
