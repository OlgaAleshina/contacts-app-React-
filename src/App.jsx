import React, { useState, useEffect } from 'react';
import ContactsList from "./containers/ContactsList";
import ContactsForm from "./containers/ContactsForm";
import ContactsSearch from "./containers/ContactsSearch";
import Container from "react-bootstrap/Container";
import API from "./utils/API.js";
import "./App.scss";


const App = () => {

  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await API('contacts/');
        setContacts(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  },

    []);

  //set if the search filter is used
  const [isSearched, setIsSearched] = useState(false);
  //set searched contacts table
  const [searchResult, setSearchResult] = useState("");

  const handleAddContact = (user) => {
    API.post('/contacts', user)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    setContacts([...contacts, user]);

  };

  //takes id of contact to delete from ContactsList component
  const handleDeleteContact = (id) => {
    API.delete(`/contacts/${id}`)

    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };


  const handleEditContact = (editedContact) => {
    API.put(`/contacts/${editedContact.id}`, editedContact)
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
/*<ContactsList
          contacts={isSearched ? searchResult : contacts}
          onDeleteContact={handleDeleteContact}
          onEditContact={handleEditContact}
        />*/