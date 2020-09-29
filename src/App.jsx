import React, { useState } from 'react';
import ContactsList from "./ContactsList";
import ContactsForm from "./ContactsForm";
import ContactsSearch from "./ContactsSearch";
import './App.scss';

const App = () => {
  const [contacts, setContacts] = useState([{ id: 1, name: "Mark", phone: 454545, email: "we@mdo" },
  { id: 2, name: "Dark", phone: 464646, email: "re@mdo" }]);

  const handleAddContact = (user) => {
    setContacts([...contacts, user]);
    //contacts.push(user);
  };

  const handleDeleteContact = (id) => {

    const newcontacts = [...contacts];
    //the problem with filtering array of objects
    newcontacts.filter((contact) => contact.id !== id);
    setContacts(newcontacts);
    console.log("new contacts", contacts);
  }

  const handleEditContact = (id) => { };

  const handleSearchContact = () => { };

  return (
    <div className="App">
      <header className="App-header">

        <p>
          Contacts App
        </p>
        <ContactsForm onHandleAdd={handleAddContact} />
        <ContactsSearch onHandleSearch={handleSearchContact} />
        <ContactsList contacts={contacts} onHandleDelete={handleDeleteContact} onHandleEdit={handleEditContact} />
      </header>

    </div>
  );
}
//

export default App;
