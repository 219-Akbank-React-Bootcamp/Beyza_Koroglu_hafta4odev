import { useState } from "react";
import "./App.css";
import AddCategoryForm from "./components/AddCategoryForm";
import AddTodoForm from "./components/AddTodoForm";
import CategoryList from "./components/CategoryList";
import TodoList from "./components/TodoList";

function App() {
  const [categories, setCategories] = useState([
    {
      id: "1",
      category: "Eğitim",
      statusList: [
        { id: "1", statu: "ders saati belirlendi", color: "green" },

        { id: "2", statu: "ders başladı", color: "red" },

        { id: "3", statu: "dersteyiz", color: "yellow" },

        { id: "4", statu: "ders bitti ödevverildi", color: "pink" },

        { id: "5", statu: "ödevler kontrol edildi", color: "purple" },
      ],
    },
    {
      id: "2",
      category: "Ev işi",
      statusList: [
        { id: "1", statu: "iş henüz başlamadı", color: "red" },

        { id: "2", statu: "iş başladı", color: "blue" },

        { id: "3", statu: "iş yapılıyor", color: "yellow" },

        { id: "4", statu: "iş bitmek üzere", color: "pink" },

        { id: "5", statu: "iş bitti", color: "gray" },
      ],
    },
  ]);

  const [todos, setTodos] = useState([
    {
      id: "1",
      todo: "React öğren",
      category: "1",
      statu: "0",
    },
    {
      id: "2",
      todo: "Evi temizle",
      category: "2",
      statu: "3",
    },
  ]);

  return (
    <div className="App">
      <div className="FormBlock">
        <CategoryList categories={categories} />
        <AddCategoryForm />
      </div>
      <div className="Todos">
        <AddTodoForm categories={categories} />
        <TodoList categories={categories} todos={todos} />
      </div>
    </div>
  );
}

export default App;
