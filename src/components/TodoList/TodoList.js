import React from "react";
import TodoItem from "../TodoItem";
import "./TodoList.css";

function TodoList(props) {
  return (
    <div className="TodoList">
      <select className="TodoFilter">
        <option>Kategori seç</option>
        {props.categories.map((category) => (
          <option key={category.id}>{category.category}</option>
        ))}
      </select>
      <select className="TodoFilter">
        <option>Durum seç</option>
      </select>
      <br />
      <ul>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            categories={props.categories}
            todoItem={todo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
