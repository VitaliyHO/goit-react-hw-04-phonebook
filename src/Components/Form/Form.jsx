import React, { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import { AddButton, Button, Form, Input } from '../../AppStyled.js'

export const AddContactForm = ({ formSubmit }) => {
  const [userName, setUserName] = useState("");
  const [number, setNumber] = useState("");

  const inputNameId = nanoid();
  const inputPhoneId = nanoid();

  const handleSubmit = (event) => {
    event.preventDefault();
    formSubmit(userName, number);
    reset();
  };

  const reset = () => {
    setUserName("");
    setNumber("");
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <label htmlFor={inputNameId}>
          Name
        </label>
        <Input
          type="text"
          id={inputNameId}
          name="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor={inputPhoneId}>
          Number
        </label>
        <Input
          type="tel"
          id={inputPhoneId}
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <AddButton type="submit">
          Add contact
        </AddButton>
      </Form>
    </div>
  );
};

Form.propTypes = {
    formSubmit: PropTypes.func.isRequired
}