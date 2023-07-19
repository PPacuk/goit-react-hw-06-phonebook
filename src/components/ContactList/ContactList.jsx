import { PropTypes } from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact1 } from 'redux/contactSlice';
import { getContactCard } from 'redux/selectors';

export const ContactList = ({ filter, contacts, deleteContact }) => {
  const contactCard = useSelector(getContactCard);
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
              onClick={() => dispatch(deleteContact1(id))}
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
