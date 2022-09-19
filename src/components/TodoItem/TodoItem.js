import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const category = props.categories.find(
    (category) => category.id == props.todoItem.category
  );
  const statu = category.statusList.find(
    (item) => props.todoItem.statu === item.id
  );
  const background = statu ? statu.color : "white";
  return (
    <li className="TodoItem" style={{ backgroundColor: background }}>
      <span>{props.todoItem.todo}</span>
      <span className="TodoItemRight">
        <select defaultValue={props.todoItem.statu} className="TodoSelect">
          <option value="0"></option>
          {category.statusList.map((item) => (
            <option key={item.id} value={item.id}>
              {item.statu}
            </option>
          ))}
        </select>
        <button className="DeleteTodo">X</button>
      </span>
    </li>
  );
}

export default TodoItem;
