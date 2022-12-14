import React from "react";
import "./AddStatuForm.css";

function AddStatuForm(props) {
  let statu = "";
  const handleChange = (e) => {
    statu = e.target.value;
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (statu === "") alert("Durum boş bırakılamaz.");
    else {
      props.onClose();
      props.onAddStatu(statu);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    props.onClose();
  };

  return (
    <div className="AddStatuForm">
      <h2>Durum Ekle</h2>
      <form>
        <ul>
          <li className="AddStatuFormLi">
            <input
              onChange={handleChange}
              className="StatuInput"
              type="text"
              placeholder="Durum giriniz"
            />
          </li>
        </ul>
        <button onClick={handleAdd} className="AddStatuButton">
          Ekle
        </button>
        <button onClick={handleCancel} className="AddStatuButton">
          İptal
        </button>
      </form>
    </div>
  );
}

export default AddStatuForm;
