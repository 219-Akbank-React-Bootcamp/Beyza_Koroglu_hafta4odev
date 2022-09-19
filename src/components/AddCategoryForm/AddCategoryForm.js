import React from "react";
import "./AddCategoryForm.css";

function AddCategoryForm() {
  return (
    <div className="AddCategoryForm">
      <h2>Kategori Ekle</h2>
      <form>
        <ul>
          <li className="AddCategoryFormLi">
            <input
              className="CategoryInput"
              type="text"
              placeholder="Kategori giriniz"
            />
          </li>
          <li className="AddCategoryFormLi">
            <input
              className="StatuInput"
              type="text"
              placeholder="Durum giriniz"
            />
            <input className="ColorButton" type="color" />
          </li>
          <li className="AddCategoryFormLi">
            <input
              className="StatuInput"
              type="text"
              placeholder="Durum giriniz"
            />
            <input className="ColorButton" type="color" />
          </li>
          <li className="AddCategoryFormLi">
            <input
              className="StatuInput"
              type="text"
              placeholder="Durum giriniz"
            />
            <input className="ColorButton" type="color" />
          </li>
          <li className="AddCategoryFormLi">
            <input
              className="StatuInput"
              type="text"
              placeholder="Durum giriniz"
            />
            <input className="ColorButton" type="color" />
          </li>
        </ul>
        <button className="AddCategoryButton">Ekle</button>
      </form>
    </div>
  );
}

export default AddCategoryForm;
