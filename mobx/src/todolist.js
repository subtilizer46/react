import React from "react";
import { observer } from "mobx-react";
import TodoStore from "./todostore";

const todoStore = new TodoStore();

const TodoList = observer(() => {
  const { todos } = todoStore;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => todoStore.toggleTodo(todo)}
          />
          {todo.task}
        </li>
      ))}
    </ul>
  );
});

export default TodoList;