import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './App.styled';
import { GlobalStyles } from 'components/GlobalStyle';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459 - 12 - 56' },
    { id: 'id-2', name: 'Hermine Kline', number: '443 - 89 - 12' },
    { id: 'id-3', name: 'Eden Clements', number: '645 - 17 - 79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227 - 91 - 26 ' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storedContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    const storedContacts = JSON.stringify(contacts);
    const prevContacts = JSON.stringify(localStorage.getItem('contacts'));
    if (storedContacts !== prevContacts) {
      localStorage.setItem('contacts', storedContacts);
    }
  }, [contacts]);

  const addContact = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts list`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filterContacts = event => {
    setFilter(event.currentTarget.value);
  };

  const updateContactsList = () => {
    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filterContacts;
  };

  const updatedContacts = updateContactsList();

  return (
    <Layout>
      <ErrorBoundary fallback="Sorry something went wrong ">
        <GlobalStyles />
        <h1>Phone book</h1>
        <ContactForm onAddContact={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onFilterChange={filterContacts} />
        <ContactList contacts={updatedContacts} deleteContact={deleteContact} />
      </ErrorBoundary>
    </Layout>
  );
};
