export class Todo {
    constructor( task, id = null ) {
        this.task = task;
        this.id = id ? id : new Date().getTime();
        this.completed = false;
        this.created_at = new Date();
    }
}
