import style from './ContactsItem.module.css';
import PropTypes from 'prop-types';

export const ContactsItem = ({ arrayOfContacts, deleteContactHandler }) => {
    return arrayOfContacts.map(({ id, name, number }) => {
        return (
            <li key={id}>
                {name}: {number}
                <button className={style.deleteBtn} id={id} type="button" onClick={deleteContactHandler}>Delete</button>
            </li>)
    })
};

ContactsItem.propTypes = {
    arrayOfContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    deleteContactHandler: PropTypes.func.isRequired
}