import PropTypes from 'prop-types';
import {
  ListItem,
  Text,
  Button,
  ButtonContainer,
} from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <ListItem>
      <Text>
        {name}: {number}
      </Text>
      <ButtonContainer>
        <Button type="button" onClick={() => deleteContact(id)}>
          Delete Contact
        </Button>
      </ButtonContainer>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
