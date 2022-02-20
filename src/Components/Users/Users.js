import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import PageHeading from '../PageHeading/PageHeading';
// import "./App.css";
import data from "../../mock-data.json";
import ReadOnly from "./Readonly";
import Edit from "./Edit";

import style from "./Users.module.css";

const Users = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    userName: "",
    email: "",
    date: null,
    group: "",
  });

  const [editFormData, setEditFormData] = useState({
    userName: "",
    email: "",
    date: null,
    group: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      userName: addFormData.userName,
      email: addFormData.email,
      date: addFormData.date,
      group: addFormData.group,
      
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
    userName: editFormData.userName,
      email: editFormData.email,
      date: editFormData.date,
      group: editFormData.group,
      
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
        userName: contact.userName,
        email: contact.email,
      date: contact.date,
      group: contact.group,
      
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

    return (
        <>
      <PageHeading text="Users"/>
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr className={style.item}>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
            <th>Group</th>
            <th> </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <Edit
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnly
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add User</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="userName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
         type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <input
          type="date"
          name="date"
          required="required"
          placeholder="Enter date..."
          onChange={handleAddFormChange}
        />
        <select
          type="text"
          name="group"
          required="required"
          placeholder="choose group"
                        onChange={handleAddFormChange}
                        className={style.input}
              >
              <option value="React">React</option>
              <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
                <option value="Node">Node.js</option>
              </select>
        
        <button type="submit" className={style.btn}>Add</button>
      </form>
            </div>
            </>
  );
};

export default Users;
