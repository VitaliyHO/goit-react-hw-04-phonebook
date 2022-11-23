import { ContactsItem } from "./ContactsItem/ContactsItem";
import PropTypes from "prop-types";

export const Contacts = ({ arrayOfContacts, deleteContactHandler }) => {
  return (
    <div className="container">
      <ul>
        <ContactsItem
          arrayOfContacts={arrayOfContacts}
          deleteContactHandler={deleteContactHandler}
        />
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  arrayOfContacts: PropTypes.array.isRequired,
  deleteContactHandler: PropTypes.func.isRequired,
};
