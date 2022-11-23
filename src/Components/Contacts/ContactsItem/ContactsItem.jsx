import PropTypes from "prop-types";
import { Button, FlexBox, IMG, Li, P } from "../../../AppStyled";

export const ContactsItem = ({ arrayOfContacts, deleteContactHandler }) => {
  return arrayOfContacts.map(({ id, name, number }) => {
    return (
      <Li key={id}>
        <FlexBox>
        <IMG
          src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/null/external-user-user-tanah-basah-basic-outline-tanah-basah-4.png"
          alt="user"
        />
        <div>
          <P>{name}</P>
          <P>{number}</P>
        </div>
        </FlexBox>
        <Button
          id={id}
          type="button"
          onClick={deleteContactHandler}
        >
          Delete
        </Button>
      </Li>
    );
  });
};

ContactsItem.propTypes = {
  arrayOfContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContactHandler: PropTypes.func.isRequired,
};
