import React from "react";
import CategoryItem from "../CategoryItem";
import "./CategoryList.css";

function CategoryList(props) {
  return (
    <div className="CategoryList">
      <h2>Kategori Listesi</h2>
      <ul>
        {props.categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            deleteCategory={props.deleteCategory}
          />
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
