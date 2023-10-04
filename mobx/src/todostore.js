import { makeAutoObservable, observable } from "mobx";

class TodoStore {
    @observable todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(task) {
    this.todos.push({ task, completed: false });
  }

  toggleTodo(todo) {
    todo.completed = !todo.completed;
  }

  removeTodo(todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}

export default TodoStore;