import React from "react";
import style from "./Users.module.css";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className={style.item}>
      <td>{contact.userName}</td>
      <td>{contact.email}</td>
      <td>{contact.date}</td>
      <td>{contact.group}</td>
      <td>
        <button
          type="button"
          className={style.btn}
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button
          type="button"
          className={style.btn}
          onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;