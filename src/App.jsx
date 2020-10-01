import React, { useState } from 'react';
import ContactsList from "./containers/ContactsList";
import ContactsForm from "./containers/ContactsForm";
import ContactsSearch from "./containers/ContactsSearch";
import Container from "react-bootstrap/Container";
import "./App.scss";


const App = () => {
  const [contacts, setContacts] = useState([{ id: 1, name: "Mark", phone: 454545, email: "we@mdo" },
  { id: 2, name: "Dark", phone: 464646, email: "re@mdo" }]);

  //set if the search filter is used
  const [isSearched, setIsSearched] = useState(false);
  //set searched contacts table
  const [searchResult, setSearchResult] = useState("");

  const handleAddContact = (user) => {
    setContacts([...contacts, user]);
    //contacts.push(user);
  };

  //takes id of contact to delete from ContactsList component
  const handleDeleteContact = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };


  const handleEditContact = (editedContact) => {
    const filteredContacts = contacts.filter(
      (contact) => contact.id !== editedContact.id
    );
    setContacts([...filteredContacts, editedContact]);
  };

  //takes value of search form from ContactsSearch component
  const handleSearch = (value) => {
    const result = contacts.filter((contact) => {
      return contact.name.toLowerCase().search(value.toLowerCase()) > -1;
    });
    setSearchResult(result);
    //setIsSearched(true);
  };

  //takes true/false value from ContactsSearch component to check if the search filter is used
  const handleSearchTable = (isSearched) => {
    setIsSearched(isSearched);
  };

  return (
    <Container className="justify-content-center">
      <header className="App-header">
        <h1>Contacts App</h1>
      </header>
      <main>
        <ContactsForm onHandleAdd={handleAddContact} />

        <ContactsSearch
          onHandleSearch={handleSearch}
          onHandleSearchedTable={handleSearchTable}
        />
        <ContactsList
          contacts={isSearched ? searchResult : contacts}
          onDeleteContact={handleDeleteContact}
          onEditContact={handleEditContact}
        />
      </main>
    </Container>
  );
}

export default App;
