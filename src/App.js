import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import { AddContactForm } from "./Components/Form/Form";
import { Contacts } from "./Components/Contacts/Contacts";
import { Search } from "./Components/Search/Search";

const CONTACTS = "contacts";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  const contactsFromStorage = localStorage.getItem(CONTACTS);
  
  useEffect(() => {
    if (contactsFromStorage) {
      const parseContactsFromStorage = JSON.parse(contactsFromStorage);
      setContacts(parseContactsFromStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (userName, number) => {
    const addContactName = userName;
    const findContact = contacts.find((elem) => elem.name === addContactName);
    if (findContact) {
      const message = `${addContactName} is already in contacts`;
      return alert(message);
    }

    setContacts([
      ...contacts,
      { id: nanoid(), name: userName, number: number },
    ]);
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    setFilter(value);
  };

  const filterContacts = () => {
    if (filter !== '') {
      const searchWord = filter.toLowerCase();

      const filteredArr = contacts.filter((elem) =>
        elem.name.toLowerCase().includes(searchWord)
      );
      return filteredArr;
    }
    return contacts;
  };

  const deleteContactHandler = (event) => {
    const deleteItemId = event.target.id;
    const newArr = contacts.filter((elem) => elem.id !== deleteItemId);
    setContacts( newArr );
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <AddContactForm formSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Search handleSearch={handleSearch} />
      <Contacts
        arrayOfContacts={filterContacts()}
        deleteContactHandler={deleteContactHandler}
      />
    </div>
  );
}

export default App;
