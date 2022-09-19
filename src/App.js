import { useState } from "react";
import { v4 as uuid } from "uuid";
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

  const addTodo = (todo, category) => {
    setTodos([
      ...todos,
      { id: uuid(), todo: todo, category: category, statu: "0" },
    ]);
  };

  const changeStatu = (todoID, statu) => {
    const todo = todos.find((todo) => todo.id === todoID);
    todo.statu = statu;
  };

  const deleteTodo = (todoID) => {
    setTodos(todos.filter((todo) => todo.id !== todoID));
  };

  const deleteCategory = (categoryID) => {
    setCategories(categories.filter((category) => category.id !== categoryID));
    setTodos(todos.filter((todo) => todo.category !== categoryID));
  };

  return (
    <div className="App">
      <div className="FormBlock">
        <CategoryList categories={categories} deleteCategory={deleteCategory} />
        <AddCategoryForm />
      </div>
      <div className="Todos">
        <AddTodoForm categories={categories} addTodo={addTodo} />
        <TodoList
          categories={categories}
          todos={todos}
          changeStatu={changeStatu}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
