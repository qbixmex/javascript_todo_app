export class Todo {

    static fromJson({ id, task, completed, created_at }) {
        const tempTodo = new Todo( task, id, created_at );

        tempTodo.completed = completed;

        return tempTodo;
    }

    constructor( task, id = null, created_at = null ) {
        this.task = task;
        this.id = id ? id : new Date().getTime();
        this.completed = false;
        this.created_at = created_at ? created_at : new Date();
    }

    getId() {
        return this.id;    
    }
}
