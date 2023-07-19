import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';
import { addContact1 } from 'redux/contactSlice';


import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import Section from './Section/Section';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { getContactsList } from 'redux/selectors';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
   const contactList = useSelector(getContactsList);
   const dispatch = useDispatch();

  // const addContact = ({ name, number }) => {
    // const contactCard = {
    //   id: nanoid(),
    //   name: name,
    //   number: number,
    // };

  //   const isOnList = reduxContactCard
  //     .map(contact => contact.name.toLocaleLowerCase())
  //     .includes(name.toLocaleLowerCase());

  //   // if (!isOnList) {
  //   //   const newList = [...reduxContactCard, contactCard];
  //   //   setContacts(newList);
  //   //   Notify.success(`${name} added to contact list!`);
  //   //   localStorage.setItem('phonebook', JSON.stringify(newList));
  //   // } else {
  //   //   Notify.failure(`${name} is already in contact list!`);
  //   // }
  // };

  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  //   localStorage.setItem(
  //     'phonebook',
  //     JSON.stringify(contacts.filter(contact => contact.id !== contactId))
  //   );
  // };

  const searchInputHandler = e => {
    setFilter(e.currentTarget.value);
  };

  // useEffect(() => {
  //   if (JSON.parse(localStorage.getItem('phonebook')) === null) {
  //     localStorage.setItem('phonebook', JSON.stringify(contacts));
  //   } else {
  //     setContacts(JSON.parse(localStorage.getItem('phonebook')));
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

 

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <div className={css.contactsWrapper}>
          <Filter searchInputHandler={searchInputHandler} />
          <ContactList
            filter={filter}
            // contacts={contacts}
            // deleteContact={deleteContact}
          />
        </div>
      </Section>
    </>
  );
};

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
