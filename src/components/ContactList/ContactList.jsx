import { PropTypes } from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { getContactsList } from 'redux/selectors';

export const ContactList = ({ filter }) => {
  const contactCard = useSelector(getContactsList);
  const dispatch = useDispatch();

  return (
    <ul className={css.contactsList}>
      {contactCard
        .filter(contact =>
          contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        )
        .map(({id, name, number}) => (
          <li key={id}>
            {name} : {number}
            <button
              className={css.contactsBtn}
              onClick={() => dispatch(deleteContact(id))}
            >
              delete
            </button>
          </li>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
