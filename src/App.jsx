import React, { useState } from 'react';
import ContactsList from "./ContactsList";
import ContactsForm from "./ContactsForm";
import ContactsSearch from "./ContactsSearch";
import './App.scss';

const App = () => {
  const [contacts, setContacts] = useState([{ id: 1, name: "Mark", phone: 454545, email: "we@mdo" },
  { id: 2, name: "Dark", phone: 464646, email: "re@mdo" }]);

  const handleAddUser = (user) => {
    setContacts([...contacts, user]);
    //contacts.push(user);
  };

  return (
    <div className="App">
      <header className="App-header">

        <p>
          Contacts App
        </p>
        <ContactsForm onHandleAdd={handleAddUser} />
        <ContactsSearch />
        <ContactsList contacts={contacts} />
      </header>

    </div>
  );
}
//

export default App;
