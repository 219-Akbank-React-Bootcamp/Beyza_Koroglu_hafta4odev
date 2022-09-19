import React from "react";
import "./CategoryList.css";

function CategoryList(props) {
  return (
    <div className="CategoryList">
      <h2>Kategori Listesi</h2>
      <ul>
        {props.categories.map((category) => (
          <li className="Category" key={category.id}>
            <span>{category.category}</span>
            <span className="CategoryListButtons">
              <button className="EditButton">Düzenle</button>
              <button className="DeleteButton">Sil</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
