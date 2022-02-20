import { useState } from 'react';
import axios from 'axios';
import css from './GroupsPage.module.css';

const GroupPage = () => {
  const [contacts, setContacts] = useState('');

  const fetchContacts = () => {
    try {
      const { data } = axios.get(
        'https://contacts-1234.herokuapp.com/api/groups',
      );
      setContacts(data);
    } catch (error) {
      error.message = 'Error...';
    }
  };

  return (
    <>
      <h2 className={css.title}>Group page content</h2>
      {contacts.length ? <h2>Ok</h2> : <h2>Not ok {contacts}</h2>}
    </>
  );
};

export default GroupPage;
