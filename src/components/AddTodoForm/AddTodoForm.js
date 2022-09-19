import React from "react";
import "./AddTodoForm.css";

function AddTodoForm(props) {
  return (
    <div className="AddTodoForm">
      <form>
        <input className="TodoInput" type="text" placeholder="Todo giriniz" />
        <select className="AddTodoSelect">
          <option>Kategori seçiniz.</option>
          {props.categories.map((category) => (
            <option key={category.id}>{category.category}</option>
          ))}
        </select>
        <button className="AddTodoButton">Ekle</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
