import './App.css';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import Form from './Components/Form/Form';
import { Contacts } from './Components/Contacts/Contacts';
import { Search } from './Components/Search/Search';

const CONTACTS = 'contacts';

class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  componentDidMount() {
    const contactsFromStorage = localStorage.getItem(CONTACTS);
    if(contactsFromStorage){
      this.setState( {contacts: JSON.parse(contactsFromStorage) } )
  }}

  componentDidUpdate() {
    localStorage.setItem(CONTACTS, JSON.stringify(this.state.contacts))
  }

  formSubmitHandler = data => {
    const addContactName = data.name;
    const findContact = this.state.contacts.find(elem => elem.name === addContactName);
    if(findContact){
      const message = `${addContactName} is already in contacts`;
      return alert(message);
    };
    
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { id: nanoid(), name: data.name, number: data.number }]
      }
    });
  }

  handleSearch = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    if (value) {
      return this.state.contacts.filter(elem => elem.name.includes(this.state.filter))
    }
  }

  filterContacts = () => {
    if (this.state.filter) {
      const searchWord = this.state.filter.toLowerCase();

      const filteredArr = this.state.contacts.filter(elem => elem.name.toLowerCase().includes(searchWord))
      return filteredArr
    }
    return this.state.contacts;
  }

  deleteContactHandler = (event) => {
    const deleteItemId = event.target.id;
    const newArr = this.state.contacts.filter(elem => elem.id !== deleteItemId);
    this.setState({contacts: newArr})
  }





  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Form formSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Search handleSearch={this.handleSearch} />
        <Contacts arrayOfContacts={this.filterContacts()} deleteContactHandler={this.deleteContactHandler}/>
      </div>
    );
  }
}
export default App;